import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'wardenprotocol',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://wardenprotocol.org/',
  prettyName: 'Warden',
  chainType: 'cosmos',
  chainId: 'warden_8765-1',
  bech32Prefix: 'warden',
  daemonName: 'wardend',
  nodeHome: '$HOME/.warden',
  keyAlgos: ['ethsecp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'award',
        fixedMinGasPrice: 140000000000,
        lowGasPrice: 196000000000,
        averageGasPrice: 225400000000,
        highGasPrice: 254800000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'award'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/warden-protocol/wardenprotocol',
    recommendedVersion: 'v0.7.0',
    compatibleVersions: ['v0.7.0'],
    binaries: {
      "linux/amd64": 'https://github.com/warden-protocol/wardenprotocol/releases/download/v0.7.0/wardend-v0.7.0-linux-amd64',
      "linux/arm64": 'https://github.com/warden-protocol/wardenprotocol/releases/download/v0.7.0/wardend-v0.7.0-linux-arm64'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.18'
    },
    genesis: {
      genesisUrl: 'https://github.com/warden-protocol/networks/raw/main/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.4'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
  },
  description: 'Warden is building the Global Agent Network, the foundation of the Agent economy. Through its full-stack platform—Warden Studio, Warden Chain, and Warden Agent Hub—developers can create and deploy AI Agents with onchain identity, trust, and monetization, while users access them through Warden, the \'Everything App\' for crypto.',
  apis: {
    rpc: [{
        address: 'https://rpc.wardenprotocol.org',
        provider: 'Warden Labs'
      }],
    rest: [{
        address: 'https://api.wardenprotocol.org',
        provider: 'Warden Labs'
      }],
    grpc: [{
        address: 'https://grpc.wardenprotocol.org',
        provider: 'Warden Labs'
      }]
  },
  explorers: [{
      kind: 'Warden Labs',
      url: 'https://explorer.wardenprotocol.org/',
      txPage: 'https://explorer.wardenprotocol.org/tx/${txHash}',
      accountPage: 'https://explorer.wardenprotocol.org/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
    }]
};
export default info;