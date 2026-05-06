import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'ltrstchain',
  chainType: 'cosmos',
  chainId: 'ltrst-chain-1',
  prettyName: 'LTRST Chain',
  website: 'https://larrytrustee.ai',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'ltrst',
  daemonName: 'ltrstchaind',
  nodeHome: '$HOME/.ltrstchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ultrst',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ultrst'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Larrytrustee/ltrst-chain-l1',
    sdk: {
      type: 'cosmos',
      version: '0.50'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.17'
    },
    ibc: {
      type: 'go',
      version: '8.5.2',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: false
    },
    genesis: {
      genesisUrl: 'https://chain.larrytrustee.ai/trpc/genesis'
    }
  },
  apis: {
    rpc: [{
        address: 'https://chain.larrytrustee.ai/trpc/',
        provider: 'LarryTrustee.AI'
      }],
    rest: [{
        address: 'https://chain.larrytrustee.ai/tapi/',
        provider: 'LarryTrustee.AI'
      }]
  },
  explorers: [{
      kind: 'LarryTrustee Explorer',
      url: 'https://dex.larrytrustee.ai/explorer',
      txPage: 'https://dex.larrytrustee.ai/explorer/tx/${txHash}',
      accountPage: 'https://dex.larrytrustee.ai/explorer/address/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ltrstchain/images/ltrst.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ltrstchain/images/ltrst.png'
    }],
  description: 'LTRST Chain is a Cosmos SDK Layer 1 with privacy primitives at the protocol level, built so a family\'s living trust never has to live on a server owned by someone who could sell it, breach it, or quietly mine its data.'
};
export default info;