import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lumera',
  chainType: 'cosmos',
  chainId: 'lumera-mainnet-1',
  prettyName: 'Lumera',
  website: 'https://lumera.protocol',
  networkType: 'mainnet',
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
    tag: 'v1.6.1',
    recommendedVersion: 'v1.6.1',
    language: {
      type: 'go',
      version: 'v1.24'
    },
    binaries: {
      "linux/amd64": 'https://github.com/LumeraProtocol/lumera/releases/download/v1.6.1/lumera_v1.6.1_linux_amd64.tar.gz?checksum=sha256:3d33c600ad35b94c72acf4ce81247f6171b79169f5b84a6e415df1ec30d690dc'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.12'
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
      genesisUrl: 'https://raw.githubusercontent.com/LumeraProtocol/lumera-networks/refs/heads/master/mainnet/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.lumera.io:443',
        provider: 'LumeraProtocol'
      }],
    rest: [{
        address: 'https://lcd.lumera.io:443',
        provider: 'LumeraProtocol'
      }],
    grpc: [{
        address: 'https://grpc.lumera.io:443',
        provider: 'LumeraProtocol'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://portal.lumera.io/lumera-mainnet-1/',
      txPage: 'https://portal.lumera.io/lumera-mainnet-1/tx/${txHash}',
      accountPage: 'https://portal.lumera.io/lumera-mainnet-1/account/${accountAddress}'
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