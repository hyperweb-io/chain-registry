import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'lumeratestnet',
  chainType: 'cosmos',
  chainId: 'lumera-testnet-2',
  prettyName: 'Lumera',
  website: 'https://lumera.protocol',
  networkType: 'testnet',
  status: 'live',
  bech32Prefix: 'lumera',
  bech32Config: {
    bech32PrefixAccAddr: 'lumera',
    bech32PrefixAccPub: 'lumerapub',
    bech32PrefixValAddr: 'lumeravaloper',
    bech32PrefixValPub: 'lumeravaloperpub',
    bech32PrefixConsAddr: 'lumeravalcons',
    bech32PrefixConsPub: 'lumeravalconspub'
  },
  daemonName: 'lumerad',
  nodeHome: '$HOME/.lumera',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulume',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulume'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/LumeraProtocol/lumera',
    tag: 'v1.7.0',
    recommendedVersion: 'v1.7.0',
    language: {
      type: 'go',
      version: 'v1.24'
    },
    binaries: {
      "linux/amd64": 'https://github.com/LumeraProtocol/lumera/releases/download/v1.7.0/lumera_v1.7.0_linux_amd64.tar.gz?checksum=sha256:1a5a612e5f06a5d4c4a6a2b2b8799336093a9951fcc6e81ef0a56dcc0f913e50'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    genesis: {
      genesisUrl: 'https://github.com/LumeraProtocol/lumera-networks/tree/master/testnet'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.lumera.io:443',
        provider: 'LumeraProtocol'
      }],
    rest: [{
        address: 'https://lcd.testnet.lumera.io:443',
        provider: 'LumeraProtocol'
      }],
    grpc: [{
        address: 'https://grpc.testnet.lumera.io:443',
        provider: 'LumeraProtocol'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://portal.testnet.lumera.io/lumera-testnet-1/',
      txPage: 'https://portal.testnet.lumera.io/lumera-testnet-1/tx/${txHash}',
      accountPage: 'https://portal.testnet.lumera.io/lumera-testnet-1/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
  },
  keywords: [
    'lumera',
    'lume',
    'mainnet',
    'pastel'
  ]
};
export default info;