import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lumiwaveprotocol',
  prettyName: 'LumiWave Protocol',
  chainId: 'lumiwaveprotocol',
  status: 'live',
  networkType: 'mainnet',
  chainType: 'cosmos',
  bech32Prefix: 'lumi',
  daemonName: 'lumiwave-protocold',
  nodeHome: '$HOME/.lumiwave-protocol',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulwp',
        fixedMinGasPrice: 0.005
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulwp'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/LumiWave/lumiwave-protocol',
    genesis: {
      genesisUrl: 'https://lwp-mainnet-rpc.lumiwavelab.com/genesis'
    },
    recommendedVersion: 'v0.0.11',
    compatibleVersions: ['v0.0.11'],
    tag: 'v0.0.11'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.svg'
    }],
  apis: {
    rpc: [{
        address: 'https://lwp-mainnet-rpc.lumiwavelab.com',
        provider: 'lwp-mainnet'
      }],
    rest: [{
        address: 'https://lwp-mainnet-api.lumiwavelab.com',
        provider: 'lwp-mainnet'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pub/LumiWave',
      txPage: 'https://ping.pub/LumiWave/tx/${txHash}'
    }]
};
export default info;