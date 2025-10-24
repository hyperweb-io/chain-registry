import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'solana',
  chainType: 'solana',
  status: 'live',
  chainId: '101',
  website: 'https://solana.com/',
  networkType: 'mainnet',
  prettyName: 'Solana Mainnet Beta',
  slip44: 501,
  fees: {
    feeTokens: [{
        denom: 'Lamport',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'Lamport'
      }]
  },
  explorers: [{
      kind: 'Solana Explorer',
      url: 'https://explorer.solana.com/',
      txPage: 'https://explorer.solana.com/tx/${txHash}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
      theme: {
        circle: false
      }
    }]
};
export default info;