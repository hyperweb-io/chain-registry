import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'deardogetestnet',
  chainType: 'cosmos',
  chainId: 'deardoge-testnet',
  prettyName: 'Dear Doge Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'deardoge',
  daemonName: 'dogd',
  nodeHome: '$HOME/.deardoge',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'udear',
        fixedMinGasPrice: 0.25
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udear'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/DoraFactory/Dear-Doge',
    recommendedVersion: 'v11.0.0',
    compatibleVersions: ['v11.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/DoraFactory/Dear-Doge/blob/main/config/testnet/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.deardoge.org',
        provider: 'dorafactory'
      }],
    rest: [{
        address: 'https://testnet-rest.deardoge.org',
        provider: 'dorafactory'
      }],
    grpc: [{
        address: 'testnet-grpc.deardoge.org:443',
        provider: 'dorafactory'
      }]
  },
  explorers: [{
      kind: 'Dear Doge Ping Pub',
      url: 'https://testnet-explorer.deardoge.org/deardoge',
      txPage: 'https://testnet-explorer.deardoge.org/deardoge/tx/${txHash}'
    }]
};
export default info;