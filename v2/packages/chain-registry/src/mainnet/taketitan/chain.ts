import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'taketitan',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://taketitan.com/',
  prettyName: 'TakeTitan',
  chainType: 'cosmos',
  chainId: 'taketitan-1',
  bech32Prefix: 'titan',
  daemonName: 'titand',
  nodeHome: '$HOME/.titand',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'utitan'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  fees: {
    feeTokens: [{
        denom: 'utitan',
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.035
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.taketitan.com',
        provider: 'taketitan'
      }],
    rest: [{
        address: 'https://lcd.taketitan.com',
        provider: 'taketitan'
      }],
    grpc: [{
        address: 'https://grpc.taketitan.com',
        provider: 'taketitan'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://blockexplorer.taketitan.com',
      txPage: 'https://blockexplorer.taketitan.com/tx/${txHash}',
      accountPage: 'https://blockexplorer.taketitan.com/accounts/${accountAddress}'
    }],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.svg',
      theme: {
        primaryColorHex: '#41918c'
      }
    }]
};
export default info;