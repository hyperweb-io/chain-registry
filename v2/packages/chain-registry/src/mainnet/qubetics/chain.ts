import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'qubetics',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.qubetics.com/',
  prettyName: 'Qubetics',
  chainType: 'cosmos',
  chainId: 'qubetics_9030-1',
  bech32Prefix: 'qubetics',
  nodeHome: '$HOME/.qubeticsd',
  daemonName: 'qubeticsd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'tics',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'tics'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Qubetics/qubetics-chain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.9'
    },
    binaries: {
      "linux/amd64": 'https://github.com/Qubetics/qubetics-mainnetnode-script/tree/main/ubuntu22.04build/qubeticsd'
    },
    genesis: {
      genesisUrl: 'https://github.com/Qubetics/qubetics-mainnetnode-script/blob/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.12'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qubetics/images/qubetics.png'
  },
  description: 'Developers use qubetics as the Ethereum Chain to deploy applications of the future. Get all the functionalities of Ethereum with the power of IBC and Interchain composability.',
  apis: {
    rpc: [
      {
        address: 'https://tendermint.qubetics.com',
        provider: 'Qubetics'
      },
      {
        address: 'https://node.veritics.ch',
        provider: 'Veritics'
      },
      {
        address: 'https://rpc.qubenode.space',
        provider: 'Qubenode'
      },
      {
        address: 'https://qubeticstralbo.eu/',
        provider: 'TicsForge-Node'
      },
      {
        address: 'https://tics.stakings.id/',
        provider: 'BlockDock'
      },
      {
        address: 'https://node.dragon-node.com',
        provider: 'Dragon-Node'
      },
      {
        address: 'https://jblfg.org',
        provider: 'Belfour Node'
      }
    ],
    rest: [
      {
        address: 'https://swagger.qubetics.com',
        provider: 'Qubetics'
      },
      {
        address: 'https://swagger.node.veritics.ch',
        provider: 'Veritics'
      },
      {
        address: 'https://rest.qubenode.space',
        provider: 'Qubenode'
      },
      {
        address: 'https://rest.qubeticstralbo.eu',
        provider: 'TicsForge-Node'
      }
    ],
    grpc: [{
        address: 'https://grpc.qubetics.com',
        provider: 'Qubetics'
      }],
    evmHttpJsonrpc: [
      {
        address: 'https://rpc.qubetics.com',
        provider: 'Qubetics'
      },
      {
        address: 'https://evm.qubenode.space',
        provider: 'Qubenode'
      },
      {
        address: 'https://evm.qubeticstralbo.eu',
        provider: 'TicsForge-Node'
      }
    ]
  },
  explorers: [{
      kind: 'qubetics',
      url: 'https://ticsscan.com',
      txPage: 'https://ticsscan.com/tx/${txHash}',
      accountPage: 'https://ticsscan.com/address/${accountAddress}'
    }, {
      kind: '🚀 Qubetics 🌕 Native 🔥',
      url: 'https://native.ticsscan.com/qubetics',
      txPage: 'https://native.ticsscan.com/qubetics/tx/${txHash}',
      accountPage: 'https://native.ticsscan.com/qubetics/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qubetics/images/qubetics.png'
    }]
};
export default info;