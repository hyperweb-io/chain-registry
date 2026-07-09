import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'ritbit',
  status: 'live',
  website: 'https://rubin.trade/',
  networkType: 'mainnet',
  prettyName: 'RITBIT',
  chainType: 'cosmos',
  chainId: 'ritbit-mainnet',
  bech32Prefix: 'rit',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'urit',
        fixedMinGasPrice: 12500000000,
        lowGasPrice: 12500000000,
        averageGasPrice: 12500000000,
        highGasPrice: 20000000000
      }, {
        denom: 'uusdc',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'urit'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ritbit/images/ritbit.png'
  },
  description: 'RITBIT is the network that powers Rubin Trade — a self-custody decentralized exchange for crypto perpetual futures and spot trading.',
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.rubin.trade',
        provider: 'Rubin'
      }],
    rest: [{
        address: 'https://rest.mainnet.rubin.trade',
        provider: 'Rubin'
      }],
    grpc: [{
        address: 'grpc.mainnet.rubin.trade:443',
        provider: 'Rubin'
      }]
  },
  explorers: [{
      kind: 'rubin',
      url: 'https://explorer.rubin.trade/ritbit-mainnet',
      txPage: 'https://explorer.rubin.trade/ritbit-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.rubin.trade/ritbit-mainnet/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ritbit/images/ritbit.png'
    }]
};
export default info;