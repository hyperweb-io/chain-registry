import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mtgbp',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://mtgbp.com/',
  prettyName: 'mtgbp',
  chainType: 'cosmos',
  chainId: 'mtgbp-1',
  bech32Prefix: 'mtgbp',
  daemonName: 'mtgbpd',
  nodeHome: '$HOME/.mtgbpd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'umtgbp'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  fees: {
    feeTokens: [{
        denom: 'umtgbp',
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.035
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.mtgbp.com',
        provider: 'mtgbp'
      }],
    rest: [{
        address: 'https://lcd.mtgbp.com',
        provider: 'mtgbp'
      }],
    grpc: [{
        address: 'https://grpc.mtgbp.com',
        provider: 'mtgbp'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://blockexplorer.mtgbp.com',
      txPage: 'https://blockexplorer.mtgbp.com/mtgbp/tx/${txHash}',
      accountPage: 'https://blockexplorer.mtgbp.com/mtgbp/accounts/${accountAddress}'
    }],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mtgbp/images/mtgbp.svg',
      theme: {
        primaryColorHex: '#e8692b'
      }
    }]
};
export default info;