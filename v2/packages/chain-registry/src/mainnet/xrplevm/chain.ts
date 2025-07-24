import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'xrplevm',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://xrplevm.org/',
  prettyName: 'XRPL EVM',
  chainType: 'cosmos',
  chainId: 'xrplevm_1440000-1',
  bech32Prefix: 'ethm',
  nodeHome: '~/.exrpd',
  daemonName: 'exrpd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'axrp',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 200000000000,
        averageGasPrice: 250000000000,
        highGasPrice: 400000000000
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/xrplevm/node',
    recommendedVersion: 'v8.0.0',
    compatibleVersions: ['v8.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    binaries: {
      "linux/amd64": 'https://github.com/xrplevm/node/releases/download/v8.0.0/node_8.0.0_Linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/xrplevm/node/releases/download/v8.0.0/node_8.0.0_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/xrplevm/node/releases/download/v8.0.0/node_8.0.0_Darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/xrplevm/node/releases/download/v8.0.0/node_8.0.0_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/xrplevm/node/releases/download/v8.0.0/node_8.0.0_Windows_amd64.zip'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/xrplevm/networks/refs/heads/main/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/xrplevm/cosmos-sdk',
      version: 'v0.50.13',
      tag: 'v0.50.13-xrplevm.2'
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xrplevm/images/xrplevm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xrplevm/images/xrplevm.svg',
      theme: {
        circle: true,
        primaryColorHex: '#FFFFFF'
      }
    }],
  description: 'The XRPL Ethereum Virtual Machine (EVM) is an innovative extension of the XRP Ledger developed by Peersyst in collaboration with Ripple that integrates Ethereum\'s smart contract capabilities via a dedicated sidechain. Built on the Cosmos SDK with a fork of evmOS, this sidechain utilizes a Proof-of-Authority (PoA) consensus model, ensuring high performance and low latency while maintaining the fundamental attributes of the XRP Ledger. It connects to the XRP Ledger through the Axelar network, employing XRP—bridged from the XRPL—as its native currency. This allows for seamless asset transfers and communication between the XRPL and the EVM sidechain. Moreover, the XRPL EVM supports Inter-Blockchain Communication (IBC), promoting interoperability with other blockchains in the Cosmos ecosystem.',
  apis: {
    rpc: [{
        address: 'https://cosmos-rpc.xrplevm.org',
        provider: 'Peersyst'
      }, {
        address: 'https://rpc.xrpl.cumulo.org.es',
        provider: 'Cumulo'
      }],
    rest: [{
        address: 'https://cosmos-api.xrplevm.org',
        provider: 'Peersyst'
      }, {
        address: 'https://api.xrpl.cumulo.org.es',
        provider: 'Cumulo'
      }],
    grpc: [{
        address: 'https://cosmos-grpc.xrplevm.org',
        provider: 'Peersyst'
      }, {
        address: 'https://grpc.xrpl.cumulo.org.es',
        provider: 'Cumulo'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.xrplevm.org',
        provider: 'Peersyst'
      }, {
        address: 'https://json-rpc.xrpl.cumulo.org.es',
        provider: 'Cumulo'
      }]
  },
  explorers: [{
      kind: 'evm',
      url: 'https://explorer.xrplevm.org',
      txPage: 'https://explorer.xrplevm.org/tx/${txHash}',
      accountPage: 'https://explorer.xrplevm.org/address/${accountAddress}'
    }, {
      kind: 'cosmos',
      url: 'https://governance.xrplevm.org',
      txPage: 'https://governance.xrplevm.org/xrplevm/transactions/${txHash}',
      accountPage: 'https://governance.xrplevm.org/xrplevm/accounts/${accountAddress}'
    }],
  keywords: [
    'xrpl',
    'evm',
    'testnet',
    'sidechain',
    'ripple',
    'peersyst',
    'cosmos',
    'evmos',
    'axelar',
    'xrp',
    'xrplevm'
  ]
};
export default info;