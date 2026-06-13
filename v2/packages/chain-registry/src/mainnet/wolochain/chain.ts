import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'wolochain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://aoe2war.com',
  prettyName: 'WoloChain',
  chainType: 'cosmos',
  chainId: 'wolo-1',
  bech32Prefix: 'wolo',
  daemonName: 'wolochaind-mainnet',
  nodeHome: '$HOME/.wolochaind-mainnet',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uwolo',
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uwolo'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Emaren/wolochain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "darwin/amd64": 'https://github.com/Emaren/wolochain/releases/download/v1.0.0/v1.0.0_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/Emaren/wolochain/releases/download/v1.0.0/v1.0.0_darwin_arm64.tar.gz',
      "linux/amd64": 'https://github.com/Emaren/wolochain/releases/download/v1.0.0/v1.0.0_linux_amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://github.com/Emaren/wolochain/releases/download/v1.0.0/genesis.wolo-1.json'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.3'
    },
    ibc: {
      type: 'go',
      version: 'v10.2.0',
      icsEnabled: ['ics20-1']
    },
    tag: 'v1.0.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wolochain/images/wolo.png'
  },
  description: 'WoloChain is the Cosmos SDK chain powering WOLO, the fixed-supply token used by AoE2WAR for Age of Empires II betting, staking, rewards, and settlement.',
  apis: {
    rpc: [{
        address: 'https://aoe2war.com/rpc-mainnet',
        provider: 'AoE2WAR'
      }],
    rest: [{
        address: 'https://aoe2war.com/rest-mainnet',
        provider: 'AoE2WAR'
      }]
  },
  explorers: [{
      kind: 'Valopers',
      url: 'https://wolochain.valopers.com/',
      txPage: 'https://wolochain.valopers.com/transactions/${txHash}',
      accountPage: 'https://wolochain.valopers.com/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wolochain/images/wolo.png',
      theme: {
        circle: true
      }
    }],
  keywords: [
    'gaming',
    'betting',
    'staking'
  ]
};
export default info;