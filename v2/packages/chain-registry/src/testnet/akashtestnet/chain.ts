import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'akashtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://akash.network/',
  prettyName: 'Sandbox',
  chainType: 'cosmos',
  chainId: 'sandbox-2',
  bech32Prefix: 'akash',
  daemonName: 'akash',
  nodeHome: '$HOME/.akash',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uakt',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uakt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/akash-network/node',
    recommendedVersion: 'v0.38.2',
    compatibleVersions: ['v0.38.0'],
    binaries: {
      "linux/amd64": 'https://github.com/akash-network/node/releases/download/v0.38.2/akash_0.38.2_linux_amd64.zip',
      "linux/arm64": 'https://github.com/akash-network/node/releases/download/v0.38.2/akash_0.38.2_linux_arm64.zip'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/akash-network/net/master/sandbox-2/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.sandbox-2.aksh.pw:443',
        provider: 'akash'
      }],
    rest: [{
        address: 'https://api.sandbox-2.aksh.pw:443',
        provider: 'akash'
      }],
    grpc: [{
        address: 'grpc.sandbox-2.aksh.pw:9090',
        provider: 'akash'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.sandbox-2.aksh.pw/akash',
      txPage: 'https://explorer.sandbox-2.aksh.pw/akash/tx/${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'akash'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
    }]
};
export default info;