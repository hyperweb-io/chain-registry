import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dhealth',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://dhealth.com/',
  prettyName: 'dHealth',
  chainType: 'cosmos',
  chainId: 'dhealth',
  bech32Prefix: 'dh',
  daemonName: 'dhealthd',
  nodeHome: '$HOME/.dhealth',
  keyAlgos: ['secp256k1'],
  slip44: 10111,
  fees: {
    feeTokens: [{
        denom: 'udhp',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udhp'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/dhealthproject/dhealth',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/dhealthproject/dhealth/releases/download/v1.0.0/dhealthd-1.0.0-linux-amd64'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/dhealthproject/mainnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.47.4'
    },
    ibc: {
      type: 'go',
      version: 'v7.2.0'
    },
    cosmwasm: {
      version: 'v0.41.0',
      path: '$HOME/.dhealth/wasm',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.dhealth.com',
        provider: 'dhealth'
      }, {
        address: 'https://rpc.dhealth.nodestake.org',
        provider: 'NodeStake'
      }],
    rest: [{
        address: 'https://lcd.dhealth.com',
        provider: 'dhealth'
      }, {
        address: 'https://api.dhealth.nodestake.org',
        provider: 'NodeStake'
      }],
    grpc: [{
        address: 'https://grpc.dhealth.com:443',
        provider: 'dhealth'
      }, {
        address: 'https://grpc.dhealth.nodestake.org:443',
        provider: 'NodeStake'
      }]
  },
  explorers: [{
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/dhealth',
      txPage: 'https://staking-explorer.com/transaction.php?chain=dhealth&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=dhealth&addr=${accountAddress}'
    }, {
      kind: 'nodestake',
      url: 'https://explorer.nodestake.org/dhealth',
      txPage: 'https://explorer.nodestake.org/dhealth/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/dhealth/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
      theme: {
        primaryColorHex: '#140c7c'
      }
    }]
};
export default info;