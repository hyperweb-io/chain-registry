import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kudora',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://kudora.org/',
  prettyName: 'Kudora',
  chainType: 'cosmos',
  chainId: 'kudora_12000-1',
  bech32Prefix: 'kudo',
  daemonName: 'kudorad',
  nodeHome: '$HOME/.kudora',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'kud',
        averageGasPrice: 5e-10
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'kud'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Kudora-Labs/kudora',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.17'
    },
    binaries: {
      "linux/amd64": 'https://github.com/Kudora-Labs/kudora/releases/download/v1.0.0/kudorad_Linux_x86_64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Kudora-Labs/kud-network-mainnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.13',
      repo: 'https://github.com/strangelove-ventures/cosmos-sdk'
    },
    ibc: {
      type: 'go',
      version: '8.7.0',
      repo: 'https://github.com/cosmos/ibc-go',
      icsEnabled: ['ics20-1']
    },
    language: {
      type: 'go',
      version: '1.23.7'
    },
    tag: 'v1.0.0'
  },
  apis: {
    evmHttpJsonrpc: [{
        address: 'https://evm.kudora.org/',
        provider: 'Kudora Org'
      }],
    grpc: [{
        address: 'grpc.kudora.org:443',
        provider: 'Kudora Org'
      }],
    rest: [{
        address: 'https://api.kudora.org/',
        provider: 'Kudora Org'
      }],
    rpc: [{
        address: 'https://rpc.kudora.org/',
        provider: 'Kudora Org'
      }]
  }
};
export default info;