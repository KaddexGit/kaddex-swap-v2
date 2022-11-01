import {
  ROUTE_DAO_PROPOSAL,
  ROUTE_INDEX,
  ROUTE_LIQUIDITY_ADD_LIQUIDITY_DOUBLE_SIDED,
  ROUTE_LIQUIDITY_ADD_LIQUIDITY_SINGLE_SIDED,
  ROUTE_LIQUIDITY_REMOVE_LIQUIDITY,
  ROUTE_LIQUIDITY_REWARDS,
  ROUTE_STAKE,
  ROUTE_UNSTAKE,
} from '../router/routes';

export const PATH_CONFIGURATION = {
  SWAP: {
    name: 'SWAP',
    route: ROUTE_INDEX,
  },
  ADD_LIQUIDITY_DOUBLE_SIDE: {
    name: 'ADD_LIQUIDITY_DOUBLE_SIDE',
    route: ROUTE_LIQUIDITY_ADD_LIQUIDITY_DOUBLE_SIDED,
  },
  ADD_LIQUIDITY_SINGLE_SIDE: {
    name: 'ADD_LIQUIDITY_SINGLE_SIDE',
    route: ROUTE_LIQUIDITY_ADD_LIQUIDITY_SINGLE_SIDED,
  },
  REMOVE_LIQUIDITY: {
    name: 'REMOVE_LIQUIDITY',
    route: ROUTE_LIQUIDITY_REMOVE_LIQUIDITY,
  },
  CLAIM_LIQUIDITY_REWARDS: {
    name: 'CLAIM_LIQUIDITY_REWARDS',
    route: ROUTE_LIQUIDITY_REWARDS,
  },
  DAO_VOTE: {
    name: 'DAO_VOTE',
    route: ROUTE_DAO_PROPOSAL,
  },
  STAKE: {
    name: 'STAKE',
    route: ROUTE_STAKE,
  },
  UNSTAKE: {
    name: 'UNSTAKE',
    route: ROUTE_UNSTAKE,
  },
};

const GAS_STATION_PRICE = 0.0000001;
const ECONOMY_GAS_PRICE = 0.00000001;
const NORMAL_GAS_PRICE = 0.000001;
const FAST_GAS_PRICE = 0.0001;

const SWAP_GAS = 10000;
const ADD_LIQUIDITY_DOUBLE_SIDE_GAS = 20000;
const ADD_LIQUIDITY_SINGLE_SIDE_GAS = 20000;
const REMOVE_LIQUIDITY_GAS = 40000;
const CLAIM_LIQUIDITY_REWARDS_GAS = 40000;
const DAO_VOTE_GAS = 2000;
const STAKE_GAS = 10000;
const UNSTAKE_GAS = 17000;

