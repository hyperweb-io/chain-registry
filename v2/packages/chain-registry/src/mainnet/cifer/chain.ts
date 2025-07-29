import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cifer',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://cifer.ai/',
  prettyName: 'Cifer',
  chainType: 'cosmos',
  chainId: 'cifer-2',
  bech32Prefix: 'cife',
  daemonName: 'ciferd',
  nodeHome: '$HOME/.ciferd',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ucif',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 1,
        averageGasPrice: 5,
        highGasPrice: 10
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucif'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cifer-ai/cifer',
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v2.0.0'],
    genesis: {
      genesisUrl: 'https://rpc.cifer.ai/genesis'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.cifer.ai',
        provider: 'Cifer'
      }, {
        address: 'http://119.59.126.109:26657',
        provider: 'Cifer'
      }],
    rest: [{
        address: 'https://lcd.cifer.ai',
        provider: 'Cifer'
      }, {
        address: 'https://api.cifer.ai',
        provider: 'Cifer'
      }],
    grpc: [{
        address: 'http://119.59.126.109:9090',
        provider: 'Cifer'
      }]
  },
  explorers: [{
      url: 'https://www.cifscan.com/',
      txPage: 'https://www.cifscan.com/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
      theme: {
        primaryColorHex: '#6358D7'
      }
    }]
};
export default info;