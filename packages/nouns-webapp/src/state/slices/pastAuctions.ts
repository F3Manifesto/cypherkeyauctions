import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuctionState } from './auction';
import { BigNumber } from '@ethersproject/bignumber';

interface PastAuctionsState {
  pastAuctions: AuctionState[];
}

const initialState: PastAuctionsState = {
  pastAuctions: [],
};

const reduxSafePastAuctions = (data: any): AuctionState[] => {
  const auctions = data.data.auctions as any[];
  if (auctions.length < 0) return [];
  const pastAuctions: AuctionState[] = auctions.map(auction => {
    return {
      activeAuction: {
        amount: BigNumber.from(auction.amount).toJSON(),
        description: auction.anticipatedNoun.description,
        name: auction.anticipatedNoun.name,
        image: auction.anticipatedNoun.image,
        animation: auction.anticipatedNoun.animation,
        tokenUri: auction.anticipatedNoun.tokenUri,
        bidder: auction.bidder ? auction.bidder.id : '',
        startTime: BigNumber.from(auction.startTime).toJSON(),
        endTime: BigNumber.from(auction.endTime).toJSON(),
        nounId: BigNumber.from(auction.id).toJSON(),
        settled: false,
      },
      bids: auction.bids.map((bid: any) => {
        return {
          nounId: BigNumber.from(auction.id).toJSON(),
          sender: bid.bidder.id,
          value: BigNumber.from(bid.amount).toJSON(),
          extended: false,
          transactionHash: bid.id,
          isErc20: bid.isERC20,
          timestamp: BigNumber.from(bid.blockTimestamp).toJSON(),
        };
      }),
    };
  });
  return pastAuctions;
};

const pastAuctionsSlice = createSlice({
  name: 'pastAuctions',
  initialState: initialState,
  reducers: {
    addPastAuctions: (state, action: PayloadAction<any>) => {
      state.pastAuctions = reduxSafePastAuctions(action.payload);
    },
    clearPastAuctions: state => {
      state.pastAuctions = [];
    },
  },
});

export const { addPastAuctions, clearPastAuctions } = pastAuctionsSlice.actions;

export default pastAuctionsSlice.reducer;
