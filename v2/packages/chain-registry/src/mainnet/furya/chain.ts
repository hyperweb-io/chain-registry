import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'furya',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://furya.xyz/',
  prettyName: 'furya',
  chainType: 'cosmos',
  chainId: 'furya-1',
  daemonName: 'furyad',
  nodeHome: '$HOME/.furyad',
  bech32Prefix: 'furya',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ufury',
        lowGasPrice: 0.1,
        averageGasPrice: 0.25,
        highGasPrice: 0.5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ufury'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/furysport/furya-chain',
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v2.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/furysport/furya-chain/blob/main/network/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.8'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    cosmwasm: {
      version: 'v0.41.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg'
  },
  apis: {
    rpc: [{
        address: 'https://furya-rpc.synergynodes.com',
        provider: 'synergynodes'
      }],
    rest: [{
        address: 'https://furya.api.nodeshub.online',
        provider: 'synergynodes'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Furya Explorer',
      url: 'https://explorer.furya.network/furya-1/',
      txPage: 'https://explorer.furya.network/furya-1/tx/${txHash}',
      accountPage: 'https://explorer.furya.network/furya-1/account/${accountAddress}'
    }, {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/furya',
      txPage: 'https://staking-explorer.com/transaction.php?chain=furya&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=furya&addr=${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg'
    }]
};
export default info;