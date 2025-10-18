import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'fandomchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://fandom-chain-website.vercel.app',
  prettyName: 'fandomChain',
  chainType: 'cosmos',
  chainId: 'fandomChain',
  bech32Prefix: 'cosmos',
  daemonName: 'fandomChaind',
  nodeHome: '$HOME/.fandomChaind',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ufandomChain',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ufandomChain'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/fandomchain-network/fandomchain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/fandomchain-network/fandomchain/archive/refs/tags/1.0.0.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    genesis: {
      genesisUrl: 'https://github.com/fandomchain-network/fandomchain/blob/1.0.0/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.3'
    },
    ibc: {
      type: 'go',
      version: 'v10.2.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fandomchain/images/fandomchain.png'
  },
  description: 'FandomChain is the L1 blockchain dedicated to streamers.',
  apis: {
    rpc: [{
        address: 'https://rpc.fandomchain.com',
        provider: 'FandomChain'
      }],
    rest: [{
        address: 'https://api.fandomchain.com',
        provider: 'FandomChain'
      }],
    grpc: [{
        address: 'https://grpc.fandomchain.com',
        provider: 'FandomChain'
      }]
  },
  explorers: [{
      kind: 'Ping',
      url: 'https://explorer.fandomchain.com',
      txPage: 'https://explorer.fandomchain.com/fandomchain/transactions/${txHash}',
      accountPage: 'https://explorer.fandomchain.com/fandomchain/accounts/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fandomchain/images/fandomchain.png'
    }]
};
export default info;