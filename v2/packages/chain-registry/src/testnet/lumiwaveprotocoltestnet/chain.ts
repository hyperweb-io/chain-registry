import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'lumiwaveprotocoltestnet',
  prettyName: 'LumiWave Protocol Testnet',
  chainId: 'lumiwaveprotocol-testnet',
  status: 'live',
  networkType: 'testnet',
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
      genesisUrl: 'https://lwp-testnet.lumiwavelab.com/tendermint/genesis'
    },
    recommendedVersion: 'v0.0.11',
    compatibleVersions: ['v0.0.11']
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.svg',
      imageSync: {
        chainName: 'lumiwaveprotocol'
      }
    }],
  apis: {
    rpc: [{
        address: 'https://lwp-testnet.lumiwavelab.com/tendermint',
        provider: 'pdx-validator'
      }],
    rest: [{
        address: 'https://lwp-testnet.lumiwavelab.com',
        provider: 'pdx-validator'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/LumiWave',
      txPage: 'https://testnet.ping.pub/LumiWave/tx/${txHash}'
    }]
};
export default info;