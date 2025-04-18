import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'sunrisetestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Sunrise Testnet',
  chain_type: 'cosmos',
  chain_id: 'sunrise-test-0.1',
  bech32_prefix: 'sunrise',
  daemon_name: 'sunrised',
  node_home: '$HOME/.sunrise',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'urise',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uvrise'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/sunriselayer/sunrise',
    recommended_version: 'v0.1.2',
    compatible_versions: ['v0.1.2'],
    binaries: {
      "linux/amd64": 'https://github.com/sunriselayer/sunrise/releases/download/v0.1.2/sunrised'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.0.5',
      repo: 'https://github.com/sunriselayer/sunrise-core',
      tag: 'v0.0.5-cmt-v0.38.2'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.2'
    },
    ibc: {
      type: 'go',
      version: '8.0.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
  },
  apis: {
    rpc: [{
        address: 'https://a-node.sunrise-test-1.cauchye.net/',
        provider: 'CauchyE'
      }, {
        address: 'https://b-node.sunrise-test-1.cauchye.net/',
        provider: 'CauchyE'
      }],
    rest: [{
        address: 'https://a-node.sunrise-test-1.cauchye.net:1318',
        provider: 'CauchyE'
      }, {
        address: 'https://b-node.sunrise-test-1.cauchye.net:1318',
        provider: 'CauchyE'
      }],
    grpc: [{
        address: 'https://a.sunrise-test-1.cauchye.net:9092',
        provider: 'CauchyE'
      }, {
        address: 'https://b.sunrise-test-1.cauchye.net:9092',
        provider: 'CauchyE'
      }]
  },
  explorers: [],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
    }]
};
export default info;