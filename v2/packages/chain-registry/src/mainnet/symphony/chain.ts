import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'symphony',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Symphony',
  chainType: 'cosmos',
  chainId: 'symphony-1',
  bech32Prefix: 'symphony',
  daemonName: 'symphonyd',
  nodeHome: '$HOME/.symphonyd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'note',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00025,
        averageGasPrice: 0.0025,
        highGasPrice: 0.004
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'note'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Orchestra-Labs/symphony',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.11'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Orchestra-Labs/symphony/refs/heads/main/networks/symphony-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.9'
    },
    cosmwasm: {
      version: '0.53.0',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://symphony.rpc.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-rpc.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      }],
    rest: [{
        address: 'https://symphony.api.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-api.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      }],
    grpc: [{
        address: 'https://symphony.grpc.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/symphony_logo.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/symphony_logo.png'
    }]
};
export default info;