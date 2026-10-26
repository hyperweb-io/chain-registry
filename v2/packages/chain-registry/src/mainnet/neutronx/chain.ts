import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'neutronx',
  status: 'live',
  website: 'https://neutronx.com/',
  networkType: 'mainnet',
  prettyName: 'NeutronX',
  chainType: 'cosmos',
  chainId: 'neutronx-1',
  bech32Prefix: 'neutronx',
  daemonName: 'neutronxd',
  nodeHome: '$HOME/.neutronx',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'untx',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.05
      }, {
        denom: 'ibc/ED4C195406CEFBAC6CF3AA64BBF84292910D27B51C78D81374101F9424BC1EC1',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.0015,
        highGasPrice: 0.002
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'untx'
      }]
  },
  codebase: {
    recommendedVersion: 'v1.80.0',
    compatibleVersions: ['v1.80.0'],
    language: {
      type: 'go',
      version: '1.26.2'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.54.0'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.39.0'
    },
    ibc: {
      type: 'go',
      version: 'v11.0.0'
    }
  },
  images: [{
      imageSync: {
        chainName: 'neutronx',
        baseDenom: 'untx'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutronx/images/ntx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutronx/images/ntx.svg'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutronx/images/ntx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutronx/images/ntx.svg'
  },
  description: 'NeutronX is a Cosmos SDK chain with a perpetual futures order book built into the consensus layer. Orders, matching, margin and liquidations are processed on-chain, with USDC as collateral.',
  apis: {
    rpc: [{
        address: 'https://rpc.neutronchain.io',
        provider: 'NeutronX'
      }],
    rest: [{
        address: 'https://api.neutronchain.io',
        provider: 'NeutronX'
      }],
    grpc: [{
        address: 'grpc.neutronchain.io:443',
        provider: 'NeutronX'
      }]
  },
  explorers: [{
      kind: 'NeutronX Explorer',
      url: 'https://explorer.neutronchain.io',
      txPage: 'https://explorer.neutronchain.io/tx/${txHash}',
      accountPage: 'https://explorer.neutronchain.io/address/${accountAddress}',
      blockPage: 'https://explorer.neutronchain.io/block/${blockHeight}'
    }],
  keywords: [
    'dex',
    'perpetuals',
    'orderbook',
    'derivatives'
  ]
};
export default info;