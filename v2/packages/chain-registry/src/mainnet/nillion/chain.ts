import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nillion',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Nillion',
  chainType: 'cosmos',
  chainId: 'nillion-1',
  bech32Prefix: 'nillion',
  daemonName: 'nilchaind',
  nodeHome: '$HOME/.nillionapp',
  keyAlgos: ['ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unil',
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.00025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unil'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/NillionNetwork/nilchain',
    recommendedVersion: 'v0.2.5',
    compatibleVersions: ['v0.2.5'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/NillionNetwork/networks/main/nillion-1/genesis.json.xz'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11'
    },
    ibc: {
      type: 'go',
      version: '8.2.1'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [{
        address: 'https://nillion-rpc.lavenderfive.com',
        provider: 'lavenderfive'
      }],
    rest: [{
        address: 'https://nillion-api.lavenderfive.com',
        provider: 'lavenderfive'
      }],
    grpc: [{
        address: 'https://nillion-grpc.lavenderfive.com',
        provider: 'lavenderfive'
      }]
  },
  explorers: [{
      url: 'https://nillion.explorers.guru',
      txPage: 'https://nillion.explorers.guru/transaction/${txHash}',
      accountPage: 'https://nillion.explorers.guru/account/${accountAddress}'
    }, {
      url: 'https://www.mintscan.io/nillion',
      txPage: 'https://www.mintscan.io/nillion/tx/${txHash}',
      accountPage: 'https://www.mintscan.io/nillion/address/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.png'
    }]
};
export default info;