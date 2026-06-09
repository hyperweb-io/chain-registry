import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'turkchain',
  status: 'live',
  networkType: 'mainnet',
  chainType: 'cosmos',
  prettyName: 'Turkchain',
  chainId: '1919',
  description: 'Turkchain is a Cosmos SDK and EVM compatible blockchain focused on interoperability, DeFi and Web3 infrastructure.',
  website: 'https://turkscan.com',
  bech32Prefix: 'turk',
  daemonName: 'turkchaind',
  nodeHome: '$HOME/.turkchain',
  slip44: 60,
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  fees: {
    feeTokens: [{
        denom: 'lira',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'lira'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/turkchain/images/turkchain.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/turkchain/images/turkchain.png'
    }],
  apis: {
    rpc: [{
        address: 'https://node.turkscan.com',
        provider: 'turkchain'
      }],
    rest: [{
        address: 'https://api.turkscan.com',
        provider: 'turkchain'
      }],
    grpc: [{
        address: 'grpc.turkscan.com:443',
        provider: 'turkchain'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.turkscan.com',
        provider: 'turkchain'
      }]
  },
  explorers: [{
      kind: 'blockscout',
      url: 'https://turkscan.com',
      txPage: 'https://turkscan.com/tx/${txHash}',
      accountPage: 'https://turkscan.com/address/${accountAddress}'
    }]
};
export default info;