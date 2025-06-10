import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'wardenprotocoltestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Warden Protocol Docas',
  chainType: 'cosmos',
  chainId: 'docas_10100-1',
  bech32Prefix: 'warden',
  daemonName: 'wardend',
  nodeHome: '$HOME/.warden',
  keyAlgos: ['ethsecp256k1', 'secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'wSTAKE'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/warden-protocol/wardenprotocol',
    recommendedVersion: 'v0.6.2',
    compatibleVersions: ['v0.6.2'],
    consensus: {
      type: 'cometbft',
      version: '0.38'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/warden-protocol/networks/main/testnets/docas/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50'
    },
    cosmwasm: {
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.docas.wardenprotocol.org/',
        provider: 'Warden Protocol'
      }],
    rest: [{
        address: 'https://api.docas.wardenprotocol.org/',
        provider: 'Warden Protocol'
      }],
    grpc: [{
        address: 'https://grpc.docas.wardenprotocol.org/',
        provider: 'Warden Protocol'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png'
  },
  explorers: [],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png'
    }]
};
export default info;