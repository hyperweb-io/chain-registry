import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'axiome',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://axiome.pro/',
  prettyName: 'Axiome',
  chainType: 'cosmos',
  chainId: 'axiome-1',
  bech32Prefix: 'axm',
  daemonName: 'axmd',
  nodeHome: '$HOME/.axmd',
  keyAlgos: ['secp256k1'],
  slip44: 546,
  fees: {
    feeTokens: [{
        denom: 'uaxm',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1.65,
        highGasPrice: 7.4
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/axiome-pro/axm-node',
    recommendedVersion: 'v2.2.1',
    compatibleVersions: ['v2.2.1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.5'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.3'
    },
    cosmwasm: {
      version: 'v0.50.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/axiome.png'
  },
  apis: {
    rpc: [{
        address: 'https://api-chain.axiomechain.org',
        provider: 'Axiome'
      }],
    rest: [{
        address: 'https://axm-lcd.trickle.pro',
        provider: 'Trickle'
      }]
  },
  explorers: [{
      kind: 'Axiome Explorer',
      url: 'https://axiomechain.pro',
      txPage: 'https://axiomechain.pro/transactions/${txHash}',
      accountPage: 'https://axiomechain.pro/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/axiome.png'
    }]
};
export default info;