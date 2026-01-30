import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'raitestnet',
  status: 'live',
  website: 'https://republicai.io',
  networkType: 'testnet',
  prettyName: 'Republic AI Testnet',
  chainType: 'cosmos',
  chainId: 'raitestnet_77701-1',
  bech32Prefix: 'rai',
  daemonName: 'republicd',
  nodeHome: '$HOME/.raid',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  extraCodecs: ['ethermint'],
  fees: {
    feeTokens: [{
        denom: 'arai',
        lowGasPrice: 10000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'arai'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.republicai.io',
        provider: 'Republic AI'
      }],
    rest: [{
        address: 'https://rest.republicai.io',
        provider: 'Republic AI'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm-rpc.republicai.io',
        provider: 'Republic AI'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/raitestnet/images/rai.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/raitestnet/images/rai.png'
    }]
};
export default info;