import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'paxi',
  status: 'live',
  website: 'https://paxinet.io',
  networkType: 'mainnet',
  chainType: 'cosmos',
  prettyName: 'Paxi',
  chainId: 'paxi-mainnet',
  bech32Prefix: 'paxi',
  daemonName: 'paxid',
  nodeHome: '$HOME/.paxi',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'upaxi',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.1,
        highGasPrice: 0.25
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upaxi'
      }],
    lockDuration: {
      time: '604800s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/paxi-web3/paxi',
    genesis: {
      name: 'paxi-mainnet',
      genesisUrl: 'https://mainnet-rpc.paxinet.io/genesis'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paxi/images/paxi.png',
      theme: {
        circle: false
      }
    }],
  apis: {
    rpc: [{
        address: 'https://mainnet-rpc.paxinet.io',
        provider: 'Paxi Foundation'
      }],
    rest: [{
        address: 'https://mainnet-lcd.paxinet.io',
        provider: 'Paxi Foundation'
      }],
    grpc: [{
        address: 'mainnet-rpc.paxinet.io:443',
        provider: 'Paxi Foundation'
      }]
  },
  explorers: [{
      kind: 'paxi-explorer',
      url: 'https://explorer.paxinet.io',
      txPage: 'https://explorer.paxinet.io/tx/${txHash}',
      accountPage: 'https://explorer.paxinet.io/address/${accountAddress}'
    }],
  keywords: [
    'ibc',
    'staking',
    'dex',
    'wasm'
  ]
};
export default info;