import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'monolythiumsprintnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Monolythium Sprintnet',
  chainType: 'cosmos',
  chainId: 'mono-sprint-1',
  bech32Prefix: 'mono',
  daemonName: 'monod',
  nodeHome: '$HOME/.monod',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'alyth',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 1000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'alyth'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/monolythium/mono-core'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/monolythiumsprintnet/images/lyth.png'
  },
  description: 'Monolythium is a high-performance Layer-1 blockchain built with Cosmos SDK and CometBFT finality, featuring a first-class EVM. Sprintnet is the accelerated testnet for rapid end-to-end testing and upgrade rehearsals.',
  apis: {
    rpc: [{
        address: 'https://rpc.sprintnet.mononodes.xyz',
        provider: 'Monolythium'
      }],
    rest: [{
        address: 'https://api.sprintnet.mononodes.xyz',
        provider: 'Monolythium'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.sprintnet.mononodes.xyz',
        provider: 'Monolythium'
      }]
  },
  explorers: [{
      kind: 'Monoscan',
      url: 'https://monoscan.xyz/sprintnet',
      txPage: 'https://monoscan.xyz/sprintnet/tx/${txHash}',
      accountPage: 'https://monoscan.xyz/sprintnet/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/monolythiumsprintnet/images/lyth.png'
    }]
};
export default info;