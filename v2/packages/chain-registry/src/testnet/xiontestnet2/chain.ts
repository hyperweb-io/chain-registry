import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xiontestnet2',
  chainType: 'cosmos',
  chainId: 'xion-testnet-2',
  prettyName: 'Xion Testnet 2',
  website: 'https://xion.burnt.com',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'xion',
  bech32Config: {
    bech32PrefixAccAddr: 'xion',
    bech32PrefixAccPub: 'xionpub',
    bech32PrefixValAddr: 'xionvaloper',
    bech32PrefixValPub: 'xionvaloperpub',
    bech32PrefixConsAddr: 'xionvalcons',
    bech32PrefixConsPub: 'xionvalconspub'
  },
  daemonName: 'xiond',
  nodeHome: '$HOME/.xiond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxion',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.001,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/burnt-labs/xion',
    tag: 'v17.0.0',
    recommendedVersion: 'v17.0.0',
    language: {
      type: 'go',
      version: 'v1.23'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/burnt-labs/xion/releases/download/v17.0.0/xiond_17.0.0_darwin_amd64.zip?checksum=sha256:f8fe47d8a9f831c91c233e6fc757d2c236364d805905df207aa197a53628e06b',
      "darwin/arm64": 'https://github.com/burnt-labs/xion/releases/download/v17.0.0/xiond_17.0.0_darwin_arm64.zip?checksum=sha256:fa15044d4faecf0370cd0efad5fd1095ee7b4bdeb2416cf7b9c18b9cd7422638',
      "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v17.0.0/xiond_17.0.0_linux_amd64.zip?checksum=sha256:6ec3066e973334e019d66eee77f0557044eb9e7ab723626b66ec88ac11c90d29',
      "linux/arm64": 'https://github.com/burnt-labs/xion/releases/download/v17.0.0/xiond_17.0.0_linux_arm64.zip?checksum=sha256:4e85aa63362f983c86c504f1902d9b30c266449eb6c4263394d0b9616a65f086'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.12'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    cosmwasm: {
      version: 'v0.54.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.6.1'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/burnt-labs/xion-testnet-2/config/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.xion-testnet-2.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      }],
    rest: [{
        address: 'https://api.xion-testnet-2.burnt.com',
        provider: '🔥BurntLabs🔥'
      }],
    grpc: [{
        address: 'grpc.xion-testnet-2.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      }]
  },
  explorers: [{
      url: 'https://explorer.burnt.com/xion-testnet-2',
      txPage: 'https://explorer.burnt.com/xion-testnet-2/tx/${txHash}',
      accountPage: 'https://explorer.burnt.com/xion-testnet-2/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
  keywords: [
    'xion',
    'burnt',
    'testnet'
  ]
};
export default info;