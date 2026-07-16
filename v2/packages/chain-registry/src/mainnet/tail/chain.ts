import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'tail',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'TAIL Network',
  chainType: 'cosmos',
  chainId: 'tail',
  bech32Prefix: 'tail',
  daemonName: 'taild',
  nodeHome: '$HOME/.tail',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utail',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utail'
      }]
  },
  apis: {
    rpc: [{
        address: 'http://rpc.trusttails.io:26657',
        provider: 'TrustTails'
      }],
    rest: [{
        address: 'http://api.trusttails.io:1317',
        provider: 'TrustTails'
      }]
  },
  explorers: [{
      url: 'http://explorer.trusttails.io',
      txPage: 'http://explorer.trusttails.io/tail/tx/${txHash}'
    }],
  website: 'https://trusttails.io'
};
export default info;