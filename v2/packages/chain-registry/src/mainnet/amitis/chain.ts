import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'amitis',
  chainType: 'cosmos',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Amitis Network',
  chainId: 'amitis-network',
  bech32Prefix: 'amitis',
  daemonName: 'amisd',
  nodeHome: '$HOME/.amitis',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uamts',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uamts'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/amitis-network/amitis-network',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.11'
    },
    genesis: {
      genesisUrl: 'https://rpc.amitis.network/genesis'
    }
  },
  description: 'Amitis Network is a cooperative Layer 1 blockchain built on the Cosmos SDK. 80% of all transaction fees are returned directly to users at the protocol level. Amitis features 21 fixed validator slots (petals), a native DEX, CosmWasm smart contracts, and IBC connectivity — building blockchain infrastructure where economics serve users, not insiders.',
  apis: {
    rpc: [{
        address: 'https://rpc.amitis.network',
        provider: 'Amitis Network'
      }],
    rest: [{
        address: 'https://rest.amitis.network',
        provider: 'Amitis Network'
      }]
  },
  explorers: [{
      kind: 'Amitis Explorer',
      url: 'https://app.amitis.network/explorer',
      txPage: 'https://app.amitis.network/explorer/tx/${txHash}',
      accountPage: 'https://app.amitis.network/explorer/address/${accountAddress}'
    }],
  keywords: [
    'cosmos',
    'fee-rebate',
    'cooperative',
    'layer1',
    'cosmwasm'
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.png'
    }]
};
export default info;