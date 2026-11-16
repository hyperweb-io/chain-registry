import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'piotestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://explorer.piochain.online',
  prettyName: 'PIO Testnet',
  chainType: 'cosmos',
  chainId: 'pio_testnet-1',
  bech32Prefix: 'pio',
  daemonName: 'pio-noded',
  nodeHome: '$HOME/.pio-noded',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'spio',
        fixedMinGasPrice: 1000000000,
        lowGasPrice: 1000000000,
        averageGasPrice: 2000000000,
        highGasPrice: 4000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'spio'
      }]
  },
  codebase: {
    consensus: {
      type: 'cometbft',
      version: '0.39.3'
    },
    sdk: {
      type: 'cosmos',
      version: '0.54.3'
    },
    ibc: {
      type: 'go',
      version: '11.0.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/piotestnet/images/pio.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/piotestnet/images/pio.svg'
  },
  apis: {
    rpc: [{
        address: 'https://comet.piochain.online',
        provider: 'PIO'
      }],
    rest: [{
        address: 'https://rest.piochain.online',
        provider: 'PIO'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.piochain.online',
        provider: 'PIO'
      }]
  },
  explorers: [{
      kind: 'PIO Explorer',
      url: 'https://explorer.piochain.online',
      txPage: 'https://explorer.piochain.online/tx/${txHash}',
      accountPage: 'https://explorer.piochain.online/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/piotestnet/images/pio.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/piotestnet/images/pio.svg',
      theme: {
        darkMode: false
      }
    }]
};
export default info;