export const GAS_OPTIONS = {
  ECONOMY: {
    SWAP: {
      gasLimit: SWAP_GAS,
      gasPrice: ECONOMY_GAS_PRICE,
    },
    ADD_LIQUIDITY_DOUBLE_SIDE: {
      gasLimit: ADD_LIQUIDITY_DOUBLE_SIDE_GAS,
      gasPrice: ECONOMY_GAS_PRICE,
    },
    ADD_LIQUIDITY_SINGLE_SIDE: {
      gasLimit: ADD_LIQUIDITY_SINGLE_SIDE_GAS,
      gasPrice: ECONOMY_GAS_PRICE,
    },
    REMOVE_LIQUIDITY: {
      gasLimit: REMOVE_LIQUIDITY_GAS,
      gasPrice: ECONOMY_GAS_PRICE,
    },
    CLAIM_LIQUIDITY_REWARDS: {
      gasLimit: CLAIM_LIQUIDITY_REWARDS_GAS,
      gasPrice: ECONOMY_GAS_PRICE,
    },
    DAO_VOTE: {
      gasLimit: DAO_VOTE_GAS,
      gasPrice: ECONOMY_GAS_PRICE,
    },
    STAKE: {
      gasLimit: STAKE_GAS,
      gasPrice: ECONOMY_GAS_PRICE,
    },
    UNSTAKE: {
      gasLimit: UNSTAKE_GAS,
      gasPrice: ECONOMY_GAS_PRICE,
    },
  },
  NORMAL: {
    SWAP: {
      gasLimit: SWAP_GAS,
      gasPrice: NORMAL_GAS_PRICE,
    },
    ADD_LIQUIDITY_DOUBLE_SIDE: {
      gasLimit: ADD_LIQUIDITY_DOUBLE_SIDE_GAS,
      gasPrice: NORMAL_GAS_PRICE,
    },
    ADD_LIQUIDITY_SINGLE_SIDE: {
      gasLimit: ADD_LIQUIDITY_SINGLE_SIDE_GAS,
      gasPrice: NORMAL_GAS_PRICE,
    },
    REMOVE_LIQUIDITY: {
      gasLimit: REMOVE_LIQUIDITY_GAS,
      gasPrice: NORMAL_GAS_PRICE,
    },
    CLAIM_LIQUIDITY_REWARDS: {
      gasLimit: CLAIM_LIQUIDITY_REWARDS_GAS,
      gasPrice: NORMAL_GAS_PRICE,
    },
    DAO_VOTE: {
      gasLimit: DAO_VOTE_GAS,
      gasPrice: NORMAL_GAS_PRICE,
    },
    STAKE: {
      gasLimit: STAKE_GAS,
      gasPrice: NORMAL_GAS_PRICE,
    },
    UNSTAKE: {
      gasLimit: UNSTAKE_GAS,
      gasPrice: NORMAL_GAS_PRICE,
    },
  },
  FAST: {
    SWAP: {
      gasLimit: SWAP_GAS,
      gasPrice: FAST_GAS_PRICE,
    },
    ADD_LIQUIDITY_DOUBLE_SIDE: {
      gasLimit: ADD_LIQUIDITY_DOUBLE_SIDE_GAS,
      gasPrice: FAST_GAS_PRICE,
    },
    ADD_LIQUIDITY_SINGLE_SIDE: {
      gasLimit: ADD_LIQUIDITY_SINGLE_SIDE_GAS,
      gasPrice: FAST_GAS_PRICE,
    },
    REMOVE_LIQUIDITY: {
      gasLimit: REMOVE_LIQUIDITY_GAS,
      gasPrice: FAST_GAS_PRICE,
    },
    CLAIM_LIQUIDITY_REWARDS: {
      gasLimit: CLAIM_LIQUIDITY_REWARDS_GAS,
      gasPrice: FAST_GAS_PRICE,
    },
    DAO_VOTE: {
      gasLimit: DAO_VOTE_GAS,
      gasPrice: FAST_GAS_PRICE,
    },
    STAKE: {
      gasLimit: STAKE_GAS,
      gasPrice: FAST_GAS_PRICE,
    },
    UNSTAKE: {
      gasLimit: UNSTAKE_GAS,
      gasPrice: FAST_GAS_PRICE,
    },
  },
  DEFAULT: {
    SWAP: {
      gasLimit: SWAP_GAS,
      gasPrice: GAS_STATION_PRICE,
    },
    ADD_LIQUIDITY_DOUBLE_SIDE: {
      gasLimit: ADD_LIQUIDITY_DOUBLE_SIDE_GAS,
      gasPrice: GAS_STATION_PRICE,
    },
    ADD_LIQUIDITY_SINGLE_SIDE: {
      gasLimit: ADD_LIQUIDITY_SINGLE_SIDE_GAS,
      gasPrice: GAS_STATION_PRICE,
    },
    REMOVE_LIQUIDITY: {
      gasLimit: REMOVE_LIQUIDITY_GAS,
      gasPrice: GAS_STATION_PRICE,
    },
    CLAIM_LIQUIDITY_REWARDS: {
      gasLimit: CLAIM_LIQUIDITY_REWARDS_GAS,
      gasPrice: GAS_STATION_PRICE,
    },
    DAO_VOTE: {
      gasLimit: DAO_VOTE_GAS,
      gasPrice: GAS_STATION_PRICE,
    },
    STAKE: {
      gasLimit: STAKE_GAS,
      gasPrice: GAS_STATION_PRICE,
    },
    UNSTAKE: {
      gasLimit: UNSTAKE_GAS,
      gasPrice: GAS_STATION_PRICE,
    },
  },
};
