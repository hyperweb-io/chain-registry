import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'symphonytestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Symphony Testnet',
  chainType: 'cosmos',
  chainId: 'symphony-testnet-4',
  bech32Prefix: 'symphony',
  daemonName: 'symphonyd',
  nodeHome: '$HOME/.symphonyd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'note',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'note'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Orchestra-Labs/symphony',
    recommendedVersion: 'v0.4.1',
    compatibleVersions: ['v0.4.1'],
    consensus: {
      type: 'cometbft',
      version: '0.38.11'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Orchestra-Labs/symphony/refs/heads/main/networks/symphony-testnet-4/genesis.json'
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
        address: 'https://symphony.test.rpc.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-rpc.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      }],
    rest: [{
        address: 'https://symphony.test.api.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-api.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      }],
    grpc: [{
        address: 'https://symphony.test.grpc.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/symphony_logo.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/symphonytestnet/images/symphony_logo.png'
    }]
};
export default info;