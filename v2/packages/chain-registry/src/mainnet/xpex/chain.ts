import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'xpex',
  chainType: 'cosmos',
  status: 'live',
  website: 'https://xpexpex.com',
  networkType: 'mainnet',
  prettyName: 'XPEX',
  chainId: 'xpex-2',
  bech32Prefix: 'xpex',
  daemonName: 'xpexd',
  nodeHome: '$HOME/.exampleapp',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxpx',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxpx'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/tutu4881/xpex-chain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    tag: 'v1.0.0',
    consensus: {
      type: 'cometbft',
      version: '0.39.4',
      repo: 'https://github.com/cometbft/cometbft',
      tag: 'v0.39.4'
    },
    sdk: {
      type: 'cosmos',
      version: '0.54.4',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      tag: 'v0.54.4'
    },
    ibc: {
      type: 'go',
      version: '11.2.0',
      repo: 'https://github.com/cosmos/ibc-go',
      tag: 'v11.2.0',
      icsEnabled: ['ics20-1']
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/tutu4881/xpex-chain/v1.0.0/railway-config/config/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpex/images/xpx.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.xpexpex.com',
        provider: 'XPEX'
      }],
    rest: [{
        address: 'https://api.xpexpex.com',
        provider: 'XPEX'
      }]
  },
  explorers: [{
      kind: 'xpex',
      url: 'https://xpexpex.com/explorer',
      txPage: 'https://xpexpex.com/explorer/tx/${txHash}',
      accountPage: 'https://xpexpex.com/explorer/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpex/images/xpx.png'
    }]
};
export default info;