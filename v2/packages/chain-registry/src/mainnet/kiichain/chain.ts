import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kiichain',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'KiiChain',
  chainType: 'cosmos',
  chainId: 'kiichain_1783-1',
  bech32Prefix: 'kii',
  daemonName: 'kiichaind',
  nodeHome: '$HOME/.kiichain',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'akii',
        lowGasPrice: 600000000,
        averageGasPrice: 750000000,
        highGasPrice: 1000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'akii'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/KiiChain/kiichain',
    recommendedVersion: 'v6.1.0',
    compatibleVersions: ['v6.1.0'],
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
      genesisUrl: 'https://raw.githubusercontent.com/KiiChain/mainnets/refs/heads/main/kiichain/genesis.json'
    },
    tag: 'v6.1.0'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.kiivalidator.com',
        provider: 'Kiichain'
      }],
    rest: [{
        address: 'https://lcd.kiivalidator.com',
        provider: 'Kiichain'
      }],
    grpc: [{
        address: 'grpc.kiivalidator.com',
        provider: 'Kiichain'
      }],
    evmHttpJsonrpc: [{
        address: 'https://json-rpc.kiivalidator.com',
        provider: 'Kiichain'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kiichain/images/kii.png'
  },
  explorers: [{
      kind: 'custom',
      url: 'https://explorer.kiichain.io',
      accountPage: 'https://explorer.kiichain.io/address/${accountAddress}'
    }],
  keywords: [
    'RWA',
    'stablecoins',
    'kii'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kiichain/images/kii.png'
    }]
};
export default info;