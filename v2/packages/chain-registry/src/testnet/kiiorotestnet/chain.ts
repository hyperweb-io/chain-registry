import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kiiorotestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Kii Testnet Oro',
  chainType: 'cosmos',
  chainId: 'oro_1336-1',
  bech32Prefix: 'kii',
  daemonName: 'kiichaind',
  nodeHome: '$HOME/.kiichain',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'akii',
        lowGasPrice: 60000000000,
        averageGasPrice: 80000000000,
        highGasPrice: 120000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'akii'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/KiiChain/kiichain',
    recommendedVersion: 'v5.0.0',
    compatibleVersions: ['v5.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53'
    },
    cosmwasm: {
      enabled: true
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/KiiChain/testnets/refs/heads/main/testnet_oro/genesis.json'
    },
    tag: 'v5.0.0'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.uno.sentry.testnet.v3.kiivalidator.com/',
        provider: 'Kiichain'
      }, {
        address: 'https://rpc.dos.sentry.testnet.v3.kiivalidator.com/',
        provider: 'Kiichain'
      }],
    rest: [{
        address: 'https://lcd.uno.sentry.testnet.v3.kiivalidator.com/',
        provider: 'Kiichain'
      }, {
        address: 'https://lcd.dos.sentry.testnet.v3.kiivalidator.com/',
        provider: 'Kiichain'
      }],
    grpc: [{
        address: 'grpc.uno.sentry.testnet.v3.kiivalidator.com:443',
        provider: 'Kiichain'
      }, {
        address: 'grpc.dos.sentry.testnet.v3.kiivalidator.com:443',
        provider: 'Kiichain'
      }],
    evmHttpJsonrpc: [{
        address: 'https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com/',
        provider: 'Kiichain'
      }, {
        address: 'https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/',
        provider: 'Kiichain'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kiiorotestnet/images/kii_oro.png'
  },
  explorers: [{
      kind: 'custom',
      url: 'https://explorer.kiichain.io/',
      accountPage: 'https://explorer.kiichain.io/account/${accountAddress}'
    }],
  keywords: [
    'testnet',
    'RWA',
    'stablecoins',
    'kii'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kiiorotestnet/images/kii_oro.png'
    }]
};
export default info;