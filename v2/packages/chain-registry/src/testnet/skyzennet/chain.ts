import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'skyzennet',
  chainType: 'cosmos',
  status: 'live',
  description: 'Skyzen Network is a Proof-of-Stake (PoS) blockchain.',
  networkType: 'testnet',
  prettyName: 'Skyzen Network Testnet',
  chainId: 'skyzen-1',
  bech32Prefix: 'skyz',
  daemonName: 'skyzennetworkd',
  nodeHome: '$HOME/.skyzennetwork',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uskyz',
        fixedMinGasPrice: 0.0001,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0002,
        highGasPrice: 0.0005
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uskyz'
      }]
  },
  codebase: {
    genesis: {
      genesisUrl: 'https://github.com/skyzennetwork/testnets/raw/main/genesis/genesis.json'
    },
    gitRepo: 'https://github.com/skyzennetwork/testnets',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/skyzennetwork/testnets/releases/download/v1/skyzennetworkd'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.skyzennet.xyz/',
        provider: 'skyzennet'
      }],
    rest: [{
        address: 'https://api.testnet.skyzennet.xyz/',
        provider: 'skyzennet'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.skyzennet.xyz',
      txPage: 'https://explorer.skyzennet.xyz/skyzen/tx/${txHash}',
      accountPage: 'https://explorer.skyzennet.xyz/skyzen/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/skyzennet/images/skyzen-main.png'
    }]
};
export default info;