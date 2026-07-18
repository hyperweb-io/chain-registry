import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'tail',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'TAIL Network',
  chainType: 'cosmos',
  chainId: 'tail-1',
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
        address: 'https://rpc.trusttails.io',
        provider: 'TrustTails'
      }],
    rest: [{
        address: 'https://api.trusttails.io',
        provider: 'TrustTails'
      }]
  },
  explorers: [{
      url: 'https://explorer.trusttails.io',
      txPage: 'https://explorer.trusttails.io/tail/tx/${txHash}'
    }],
  website: 'https://trusttails.io'
};
export default info;