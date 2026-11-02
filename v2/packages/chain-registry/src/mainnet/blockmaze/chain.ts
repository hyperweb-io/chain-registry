import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'blockmaze',
  chainType: 'cosmos',
  chainId: 'blockmaze_6165-1',
  prettyName: 'Blockmaze',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://blockmaze.com',
  bech32Prefix: 'bmz',
  daemonName: 'blockmazed',
  nodeHome: '$HOME/.blockmazed',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'Rho18',
        fixedMinGasPrice: 150000000000,
        lowGasPrice: 150000000000,
        averageGasPrice: 175000000000,
        highGasPrice: 200000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'Rho18'
      }],
    lockDuration: {
      time: '604800s'
    }
  },
  codebase: {
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    tag: 'v1.0.0',
    consensus: {
      type: 'cometbft',
      version: 'v0.38.21'
    },
    binaries: {
      "linux/amd64": 'https://github.com/NodeNavigator/blockmaze-mainnet-script/releases/download/blockmazed/blockmazed'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/NodeNavigator/blockmaze-mainnet-script/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.4'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.2'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blockmaze/images/bmz.png'
    }],
  description: 'Blockmaze is a Layer 1 blockchain for regulated real-world assets (RWAs). It is EVM-compatible and built on the Cosmos SDK, with BMZ as its native staking and gas token.',
  apis: {
    rpc: [{
        address: 'https://native-rpc.blockmaze.org',
        provider: 'Blockmaze'
      }],
    rest: [{
        address: 'https://api.blockmaze.org',
        provider: 'Blockmaze'
      }],
    wss: [{
        address: 'wss://native-rpc.blockmaze.org/websocket',
        provider: 'Blockmaze'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.blockmaze.org',
        provider: 'Blockmaze'
      }]
  },
  explorers: [{
      kind: 'bmzscan',
      url: 'https://bmzscan.com',
      txPage: 'https://bmzscan.com/native/tx/${txHash}',
      accountPage: 'https://bmzscan.com/native/address/${accountAddress}'
    }]
};
export default info;