import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'tac',
  status: 'live',
  website: 'https://tac.build/',
  networkType: 'mainnet',
  prettyName: 'TAC',
  chainType: 'cosmos',
  chainId: 'tacchain_239-1',
  bech32Prefix: 'tac',
  daemonName: 'tacchaind',
  nodeHome: '$HOME/.tacchaind',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'utac',
        fixedMinGasPrice: 25000000000,
        lowGasPrice: 320000000000,
        averageGasPrice: 400000000000,
        highGasPrice: 800000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utac'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/TacBuild/tacchain',
    recommendedVersion: 'v1.6.0',
    compatibleVersions: ['v1.6.0'],
    tag: 'v1.6.0',
    language: {
      type: 'go',
      version: '1.23.8'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.53.6'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.21'
    },
    ibc: {
      type: 'go',
      version: 'v10.3.1',
      icsEnabled: ['ics20-1']
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/TacBuild/tacchain/main/networks/tacchain_239-1/genesis.json'
    }
  },
  description: 'TAC is a Cosmos SDK-based EVM Layer 1 that lets Ethereum applications serve Telegram users through the TON ecosystem.',
  apis: {
    rpc: [{
        address: 'https://rpc.ankr.com/http/tac_tendermint',
        provider: 'Ankr'
      }, {
        address: 'https://rpc.tac.nodestake.org',
        provider: 'NodeStake'
      }],
    rest: [{
        address: 'https://rpc.ankr.com/http/tac_cosmos',
        provider: 'NodeStake'
      }, {
        address: 'https://api.tac.nodestake.org',
        provider: 'NodeStake'
      }],
    grpc: [{
        address: 'grpc.rpc.tac.build:443',
        provider: 'TAC'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.tac.build',
        provider: 'TAC'
      }, {
        address: 'https://rpc.ankr.com/tac',
        provider: 'Ankr'
      }]
  },
  explorers: [{
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/tac',
      txPage: 'https://explorer.nodestake.org/tac/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/tac/account/${accountAddress}'
    }, {
      kind: 'blockscout',
      url: 'https://evm.explorer.tac.build/',
      txPage: 'https://evm.explorer.tac.build/tx/${txHash}',
      accountPage: 'https://evm.explorer.tac.build/address/${accountAddress}',
      blockPage: 'https://evm.explorer.tac.build/block/${blockHeight}'
    }],
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tac/images/tac.svg'
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tac/images/tac.svg'
    }]
};
export default info;