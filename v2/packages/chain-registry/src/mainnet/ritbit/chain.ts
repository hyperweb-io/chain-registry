import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'ritbit',
  status: 'live',
  website: 'https://rubin.trade/',
  networkType: 'mainnet',
  prettyName: 'Rubin',
  chainType: 'cosmos',
  chainId: 'ritbit-mainnet',
  bech32Prefix: 'rit',
  daemonName: 'ritbitd',
  nodeHome: '$HOME/.ritbit',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'urit',
        fixedMinGasPrice: 25000000000,
        lowGasPrice: 25000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }, {
        denom: 'uusdc',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'urit'
      }]
  },
  codebase: {
    recommendedVersion: 'v27.6',
    compatibleVersions: ['v27.6'],
    consensus: {
      type: 'cometbft',
      version: 'v0.39.3'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.54.3'
    },
    ibc: {
      type: 'go',
      version: 'v11.2.0'
    },
    genesis: {
      genesisUrl: 'https://cdn.rubin.trade/scripts/genesis.json'
    },
    binaries: {
      "linux/amd64": 'https://storage.yandexcloud.net/ritbit-upgrade/v27.6/ritbitd-v27.6-linux-amd64.tar.gz?checksum=sha256:9f6134e883fc52e44033b2ba52a90edf705c99799a7b4e885a8dce15938a6502'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ritbit/images/ritbit.png'
  },
  description: 'Rubin is a self-custody decentralized exchange for crypto perpetual futures and spot trading.',
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.rubin.trade',
        provider: 'Rubin'
      }],
    rest: [{
        address: 'https://rest.mainnet.rubin.trade',
        provider: 'Rubin'
      }],
    grpc: [{
        address: 'grpc.mainnet.rubin.trade:443',
        provider: 'Rubin'
      }]
  },
  explorers: [{
      kind: 'rubin',
      url: 'https://explorer.rubin.trade/ritbit-mainnet',
      txPage: 'https://explorer.rubin.trade/ritbit-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.rubin.trade/ritbit-mainnet/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ritbit/images/ritbit.png'
    }]
};
export default info;