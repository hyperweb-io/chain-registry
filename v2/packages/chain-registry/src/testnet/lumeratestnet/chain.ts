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
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  extraCodecs: ['ethermint'],
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
    tag: 'v1.23.0',
    recommendedVersion: 'v1.23.0',
    language: {
      type: 'go',
      version: 'v1.27.3'
    },
    binaries: {
      "linux/amd64": 'https://github.com/LumeraProtocol/lumera/releases/download/v1.23.0/lumera_v1.23.0_linux_amd64.tar.gz?checksum=sha256:127951038e0029ffb9dda40087ad43583390083f77c430fb84123485c03044dc'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.8'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.26'
    },
    cosmwasm: {
      version: 'v0.61.15',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v10.7.0'
    },
    genesis: {
      genesisUrl: 'https://github.com/LumeraProtocol/lumera-networks/tree/master/testnet'
    },
    compatibleVersions: ['v1.23.0']
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
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm-rpc.testnet.lumera.io:443',
        provider: 'LumeraProtocol'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://portal.testnet.lumera.io/lumera-testnet-2/',
      txPage: 'https://portal.testnet.lumera.io/lumera-testnet-2/tx/${txHash}',
      accountPage: 'https://portal.testnet.lumera.io/lumera-testnet-2/account/${accountAddress}'
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
    'testnet',
    'pastel'
  ]
};
export default info;