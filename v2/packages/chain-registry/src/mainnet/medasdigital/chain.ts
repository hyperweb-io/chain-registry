import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'medasdigital',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://medas-digital.io/',
  prettyName: 'Medas Digital Network',
  chainType: 'cosmos',
  chainId: 'medasdigital-2',
  bech32Prefix: 'medas',
  daemonName: 'medasdigitald',
  nodeHome: '$HOME/.medasdigital',
  slip44: 118,
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'umedas',
        lowGasPrice: 0.1,
        averageGasPrice: 0.25,
        highGasPrice: 0.4
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umedas'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/oxygene76/medasdigital-2/',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/oxygene76/medasdigital-2/genesis/mainnet/config/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.medas-digital.io:26657/',
        provider: 'Neptun Validator'
      }, {
        address: 'https://medasdigital_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://lcd.medas-digital.io:1317/',
        provider: 'Neptun Validator'
      }, {
        address: 'https://medasdigital_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: [{
        address: 'grpc.medas-digital.io:9090',
        provider: 'Neptun Validator'
      }]
  },
  explorers: [
    {
      kind: 'BigDipper',
      url: 'https://explorer.medas-digital.io:3100/medasdigital',
      txPage: 'https://explorer.medas-digital.io:3100/medasdigital/transactions/${txHash}',
      accountPage: 'explorer.medas-digital.io:3100/medasdigital/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/frontier/medasdigital',
      txPage: 'https://atomscan.com/frontier/medasdigital/transactions/${txHash}',
      accountPage: 'https://atomscan.com/frontier/medasdigital/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/medasdigital',
      txPage: 'https://explorer.whenmoonwhenlambo.money/medasdigital/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/medasdigital/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg',
      theme: {
        primaryColorHex: '#147ccc'
      }
    }]
};
export default info;