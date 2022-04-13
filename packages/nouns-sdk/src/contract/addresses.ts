import { ChainId, ContractAddresses } from './types';

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.Mainnet]: {
    nounsToken: '0xb60E0F5ac61723c80a00e88DcD93746c921E30a9',
    nounsSeeder: '0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515',
    nounsDescriptor: '0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63',
    nftDescriptor: '0x0BBAd8c947210ab6284699605ce2a61780958264',
    nounsAuctionHouse: '0x91e088209e18c07c63a6d2359810aff0a31a18df',
    nounsAuctionHouseProxy: '0xE3fCaD485CE184C1b48930915396a9f0b98C86F3',
    nounsAuctionHouseProxyAdmin: '0xbe20d3f61f6995996a5b8dd58b036ada7cf30945',
    nounsDaoExecutor: '0x0BC3807Ec262cB779b38D65b38158acC3bfedE10',
    nounsDAOProxy: '0x6f3E6272A167e8AcCb32072d08E0957F9c79223d',
    nounsDAOLogicV1: '0xa43aFE317985726E4e194eb061Af77fbCb43F944',
  },
  [ChainId.Rinkeby]: {
    nounsToken: '0x632f34c3aee991b10D4b421Bc05413a03d7a37eB',
    nounsSeeder: '0xA98A1b1Cc4f5746A753167BAf8e0C26AcBe42F2E',
    nounsDescriptor: '0x53cB482c73655D2287AE3282AD1395F82e6a402F',
    nftDescriptor: '0x1F28f148ef5f9BD182cCEfeAD4240A505C54dc9B',
    nounsAuctionHouse: '0xfAB74e535409A3ad1F7C2858dd2E5Da1eAAc6cE7',
    nounsAuctionHouseProxy: '0x7cb0384b923280269b3BD85f0a7fEaB776588382',
    nounsAuctionHouseProxyAdmin: '0x04d0e5a8ADB5076C098f49F39B01A774c313597d',
    nounsDaoExecutor: '0x6F3940820288855418B7ef8E33a2eC23d9DeD59B',
    nounsDAOProxy: '0xd1C753D9A23eb5c57e0d023e993B9bd4F5086b04',
    nounsDAOLogicV1: '0xdF05F2D3276F3F3fA00296702e4cf7190B78F6F9',
  },
  [ChainId.Local]: {
    nounsToken: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    nounsSeeder: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    nounsDescriptor: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    nftDescriptor: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    nounsAuctionHouse: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    nounsAuctionHouseProxy: '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853',
    nounsAuctionHouseProxyAdmin: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    nounsDaoExecutor: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
    nounsDAOProxy: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
    nounsDAOLogicV1: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
  },
  [ChainId.Mumbai]: {
    nounsToken: '0x781feAcf4Ce415b950f4fe538301EDC48150c4F9',
    nounsSeeder: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    nounsDescriptor: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    nftDescriptor: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    nounsAuctionHouse: '0xf7264d3eeb8af879f52ebe85ec10922144210c4d',
    nounsAuctionHouseProxy: '0x6AAA153b30E632fa02c496b0524Be81e0422b10b',
    nounsAuctionHouseProxyAdmin: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    nounsDaoExecutor: '0x3b5fD0bbA92268Eb523a0DCA7D756e7ed493C597',
    nounsDAOProxy: '0x921df4d0812be9add7f084bea0148084b1f4efac',
    nounsDAOLogicV1: '0x3F4F7BD9A8Ddc700e1622A1B40D7ADEabf62f423',
  },
  [ChainId.Polygon]: {
    nounsToken: '0x8A34e2045a315Cc1f45979397e47bF21F9e87e8E',
    nounsSeeder: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    nounsDescriptor: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    nftDescriptor: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    nounsAuctionHouse: '0x7CA07964EDb3Fa394efC3DBe379ec658580278A1',
    nounsAuctionHouseProxy: '0x53d77078650d2d34f3478C3b7D6E6736D4c946E7',
    nounsAuctionHouseProxyAdmin: '0xbe20d3f61f6995996a5b8dd58b036ada7cf30945',
    nounsDaoExecutor: '0x869298e4FEbC446F5eCbBAceE02C4DD63F661aB7',
    nounsDAOProxy: '0x4618033a675711827306b7baCe4E95963e94F240',
    nounsDAOLogicV1: '0x5D72632b2082B225B1f27d5Cefc1E39c5C2aB39F',
  },
};

/**
 * Get addresses of contracts that have been deployed to the
 * Ethereum mainnet or a supported testnet. Throws if there are
 * no known contracts deployed on the corresponding chain.
 * @param chainId The desired chainId
 */
export const getContractAddressesForChainOrThrow = (chainId: number): ContractAddresses => {
  if (!chainIdToAddresses[chainId]) {
    throw new Error(
      `Unknown chain id (${chainId}). No known contracts have been deployed on this chain.`,
    );
  }
  return chainIdToAddresses[chainId];
};
