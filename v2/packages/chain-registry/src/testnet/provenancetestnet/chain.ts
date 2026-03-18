import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'provenancetestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://provenance.io/',
  prettyName: 'Provenance Testnet',
  chainType: 'cosmos',
  chainId: 'pio-testnet-1',
  bech32Prefix: 'tp',
  daemonName: 'provenanced',
  nodeHome: '$HOME/Provenance',
  keyAlgos: ['secp256k1'],
  slip44: 1,
  fees: {
    feeTokens: [{
        denom: 'nhash',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nhash'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/provenance-io/provenance',
    recommendedVersion: 'v1.27.2',
    compatibleVersions: ['v1.27.2'],
    consensus: {
      type: 'cometbft',
      version: '0.38.21'
    },
    binaries: {
      "linux/amd64": 'https://github.com/provenance-io/provenance/releases/download/v1.27.2/provenance-linux-amd64-v1.27.2.zip'
    },
    genesis: {
      name: 'v1.0.0',
      genesisUrl: 'https://raw.githubusercontent.com/provenance-io/testnet/main/pio-testnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.14'
    },
    ibc: {
      type: 'go',
      version: '8.6.1',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.52',
      enabled: true
    },
    tag: 'v1.27.2'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.test.provenance.io',
        provider: 'Provenance'
      }],
    rest: [{
        address: 'https://api.test.provenance.io',
        provider: 'Provenance'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Provenance',
      url: 'https://explorer.test.provenance.io',
      txPage: 'https://explorer.test.provenance.io/tx/${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'provenance',
        baseDenom: 'nhash'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
    }]
};
export default info;