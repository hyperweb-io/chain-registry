import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'composabletestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Composable Testnet',
  chainType: 'cosmos',
  chainId: 'banksy-testnet-3',
  bech32Prefix: 'centauri',
  daemonName: 'centaurid',
  nodeHome: '$HOME/.banksy',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'ppica'
      }]
  },
  fees: {
    feeTokens: [{
        denom: 'ppica',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/notional-labs/composable-centauri',
    recommendedVersion: 'v3.0.0',
    compatibleVersions: ['v3.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/notional-labs/composable-networks/main/banksy-testnet-3/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.composable-t.indonode.net:443',
        provider: 'Indonode'
      }, {
        address: 'https://rpc-composable-testnet.sr20de.xyz:443',
        provider: 'Sr20de'
      }],
    rest: [
      {
        address: 'https://api.composable-t.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://composable.api.t4.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-composable-testnet.sr20de.xyz',
        provider: 'Sr20de'
      }
    ],
    grpc: [{
        address: 'https://grpc.composable-t.indonode.net:47090',
        provider: 'Indonode'
      }, {
        address: 'https://grpc-composable-testnet.sr20de.xyz',
        provider: 'Sr20de'
      }]
  },
  explorers: [
    {
      url: 'https://explorer.nodexcapital.com/composable-3',
      txPage: 'https://explorer.nodexcapital.com/composable-3/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Composable-Testnet4',
      txPage: 'https://explorer.stavr.tech/Composable-Testnet4/tx/${txHash}'
    },
    {
      url: 'https://explorer.indonode.net/composable-testnet-3',
      txPage: 'https://explorer.indonode.net/composable-testnet-3/tx/${txHash}'
    },
    {
      url: 'https://explorer.sr20de.xyz/Composible-3',
      txPage: 'https://explorer.sr20de.xyz/Composible-3/tx/${txHash}'
    }
  ]
};
export default info;