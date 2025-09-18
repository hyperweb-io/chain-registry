import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'xrplevmtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://xrplevm.org/',
  pretty_name: 'XRPL EVM Testnet',
  chain_type: 'cosmos',
  chain_id: 'xrplevm_1449000-1',
  bech32_prefix: 'ethm',
  node_home: '~/.exrpd',
  daemon_name: 'exrpd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'axrp',
        fixed_min_gas_price: 250000000,
        low_gas_price: 200000000000,
        average_gas_price: 250000000000,
        high_gas_price: 400000000000
      }]
  },
  codebase: {
    git_repo: 'https://github.com/xrplevm/node',
    recommended_version: 'v7.0.0',
    compatible_versions: ['v7.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    binaries: {
      "linux/amd64": 'https://github.com/xrplevm/node/releases/download/v7.0.0/node_7.0.0_Linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/xrplevm/node/releases/download/v7.0.0/node_7.0.0_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/xrplevm/node/releases/download/v7.0.0/node_7.0.0_Darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/xrplevm/node/releases/download/v7.0.0/node_7.0.0_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/xrplevm/node/releases/download/v7.0.0/node_7.0.0_Windows_amd64.zip'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/xrplevm/networks/refs/heads/main/testnet/genesis.json'
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
    },
    tag: 'v7.0.0',
    language: {
      type: 'go',
      version: '1.22.11'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xrplevmtestnet/images/xrplevm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xrplevmtestnet/images/xrplevm.svg',
      theme: {
        circle: true
      }
    }],
  description: 'The XRPL Ethereum Virtual Machine (EVM) is an innovative extension of the XRP Ledger developed by Peersyst in collaboration with Ripple that integrates Ethereum\'s smart contract capabilities via a dedicated sidechain. Built on the Cosmos SDK with a fork of evmOS, this sidechain utilizes a Proof-of-Authority (PoA) consensus model, ensuring high performance and low latency while maintaining the fundamental attributes of the XRP Ledger. It connects to the XRP Ledger through the Axelar network, employing XRP—bridged from the XRPL—as its native currency. This allows for seamless asset transfers and communication between the XRPL and the EVM sidechain. Moreover, the XRPL EVM supports Inter-Blockchain Communication (IBC), promoting interoperability with other blockchains in the Cosmos ecosystem.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.xrplevm.org',
        provider: 'Peersyst'
      },
      {
        address: 'https://xrpl-evm-testnet.rpc.grove.city/v1/0caa84c4',
        provider: 'Grove'
      },
      {
        address: 'https://xrpevm.kintsugi-nodes.com',
        provider: 'Kintsugi Nodes'
      },
      {
        address: 'https://xrp-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.xrpl.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://xrpl-rpc.embervalidator.top/',
        provider: 'Ember'
      },
      {
        address: 'https://xrp-rpc.enigma-validator.com/',
        provider: 'Enigma'
      },
      {
        address: 'https://xrplevm-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'http://xrpl-testnet-rpc.luckystar.asia/',
        provider: 'LuckyStar'
      },
      {
        address: 'https://exrpd-testnet-rpc.mekonglabs.tech/',
        provider: 'Mekong Labs'
      },
      {
        address: 'https://xrpl-testnet-rpc.mictonode.com',
        provider: 'MictoNode'
      },
      {
        address: 'https://rpc-t.xrp.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://xrpl-testnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      }
    ],
    rest: [
      {
        address: 'https://api.xrpl.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'http://cosmos.testnet.xrplevm.org:1317',
        provider: 'Peersyst'
      },
      {
        address: 'https://api-xrp.kintsugi-nodes.com',
        provider: 'Kintsugi Nodes'
      },
      {
        address: 'https://xrp-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://xrplevm-testnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://xrpl-testnet-api.luckystar.asia/',
        provider: 'LuckyStar'
      },
      {
        address: 'https://exrpd-testnet-api.mekonglabs.tech/',
        provider: 'Mekong Labs'
      },
      {
        address: 'https://xrpl-testnet-api.mictonode.com',
        provider: 'MictoNode'
      },
      {
        address: 'https://api-t.xrp.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'http://cosmos.testnet.xrplevm.org:9090',
        provider: 'Peersyst'
      },
      {
        address: 'grpc-xrp.kintsugi-nodes.com',
        provider: 'Kintsugi Nodes'
      },
      {
        address: 'https://polkachu.com/testnet_public_grpc',
        provider: 'Polkachu'
      },
      {
        address: 'grpc.xrpl.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'xrplevm-testnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://xrpl-testnet-grpc.luckystar.asia/',
        provider: 'LuckyStar'
      },
      {
        address: 'exrpd-testnet-grpc.mekonglabs.tech:47090',
        provider: 'Mekong Labs'
      },
      {
        address: 'xrpl-testnet-grpc.mictonode.com:22090',
        provider: 'MictoNode'
      },
      {
        address: 't-xrpl.grpc.utsa.tech:433',
        provider: 'UTSA (lesnik)'
      },
      {
        address: 'http://xrplevm-testnet-grpc.blockitize.com/',
        provider: 'blockitize'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://exrpd-testnet-json-rpc.mekonglabs.tech',
        provider: 'Mekong Labs'
      },
      {
        address: 'https://xrpl-testnet-evmrpc.mictonode.com',
        provider: 'MictoNode'
      },
      {
        address: 'https://xrpl-evm.corenodehq.xyz/',
        provider: 'CoreNode'
      },
      {
        address: 'https://evmrpc-t.xrp.nodestake.org/',
        provider: 'NodeStake'
      },
      {
        address: 'http://xrplevm-devnet-jsonrpc.blockitize.com',
        provider: 'blockitize'
      },
      {
        address: 'https://json-rpc.xrpl.cumulo.com.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://t-xrpl.evm.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://xrplevm-testnet-jsonrpc.blockitize.com/',
        provider: 'blockitize'
      },
      {
        address: 'https://xrpl-testnet-json.techhubs.asia/',
        provider: 'DeFatRat'
      },
      {
        address: 'https://xrpl-evm.node9x.com/',
        provider: 'node9x'
      },
      {
        address: 'https://xrplevm-testnet-evm.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://json-rpc.testnet.xrplevm.p10node.com',
        provider: 'p10node'
      },
      {
        address: 'https://xrpl-testnet-evm.zstake.xyz',
        provider: 'Zstake'
      },
      {
        address: 'https://xrpl.evm.t.stavr.tech',
        provider: 'STAVR'
      },
      {
        address: 'https://xrpl-testnet-evm.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://xrp-testnet-evm.monkeylabs.me/',
        provider: 'Monkey Labs'
      },
      {
        address: 'https://xrpl-testnet-evm.bonynode.online/',
        provider: 'BonyNode'
      },
      {
        address: 'https://xrpl-testnet-jsonrpc.hazennetworksolutions.com/',
        provider: 'Hazen Network Solutions'
      },
      {
        address: 'https://xrpl-t-evm.brightlystake.com/evm',
        provider: 'Brightlystake'
      },
      {
        address: 'https://xrpl-testnet-jsonrpc.kgnodes.xyz',
        provider: 'kgnodes Services'
      },
      {
        address: 'https://evm.testnet.xrplevm.dongqn.com',
        provider: 'Đông QN'
      },
      {
        address: 'https://evmrpc-t.archive.xrp.nodestake.org',
        provider: 'NodeStake'
      }
    ]
  },
  explorers: [{
      kind: 'evm',
      url: 'https://explorer.testnet.xrplevm.org',
      tx_page: 'https://explorer.testnet.xrplevm.org/tx/${txHash}',
      account_page: 'https://explorer.testnet.xrplevm.org/address/${accountAddress}'
    }, {
      kind: 'cosmos',
      url: 'https://governance.testnet.xrplevm.org',
      tx_page: 'https://governance.testnet.xrplevm.org/xrplevm/transactions/${txHash}',
      account_page: 'https://governance.testnet.xrplevm.org/xrplevm/accounts/${accountAddress}'
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