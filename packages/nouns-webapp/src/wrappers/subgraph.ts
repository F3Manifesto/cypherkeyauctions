import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { BigNumberish } from '@ethersproject/bignumber';
import BigNumber from 'bignumber.js';

export interface IBid {
  id: string;
  bidder: {
    id: string;
  };
  amount: BigNumber;
  blockNumber: number;
  blockTimestamp: number;
  txIndex?: number;
  noun: {
    id: number;
    startTime?: BigNumberish;
    endTime?: BigNumberish;
    settled?: boolean;
  };
}

export const auctionQuery = (auctionId: number) => gql`
{
	auction(id: ${auctionId}) {
	  id
	  amount
	  settled
	  bidder {
	  	id
	  }
	  startTime
	  endTime
	  noun {
			id
			name
			description
			image
			animation
			attributes {
				trait
				value
			}
			owner {
				id
			}
	  }
		anticipatedNoun {
			id
			name
			description
			image
			tokenUri
			animation
			attributes {
				trait
				value
			}
		}
	  bids {
			id
			blockNumber
			txIndex
			amount
		}
  }
}
`;

export const bidsByAuctionQuery = (auctionId: string) => gql`
 {
	bids(where:{auction: "${auctionId}"}) {
	  id
	  amount
	  blockNumber
	  blockTimestamp
	  txIndex
	  bidder {
	  	id
	  }
	  noun {
		id
	  }
	}
  }
 `;

export const nounQuery = (id: string) => gql`
 {
	noun(id:"${id}") {
	  id
	  seed {
	  background
		body
		accessory
		head
		glasses
	}
	  owner {
		id
	  }
	}
  }
 `;

export const nounsIndex = () => gql`
  {
    nouns {
      id
      owner {
        id
      }
    }
  }
`;

export const latestAuctionsQuery = () => gql`
  {
    auctions(orderBy: startTime, orderDirection: desc, first: 1000, where: { id_not: "0" }) {
      id
      amount
      settled
      bidder {
        id
      }
      startTime
      endTime
      noun {
        id
        name
        description
        image
        animation
        tokenUri
        owner {
          id
        }
      }
      anticipatedNoun {
        id
        name
        description
        image
        animation
        tokenUri
        attributes {
          trait
          value
        }
      }
      bids {
        id
        amount
        blockNumber
        isERC20
        blockTimestamp
        txIndex
        bidder {
          id
        }
      }
    }
  }
`;

export const latestBidsQuery = (first: number = 10) => gql`
{
	bids(
	  first: ${first},
	  orderBy:blockTimestamp,
	  orderDirection: desc
	) {
	  id
	  bidder {
		id
	  }
	  amount
	  blockTimestamp
	  txIndex
	  blockNumber
	  auction {
		id
		startTime
		endTime
		settled
	  }
	}
  }  
`;

export const nounVotingHistoryQuery = (nounId: number) => gql`
{
	noun(id: ${nounId}) {
		id
		votes {
		proposal {
			id
		}
		support
		supportDetailed
		}
	}
}
`;

export const createTimestampAllProposals = () => gql`
  {
    proposals(orderBy: createdTimestamp, orderDirection: asc, first: 1000) {
      id
      createdTimestamp
    }
  }
`;

export const nounVotesForProposalQuery = (proposalId: string) => gql`
{
	proposals(where: {id: ${proposalId}}) {
    votes {
      supportDetailed
      nouns {
        id
      }
    }
  }	
}
`;

export const clientFactory = (uri: string) =>
  new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
