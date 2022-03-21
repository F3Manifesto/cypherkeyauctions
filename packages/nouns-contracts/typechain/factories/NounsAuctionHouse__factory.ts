/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { NounsAuctionHouse } from "../NounsAuctionHouse";

export class NounsAuctionHouse__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsAuctionHouse> {
    return super.deploy(overrides || {}) as Promise<NounsAuctionHouse>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NounsAuctionHouse {
    return super.attach(address) as NounsAuctionHouse;
  }
  connect(signer: Signer): NounsAuctionHouse__factory {
    return super.connect(signer) as NounsAuctionHouse__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsAuctionHouse {
    return new Contract(address, _abi, signerOrProvider) as NounsAuctionHouse;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "extended",
        type: "bool",
      },
    ],
    name: "AuctionBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "extended",
        type: "bool",
      },
    ],
    name: "AuctionBidERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "AuctionExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minBidIncrementPercentage",
        type: "uint256",
      },
    ],
    name: "AuctionMinBidIncrementPercentageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
    ],
    name: "AuctionReservePriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AuctionSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timeBuffer",
        type: "uint256",
      },
    ],
    name: "AuctionTimeBufferUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountInETH",
        type: "uint256",
      },
    ],
    name: "_estimateERC20Amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountInERC20",
        type: "uint256",
      },
    ],
    name: "_estimateETHAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "auction",
    outputs: [
      {
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "settled",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "lastBidType",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "useERC20",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
    ],
    name: "createBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "freezeERC20Bid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "freezeETHBid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INounsToken",
        name: "_nouns",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_timeBuffer",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_minBidIncrementPercentage",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minBidIncrementPercentage",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "monaToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nouns",
    outputs: [
      {
        internalType: "contract INounsToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract IDigitalaxMonaOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oraclePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reservePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_minBidIncrementPercentage",
        type: "uint8",
      },
    ],
    name: "setMinBidIncrementPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
    ],
    name: "setReservePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_timeBuffer",
        type: "uint256",
      },
    ],
    name: "setTimeBuffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settleAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settleCurrentAndCreateNewAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timeBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleFreezeERC20Bid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleFreezeETHBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "updateAuctionEndTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_monaToken",
        type: "address",
      },
    ],
    name: "updateMonaToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IDigitalaxMonaOracle",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "updateOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "updateOraclePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506129f4806100206000396000f3fe6080604052600436106101fe5760003560e01c806387f49f541161011d578063ce9c7c0d116100b0578063ec91f2a41161007f578063f25efffc11610064578063f25efffc1461065a578063f2fde38b1461066f578063f4ad10301461068f57600080fd5b8063ec91f2a414610625578063efb6660a1461063b57600080fd5b8063ce9c7c0d146105c5578063db2e1eed146105e5578063e1dec75a146105fb578063e8bba73a1461061057600080fd5b8063aed41694116100ec578063aed416941461054c578063b296024d1461056c578063b7751c7114610598578063c7802c0c146105ab57600080fd5b806387f49f54146104cc5780638da5cb5b146104ec5780639f94f70d14610517578063a4d0a17e1461053757600080fd5b80635ead3c5d11610195578063715018a611610164578063715018a6146103c95780637d9f6db5146103de5780637dc0d1d01461048a5780638456cb59146104b757600080fd5b80635ead3c5d146103535780635fab807814610373578063668aa824146103935780637120334b146103a957600080fd5b806336ebdb38116101d157806336ebdb38146102cd5780633f4ba83a146102ed5780633fc8cef3146103025780635c975abb1461032f57600080fd5b806304cd84af146102035780630fb5a6b41461025a5780631cb44dfc1461027e5780632de45f18146102a0575b600080fd5b34801561020f57600080fd5b5060cb546102309073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561026657600080fd5b5061027060d15481565b604051908152602001610251565b34801561028a57600080fd5b5061029e610299366004612773565b6106af565b005b3480156102ac57600080fd5b5060c9546102309073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102d957600080fd5b5061029e6102e8366004612870565b610762565b3480156102f957600080fd5b5061029e610812565b34801561030e57600080fd5b5060cd546102309073ffffffffffffffffffffffffffffffffffffffff1681565b34801561033b57600080fd5b5060335460ff165b6040519015158152602001610251565b34801561035f57600080fd5b5061029e61036e36600461281c565b6108b9565b34801561037f57600080fd5b5061027061038e36600461281c565b610925565b34801561039f57600080fd5b5061027060d95481565b3480156103b557600080fd5b5061029e6103c436600461281c565b61094e565b3480156103d557600080fd5b5061029e6109ea565b3480156103ea57600080fd5b5060d25460d35460d45460d55460d65460d75461043d959493929173ffffffffffffffffffffffffffffffffffffffff8116917401000000000000000000000000000000000000000090910460ff169087565b60408051978852602088019690965294860193909352606085019190915273ffffffffffffffffffffffffffffffffffffffff166080840152151560a083015260c082015260e001610251565b34801561049657600080fd5b5060ca546102309073ffffffffffffffffffffffffffffffffffffffff1681565b3480156104c357600080fd5b5061029e610a5b565b3480156104d857600080fd5b5061029e6104e73660046127b9565b610aca565b3480156104f857600080fd5b5060975473ffffffffffffffffffffffffffffffffffffffff16610230565b34801561052357600080fd5b5061029e610532366004612773565b610c27565b34801561054357600080fd5b5061029e610cd5565b34801561055857600080fd5b5061029e61056736600461281c565b610d8e565b34801561057857600080fd5b5060d0546105869060ff1681565b60405160ff9091168152602001610251565b61029e6105a636600461284e565b610dfa565b3480156105b757600080fd5b5060d8546103439060ff1681565b3480156105d157600080fd5b5061029e6105e036600461281c565b61160e565b3480156105f157600080fd5b5061027060cf5481565b34801561060757600080fd5b5061029e6116aa565b34801561061c57600080fd5b5061029e611725565b34801561063157600080fd5b5061027060ce5481565b34801561064757600080fd5b5060d85461034390610100900460ff1681565b34801561066657600080fd5b5061029e6117a9565b34801561067b57600080fd5b5061029e61068a366004612773565b611864565b34801561069b57600080fd5b506102706106aa36600461281c565b611960565b60975473ffffffffffffffffffffffffffffffffffffffff16331461071b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60ca80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60975473ffffffffffffffffffffffffffffffffffffffff1633146107c95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b60d0805460ff191660ff83169081179091556040519081527fec5ccd96cc77b6219e9d44143df916af68fc169339ea7de5008ff15eae13450d906020015b60405180910390a150565b60975473ffffffffffffffffffffffffffffffffffffffff1633146108795760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b610881611978565b60d45415806108aa575060d65474010000000000000000000000000000000000000000900460ff165b156108b7576108b7611a21565b565b60975473ffffffffffffffffffffffffffffffffffffffff1633146109205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b60d955565b6000670de0b6b3a764000060d9548361093e9190612919565b61094891906128de565b92915050565b60975473ffffffffffffffffffffffffffffffffffffffff1633146109b55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b60ce8190556040518181527f1b55d9f7002bda4490f467e326f22a4a847629c0f2d1ed421607d318d25b410d90602001610807565b60975473ffffffffffffffffffffffffffffffffffffffff163314610a515760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b6108b76000611b02565b60975473ffffffffffffffffffffffffffffffffffffffff163314610ac25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b6108b7611b79565b600054610100900460ff1680610ae3575060005460ff16155b610b555760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610712565b600054610100900460ff16158015610b77576000805461ffff19166101011790555b610b7f611c01565b610b87611cd2565b610b8f611d87565b610b97611b79565b60c9805473ffffffffffffffffffffffffffffffffffffffff808a167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790925560cd80549289169290911691909117905560ce85905560cf84905560d0805460ff851660ff1990911617905560d18290558015610c1e576000805461ff00191690555b50505050505050565b60975473ffffffffffffffffffffffffffffffffffffffff163314610c8e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b60cb80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60335460ff16610d275760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610712565b60026065541415610d7a5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610712565b6002606555610d87611e44565b6001606555565b60975473ffffffffffffffffffffffffffffffffffffffff163314610df55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b60d555565b60026065541415610e4d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610712565b600260655560d280548214610ea45760405162461bcd60e51b815260206004820152601760248201527f4e6f756e206e6f7420757020666f722061756374696f6e0000000000000000006044820152606401610712565b80600301544210610ef75760405162461bcd60e51b815260206004820152600f60248201527f41756374696f6e206578706972656400000000000000000000000000000000006044820152606401610712565b826110505760d85460ff1615610f4f5760405162461bcd60e51b815260206004820152601d60248201527f4554482062696473206172652063757272656e746c792066726f7a656e0000006044820152606401610712565b60cf54341015610fa15760405162461bcd60e51b815260206004820152601f60248201527f4d7573742073656e64206174206c6561737420726573657276655072696365006044820152606401610712565b60d0546001820154606491610fbb9160ff90911690612919565b610fc591906128de565b8160010154610fd491906128c6565b34101561104b576040805162461bcd60e51b81526020600482015260248101919091527f4d7573742073656e64206d6f7265207468616e206c617374206269642062792060448201527f6d696e426964496e6372656d656e7450657263656e7461676520616d6f756e746064820152608401610712565b6112ee565b60d854610100900460ff16156110a85760405162461bcd60e51b815260206004820152601f60248201527f45524332302062696473206172652063757272656e746c792066726f7a656e006044820152606401610712565b600060cf54826001015411156110f25760d05460018301546064916110d29160ff90911690612919565b6110dc91906128de565b82600101546110eb91906128c6565b90506110f7565b5060cf545b600061110282611960565b60cb546040517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152919250829173ffffffffffffffffffffffffffffffffffffffff9091169063dd62ed3e9060440160206040518083038186803b15801561117657600080fd5b505afa15801561118a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ae9190612835565b10156111fc5760405162461bcd60e51b815260206004820152601660248201527f496e73756666696369656e7420616c6c6f77616e6365000000000000000000006044820152606401610712565b60cb546040517f70a08231000000000000000000000000000000000000000000000000000000008152336004820152829173ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561126557600080fd5b505afa158015611279573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129d9190612835565b10156112eb5760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610712565b50505b80600501546001141561132a57600481015460018201546113259173ffffffffffffffffffffffffffffffffffffffff1690612287565b6113fa565b8060050154600214156113fa576001810154156113fa5760cb5460048281015460018401546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9283169381019390935260248301529091169063a9059cbb90604401602060405180830381600087803b1580156113c057600080fd5b505af11580156113d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f89190612797565b505b82611413573460018083019190915560058201556114d3565b600181018390556002600582015560cb546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810185905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd90606401602060405180830381600087803b15801561149957600080fd5b505af11580156114ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d19190612797565b505b6004810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905560ce54600382015460009190611516904290612956565b10905080156115325760ce5461152c90426128c6565b60038301555b8361157e578154604080513381523460208201528315158183015290517f1159164c56f277e6fc99c11731bd380e0347deb969b75523398734c252706ea39181900360600190a26115c2565b815460408051338152602081018790528315158183015290517f13c63c90924cb0346fa8096f70f06178975907b230e5cf24906c680caf1e67369181900360600190a25b801561160357815460038301546040519081527f6e912a3a9105bdd2af817ba5adc14e6c127c1035b5b648faa29ca0d58ab8ff4e9060200160405180910390a25b505060016065555050565b60975473ffffffffffffffffffffffffffffffffffffffff1633146116755760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b60cf8190556040518181527f6ab2e127d7fdf53b8f304e59d3aab5bfe97979f52a85479691a6fab27a28a6b290602001610807565b60975473ffffffffffffffffffffffffffffffffffffffff1633146117115760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b60d8805460ff19811660ff90911615179055565b60975473ffffffffffffffffffffffffffffffffffffffff16331461178c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b60d8805461ff001981166101009182900460ff1615909102179055565b600260655414156117fc5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610712565b600260655560335460ff16156118545760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610712565b61185c611e44565b610d87611a21565b60975473ffffffffffffffffffffffffffffffffffffffff1633146118cb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610712565b73ffffffffffffffffffffffffffffffffffffffff81166119545760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610712565b61195d81611b02565b50565b60d95460009061093e83670de0b6b3a7640000612919565b60335460ff166119ca5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610712565b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60d1544290600090611a3390836128c6565b6040805160e08101825260cc54808252600060208301819052928201869052606082018490526080820183905260a0820183905260c090910182905260d281905560d382905560d485905560d583905560d680547fffffffffffffffffffffff00000000000000000000000000000000000000000016905560d791909155909150611abf9060016128c6565b60cc5560d25460408051848152602081018490527fd6eddd1118d71820909c1197aa966dbc15ed6f508554252169cc3d5ccac756ca910160405180910390a25050565b6097805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60335460ff1615611bcc5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610712565b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586119f73390565b600054610100900460ff1680611c1a575060005460ff16155b611c8c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610712565b600054610100900460ff16158015611cae576000805461ffff19166101011790555b611cb66123cb565b611cbe61248b565b801561195d576000805461ff001916905550565b600054610100900460ff1680611ceb575060005460ff16155b611d5d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610712565b600054610100900460ff16158015611d7f576000805461ffff19166101011790555b611cbe612556565b600054610100900460ff1680611da0575060005460ff16155b611e125760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610712565b600054610100900460ff16158015611e34576000805461ffff19166101011790555b611e3c6123cb565b611cbe61261c565b60d45460d290611e965760405162461bcd60e51b815260206004820152601460248201527f41756374696f6e206861736e277420626567756e0000000000000000000000006044820152606401610712565b600481015474010000000000000000000000000000000000000000900460ff1615611f035760405162461bcd60e51b815260206004820181905260248201527f41756374696f6e2068617320616c7265616479206265656e20736574746c65646044820152606401610712565b8060030154421015611f575760405162461bcd60e51b815260206004820152601860248201527f41756374696f6e206861736e277420636f6d706c6574656400000000000000006044820152606401610712565b60d680547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055600481015473ffffffffffffffffffffffffffffffffffffffff16156120f85760c954604080517f1249c58b000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691631249c58b91600480830192602092919082900301818787803b15801561202257600080fd5b505af1158015612036573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061205a9190612835565b60c9546004848101546040517f23b872dd000000000000000000000000000000000000000000000000000000008152309281019290925273ffffffffffffffffffffffffffffffffffffffff9081166024830152604482018490529293509116906323b872dd90606401600060405180830381600087803b1580156120de57600080fd5b505af11580156120f2573d6000803e3d6000fd5b50505050505b600181015415612227578060050154600114156121405761213b61213160975473ffffffffffffffffffffffffffffffffffffffff1690565b8260010154612287565b612227565b60cb5473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61217d60975473ffffffffffffffffffffffffffffffffffffffff1690565b60018401546040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401602060405180830381600087803b1580156121ed57600080fd5b505af1158015612201573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122259190612797565b505b8054600482015460018301546040805173ffffffffffffffffffffffffffffffffffffffff909316835260208301919091527fc9f72b276a388619c6d185d146697036241880c36654b1a3ffdad07c24038d99910160405180910390a250565b61229182826126d2565b6123c75760cd60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156122ff57600080fd5b505af1158015612313573d6000803e3d6000fd5b505060cd546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015260248201879052909116935063a9059cbb92506044019050602060405180830381600087803b15801561238d57600080fd5b505af11580156123a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123c59190612797565b505b5050565b600054610100900460ff16806123e4575060005460ff16155b6124565760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610712565b600054610100900460ff16158015611cbe576000805461ffff1916610101179055801561195d576000805461ff001916905550565b600054610100900460ff16806124a4575060005460ff16155b6125165760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610712565b600054610100900460ff16158015612538576000805461ffff19166101011790555b6033805460ff19169055801561195d576000805461ff001916905550565b600054610100900460ff168061256f575060005460ff16155b6125e15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610712565b600054610100900460ff16158015612603576000805461ffff19166101011790555b6001606555801561195d576000805461ff001916905550565b600054610100900460ff1680612635575060005460ff16155b6126a75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610712565b600054610100900460ff161580156126c9576000805461ffff19166101011790555b611cbe33611b02565b60408051600080825260208201909252819073ffffffffffffffffffffffffffffffffffffffff85169061753090859060405161270f919061288b565b600060405180830381858888f193505050503d806000811461274d576040519150601f19603f3d011682016040523d82523d6000602084013e612752565b606091505b509095945050505050565b803560ff8116811461276e57600080fd5b919050565b60006020828403121561278557600080fd5b81356127908161299c565b9392505050565b6000602082840312156127a957600080fd5b8151801515811461279057600080fd5b60008060008060008060c087890312156127d257600080fd5b86356127dd8161299c565b955060208701356127ed8161299c565b945060408701359350606087013592506128096080880161275d565b915060a087013590509295509295509295565b60006020828403121561282e57600080fd5b5035919050565b60006020828403121561284757600080fd5b5051919050565b6000806040838503121561286157600080fd5b50508035926020909101359150565b60006020828403121561288257600080fd5b6127908261275d565b6000825160005b818110156128ac5760208186018101518583015201612892565b818111156128bb576000828501525b509190910192915050565b600082198211156128d9576128d961296d565b500190565b600082612914577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156129515761295161296d565b500290565b6000828210156129685761296861296d565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461195d57600080fdfea2646970667358221220233739000e5e5f031bfbf8fe26cfcf238766b588877946b0ec9f65b465e50fce64736f6c63430008060033";
