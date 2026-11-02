import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xplatestnet',
  status: 'live',
  website: 'https://conx.xyz',
  networkType: 'testnet',
  prettyName: 'CONX Testnet',
  chainType: 'cosmos',
  chainId: 'cube_47-5',
  bech32Prefix: 'xpla',
  daemonName: 'xplad',
  nodeHome: '$HOME/.xpla',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'axpla',
        fixedMinGasPrice: 1200000000000,
        lowGasPrice: 1200000000000,
        averageGasPrice: 1200000000000,
        highGasPrice: 1200000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'axpla'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/xpladev/xpla',
    recommendedVersion: 'v1.14.0',
    compatibleVersions: ['v1.14.0-rc5', 'v1.14.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.21'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/xpladev/testnets/main/cube_47-5/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/xpladev/cosmos-sdk',
      version: 'v0.53.6',
      tag: 'v0.53.6-xpla-2'
    },
    ibc: {
      type: 'go',
      version: 'v10.5.0'
    },
    cosmwasm: {
      version: 'v0.60.9'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
  },
  apis: {
    rpc: [{
        address: 'https://cube-rpc.xpla.dev',
        provider: 'Holdings'
      }],
    rest: [{
        address: 'https://cube-lcd.xpla.dev',
        provider: 'Holdings'
      }],
    evmHttpJsonrpc: [{
        address: 'https://cube-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }]
  },
  explorers: [{
      kind: 'explorer.conx',
      url: 'https://explorer.conx.xyz/testnet',
      txPage: 'https://explorer.conx.xyz/testnet/tx/${txHash}'
    }, {
      kind: 'finder',
      url: 'https://finder.xpla.io/testnet',
      txPage: 'https://finder.xpla.io/testnet/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
    }]
};
export default info;