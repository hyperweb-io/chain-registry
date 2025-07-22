import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'qfs',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://qfsone.com/',
  prettyName: 'Quantum Financial Systems',
  chainType: 'cosmos',
  chainId: 'qfs-1',
  bech32Prefix: 'qfs',
  daemonName: 'qfsd',
  nodeHome: '$HOME/.qfsd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'uqfs'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  fees: {
    feeTokens: [{
        denom: 'uqfs',
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.035
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.qfsone.com',
        provider: 'qfs'
      }],
    rest: [{
        address: 'https://lcd.qfsone.com',
        provider: 'qfs'
      }],
    grpc: [{
        address: 'https://grpc.qfsone.com',
        provider: 'qfs'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://blockexplorer.qfsone.com',
      txPage: 'https://blockexplorer.qfsone.com/qfs/tx/${txHash}',
      accountPage: 'https://blockexplorer.qfsone.com/qfs/accounts/${accountAddress}'
    }],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.svg',
      theme: {
        primaryColorHex: '#2979dc'
      }
    }]
};
export default info;