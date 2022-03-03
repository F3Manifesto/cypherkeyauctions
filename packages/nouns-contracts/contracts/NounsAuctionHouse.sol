// SPDX-License-Identifier: GPL-3.0

/// @title The Nouns DAO auction house

/*********************************
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 * ░░░░░░█████████░░█████████░░░ *
 * ░░░░░░██░░░████░░██░░░████░░░ *
 * ░░██████░░░████████░░░████░░░ *
 * ░░██░░██░░░████░░██░░░████░░░ *
 * ░░██░░██░░░████░░██░░░████░░░ *
 * ░░░░░░█████████░░█████████░░░ *
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 *********************************/

// LICENSE
// NounsAuctionHouse.sol is a modified version of Zora's AuctionHouse.sol:
// https://github.com/ourzora/auction-house/blob/54a12ec1a6cf562e49f0a4917990474b11350a2d/contracts/AuctionHouse.sol
//
// AuctionHouse.sol source code Copyright Zora licensed under the GPL-3.0 license.
// With modifications by Nounders DAO.

pragma solidity ^0.8.6;
import "hardhat/console.sol";
import { PausableUpgradeable } from '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import { ReentrancyGuardUpgradeable } from '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import { OwnableUpgradeable } from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import { IERC20 } from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import { INounsAuctionHouse } from './interfaces/INounsAuctionHouse.sol';
import { INounsToken } from './interfaces/INounsToken.sol';
import { IWETH } from './interfaces/IWETH.sol';

interface IDigitalaxMonaOracle {
    function getData() external returns (uint256, bool);
}

