import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'qie',
  status: 'live',
  website: 'https://qie.digital',
  networkType: 'mainnet',
  prettyName: 'QIE',
  chainType: 'cosmos',
  chainId: 'qie_1990-1',
  bech32Prefix: 'qie',
  daemonName: 'qied',
  nodeHome: '$HOME/.qied',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aqie',
        fixedMinGasPrice: 0,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aqie'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/qieadmin/qie',
    recommendedVersion: 'v1.0.0',
    genesis: {
      genesisUrl: 'https://github.com/qieadmin/qie/raw/main/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.qie.digital',
        provider: 'QIE Foundation'
      }, {
        address: 'https://tendermint.qie.digital',
        provider: 'QIE Foundation'
      }],
    rest: [{
        address: 'https://api.qie.digital',
        provider: 'QIE Foundation'
      }],
    grpc: [{
        address: 'grpc.qie.digital:443',
        provider: 'QIE Foundation'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc1mainnet.qie.digital',
        provider: 'QIE Foundation'
      }, {
        address: 'https://rpc2mainnet.qie.digital',
        provider: 'QIE Foundation'
      }]
  },
  explorers: [{
      kind: 'qie-explorer',
      url: 'https://mainnet.qie.digital',
      txPage: 'https://mainnet.qie.digital/tx/${txHash}',
      accountPage: 'https://mainnet.qie.digital/address/${accountAddress}'
    }],
  keywords: ['evm'],
  extraCodecs: ['ethermint'],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qie/images/qie.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qie/images/qie.png'
    }]
};
export default info;