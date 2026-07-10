import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'limonatatestnet',
  chainType: 'cosmos',
  chainId: 'limonata_10777-1',
  prettyName: 'Limonata Testnet',
  website: 'https://limonata.xyz',
  networkType: 'testnet',
  status: 'live',
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/limonatatestnet/images/limonatatestnet.png'
  },
  bech32Prefix: 'cosmos',
  daemonName: 'limonatad',
  nodeHome: '$HOME/.limonatad',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aLIMO',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aLIMO'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Limonata-Blockchain/limonata',
    genesis: {
      genesisUrl: 'https://limonata.xyz/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://cosmos-rpc.limonata.xyz',
        provider: 'Limonata'
      }, {
        address: 'https://rpc-t.limonata.vinjan-inc.com',
        provider: 'Vinjan.Inc'
      }],
    rest: [{
        address: 'https://rest.limonata.xyz',
        provider: 'Limonata'
      }, {
        address: 'https://api-t.limonata.vinjan-inc.com',
        provider: 'Vinjan.Inc'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.limonata.xyz',
        provider: 'Limonata'
      }]
  },
  explorers: [{
      kind: 'Limonata Explorer',
      url: 'https://explorer.limonata.xyz',
      txPage: 'https://explorer.limonata.xyz/tx/${txHash}',
      accountPage: 'https://explorer.limonata.xyz/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/limonatatestnet/images/limonatatestnet.png'
    }]
};
export default info;