contract NounsAuctionHouse is INounsAuctionHouse, PausableUpgradeable, ReentrancyGuardUpgradeable, OwnableUpgradeable {
    // The Nouns ERC721 token contract
    INounsToken public nouns;
    IDigitalaxMonaOracle public oracle;
    IERC20 public monaToken;

    uint256 auctionIndex;

    // The address of the WETH contract
    address public weth;

    // The minimum amount of time left in an auction after a new bid is created
    uint256 public timeBuffer;

    // The minimum price accepted in an auction
    uint256 public reservePrice;

    // The minimum percentage difference between the last bid amount and the current bid
    uint8 public minBidIncrementPercentage;

    // The duration of a single auction
    uint256 public duration;

    // The active auction
    INounsAuctionHouse.Auction public auction;

    /**
     * @notice Initialize the auction house and base contracts,
     * populate configuration values, and pause the contract.
     * @dev This function can only be called once.
     */
    function initialize(
        INounsToken _nouns,
        address _weth,
        uint256 _timeBuffer,
        uint256 _reservePrice,
        uint8 _minBidIncrementPercentage,
        uint256 _duration
    ) external initializer {
        __Pausable_init();
        __ReentrancyGuard_init();
        __Ownable_init();

        _pause();

        nouns = _nouns;
        weth = _weth;
        timeBuffer = _timeBuffer;
        reservePrice = _reservePrice;
        minBidIncrementPercentage = _minBidIncrementPercentage;
        duration = _duration;
    }

    /**
     * @notice Settle the current auction, mint a new Noun, and put it up for auction.
     */
    function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused {
        _settleAuction();
        _createAuction();
    }

    /**
     * @notice Settle the current auction.
     * @dev This function can only be called when the contract is paused.
     */
    function settleAuction() external override whenPaused nonReentrant {
        _settleAuction();
    }

    /**
     * @notice Create a bid for a Noun, with a given amount.
     * @dev This contract only accepts payment in ETH.
     */
    function createBid(uint256 useERC20, uint256 nounId) external payable override nonReentrant {
        INounsAuctionHouse.Auction memory _auction = auction;

        require(_auction.nounId == nounId, 'Noun not up for auction');
        require(block.timestamp < _auction.endTime, 'Auction expired');
        if(useERC20 == 0){
            require(msg.value >= reservePrice, 'Must send at least reservePrice');
            require(
                msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
                'Must send more than last bid by minBidIncrementPercentage amount'
            );
        } else {
            uint256 minEthValue;
            if(_auction.amount > reservePrice){
                minEthValue = _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100);
            } else{
                minEthValue = reservePrice;
            }
            uint256 erc20Value = _estimateERC20Amount(minEthValue);
            require(monaToken.balanceOf(msg.sender) >= erc20Value, "Insufficient balance");
            require(monaToken.allowance(msg.sender, address(this)) >= erc20Value, "Insufficient allowance");
        }

        address payable lastBidder = _auction.bidder;

        // Refund the last bidder, if applicable
        if (lastBidder != address(0)) {
            if(auction.lastBidType == 1) {
                _safeTransferETHWithFallback(lastBidder, _auction.amount);
            } else{
                // This is erc20 transfer
                monaToken.transfer(lastBidder, _auction.amount);
            }
        }

        if(useERC20 == 0){
            auction.amount = msg.value;
            auction.lastBidType = 1;
        } else{
            auction.amount = useERC20;
            auction.lastBidType = 2;

            monaToken.transferFrom(msg.sender, address(this), useERC20);
        }

        auction.bidder = payable(msg.sender);

        // Extend the auction if the bid was received within `timeBuffer` of the auction end time
        bool extended = _auction.endTime - block.timestamp < timeBuffer;
        if (extended) {
            auction.endTime = _auction.endTime = block.timestamp + timeBuffer;
        }

        if(useERC20 == 0){
            emit AuctionBid(_auction.nounId, msg.sender, msg.value, extended);
        } else{
            emit AuctionBidERC20(_auction.nounId, msg.sender, useERC20, extended);
        }

        if (extended) {
            emit AuctionExtended(_auction.nounId, _auction.endTime);
        }
    }

    /**
     * @notice Pause the Nouns auction house.
     * @dev This function can only be called by the owner when the
     * contract is unpaused. While no new auctions can be started when paused,
     * anyone can settle an ongoing auction.
     */
    function pause() external override onlyOwner {
        _pause();
    }

     /**
     @notice Method for updating oracle
     @dev Only admin
     @param _oracle new oracle
     */
    function updateOracle(IDigitalaxMonaOracle _oracle) external onlyOwner {
        oracle = _oracle;
    }

     /**
     @notice Method for updating monaToken
     @dev Only admin
     @param _monaToken new monatoken
     */
    function updateMonaToken(IERC20 _monaToken) external onlyOwner {
        monaToken = _monaToken;
    }


    /**
     * @notice Unpause the Nouns auction house.
     * @dev This function can only be called by the owner when the
     * contract is paused. If required, this function will start a new auction.
     */
    function unpause() external override onlyOwner {
        _unpause();

        if (auction.startTime == 0 || auction.settled) {
            _createAuction();
        }
    }

    /**
     * @notice Set the auction time buffer.
     * @dev Only callable by the owner.
     */
    function setTimeBuffer(uint256 _timeBuffer) external override onlyOwner {
        timeBuffer = _timeBuffer;

        emit AuctionTimeBufferUpdated(_timeBuffer);
    }

    /**
     * @notice Set the auction reserve price.
     * @dev Only callable by the owner.
     */
    function setReservePrice(uint256 _reservePrice) external override onlyOwner {
        reservePrice = _reservePrice;

        emit AuctionReservePriceUpdated(_reservePrice);
    }

    /**
     * @notice Set the auction minimum bid increment percentage.
     * @dev Only callable by the owner.
     */
    function setMinBidIncrementPercentage(uint8 _minBidIncrementPercentage) external override onlyOwner {
        minBidIncrementPercentage = _minBidIncrementPercentage;

        emit AuctionMinBidIncrementPercentageUpdated(_minBidIncrementPercentage);
    }

    /**
     * @notice Create an auction.
     * @dev Store the auction details in the `auction` state variable and emit an AuctionCreated event.
     * If the mint reverts, the minter was updated without pausing this contract first. To remedy this,
     * catch the revert and pause this contract.
     */
    function _createAuction() internal {
    //try nouns.mint() returns (uint256 nounId) {
            uint256 startTime = block.timestamp;
            uint256 endTime = startTime + duration;

            auction = Auction({
                nounId: auctionIndex,
                amount: 0,
                startTime: startTime,
                endTime: endTime,
                bidder: payable(0),
                settled: false,
                lastBidType: 0
            });

            auctionIndex = auctionIndex + 1;

            emit AuctionCreated(auction.nounId, startTime, endTime);
//        } catch Error(string memory) {
//            _pause();
//        }
    }

    /**
     * @notice Settle an auction, finalizing the bid and paying out to the owner.
     * @dev If there are no bids, the Noun is burned.
     */
    function _settleAuction() internal {
        INounsAuctionHouse.Auction memory _auction = auction;

        require(_auction.startTime != 0, "Auction hasn't begun");
        require(!_auction.settled, 'Auction has already been settled');
        require(block.timestamp >= _auction.endTime, "Auction hasn't completed");

        auction.settled = true;

        if (_auction.bidder != address(0)) {
            uint256 mintToken = nouns.mint();
            nouns.transferFrom(address(this), _auction.bidder, mintToken);
        }
        console.log("The last bid is type %s", _auction.lastBidType);
        // TODO ERC20 logic here!
        if (_auction.amount > 0) {
            if(_auction.lastBidType == 1){

        console.log("routine 1 %s", _auction.lastBidType);
                _safeTransferETHWithFallback(owner(), _auction.amount);
            } else {
        console.log("routine 2 %s", _auction.lastBidType);
                monaToken.transfer(owner(), _auction.amount);
                console.log("didnt reach", _auction.amount);
            }
        }

        emit AuctionSettled(_auction.nounId, _auction.bidder, _auction.amount);
    }

    /**
     * @notice Transfer ETH. If the ETH transfer fails, wrap the ETH and try send it as WETH.
     */
    function _safeTransferETHWithFallback(address to, uint256 amount) internal {
        if (!_safeTransferETH(to, amount)) {
            IWETH(weth).deposit{ value: amount }();
            IERC20(weth).transfer(to, amount);
        }
    }

    /**
     * @notice Transfer ETH and return the success status.
     * @dev This function only forwards 30,000 gas to the callee.
     */
    function _safeTransferETH(address to, uint256 value) internal returns (bool) {
        (bool success, ) = to.call{ value: value, gas: 30_000 }(new bytes(0));
        return success;
    }

    /**
     @notice Private method to estimate ETH for paying
     @param _amountInETH amount in eth
     */
    function _estimateERC20Amount(uint256 _amountInETH) public returns (uint256) {
        (uint256 exchangeRate, bool rateValid) = oracle.getData();
        require(rateValid, "EstimateErc20Amount: Oracle data is invalid");

        return (_amountInETH * 1e18) / (exchangeRate);
    }
    /**
     @notice Private method to estimate ETH for paying
     @param _amountInERC20 erc20 amount in wei
     */
    function _estimateETHAmount(uint256 _amountInERC20) public returns (uint256) {
        (uint256 exchangeRate, bool rateValid) = oracle.getData();
        require(rateValid, "EstimateEthAmount: Oracle data is invalid");

        return (_amountInERC20 * exchangeRate) / (1e18);
    }
}
