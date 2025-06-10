import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'zetachaintestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'ZetaChain Testnet',
  chainType: 'cosmos',
  chainId: 'athens_7001-1',
  bech32Prefix: 'zeta',
  daemonName: 'zetacored',
  nodeHome: '$HOME/.zetacored',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'azeta',
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'azeta'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/zeta-chain/node',
    recommendedVersion: 'v8.3.3',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://zetachain-athens.blockpi.network/rpc/v1/public/genesis'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: 'v6.1.0'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://zetachain-athens.blockpi.network/rpc/v1/public',
        provider: 'BlockPI'
      },
      {
        address: 'https://zetachain-testnet-archive.allthatnode.com:26657',
        provider: 'All That Node'
      },
      {
        address: 'https://zetachain-testnet-tendermint.reliableninjas.com',
        provider: 'Reliable Ninjas'
      }
    ],
    rest: [
      {
        address: 'https://zetachain-athens.blockpi.network/lcd/v1/public',
        provider: 'BlockPI'
      },
      {
        address: 'https://zetachain-testnet-archive.allthatnode.com:1317',
        provider: 'All That Node'
      },
      {
        address: 'https://zetachain-testnet-cosmos.reliableninjas.com',
        provider: 'Reliable Ninjas'
      }
    ]
  },
  explorers: [{
      kind: 'ZetaScan',
      url: 'https://athens.explorer.zetachain.com/',
      txPage: 'https://athens.explorer.zetachain.com/cc/tx/${txHash}'
    }, {
      kind: 'BlockScout',
      url: 'https://zetachain-athens-3.blockscout.com/',
      txPage: 'https://zetachain-athens-3.blockscout.com/tx/${txHash}'
    }]
};
export default info;