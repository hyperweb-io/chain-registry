import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'hazinachain',
  status: 'live',
  networkType: 'mainnet',
  chainType: 'cosmos',
  prettyName: 'HazinaChain',
  chainId: 'hazinachain-1',
  bech32Prefix: 'hazina',
  daemonName: 'hazinad',
  nodeHome: '$HOME/.hazinachain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uhzn',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.0025,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uhzn'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/hazinachain/hazinachain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/hazinachain/hazinachain/main/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.hazinachain.com',
        provider: 'HazinaChain'
      }],
    rest: [{
        address: 'https://api.hazinachain.com',
        provider: 'HazinaChain'
      }]
  },
  explorers: [{
      kind: 'custom',
      url: 'https://explorer.hazinachain.com',
      txPage: 'https://explorer.hazinachain.com/tx/${txHash}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hazinachain/images/hazinachain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hazinachain/images/hazinachain.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hazinachain/images/hazinachain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hazinachain/images/hazinachain.svg'
    }]
};
export default info;