import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'genesisl1',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'GenesisL1',
  chain_type: 'cosmos',
  chain_id: 'genesis_29-2',
  website: 'https://GenesisL1.com',
  bech32_prefix: 'genesis',
  daemon_name: 'genesisd',
  node_home: '$HOME/.genesis',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'el1',
        low_gas_price: 57000000000,
        average_gas_price: 58000000000,
        high_gas_price: 59000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'el1'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/GenesisL1/genesis-crypto',
    recommended_version: 'v1.6.2',
    compatible_versions: ['v1.6.2'],
    binaries: {
      "linux/amd64": 'https://github.com/GenesisL1/genesis-crypto/releases/download/v1.6.2/genesis_1.6.2_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/GenesisL1/genesis-crypto/releases/download/v1.6.2/genesis_1.6.2_Linux_arm64.tar.gz',
      "windows/amd64": 'https://github.com/GenesisL1/genesis-crypto/releases/download/v1.6.2/genesis_1.6.2_Windows_x86_64.tar.gz'
    },
    genesis: {
      name: 'plan_ethermint',
      genesis_url: 'https://raw.githubusercontent.com/GenesisL1/genesis-parameters/main/genesis_29-2/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.6'
    },
    tag: 'v1.6.2'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
  },
  description: 'GenesisL1 is a public distributed ledger for decentralized scientific data, assets, applications, and protocols, with a focus on bioinformatics, biotechnology, medicine, and machine learning.',
  apis: {
    rpc: [{
        address: 'https://26657.genesisl1.org',
        provider: 'GenesisL1'
      }],
    rest: [{
        address: 'https://api.genesisl1.org',
        provider: 'GenesisL1'
      }, {
        address: 'https://1317.genesisl1.org',
        provider: 'GenesisL1'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://rpc.genesisl1.org',
        provider: 'GenesisL1'
      }]
  },
  explorers: [
    {
      kind: 'GenesisL1',
      url: 'https://explorer.genesisl1.org',
      tx_page: 'https://explorer.genesisl1.org/tx/${txHash}',
      account_page: 'https://explorer.genesisl1.org/address/${accountAddress}'
    },
    {
      kind: 'GenesisL1',
      url: 'https://l1coin.com/explorer.html',
      tx_page: 'https://l1coin.com/explorer.html#/tx/${txHash}',
      account_page: 'https://l1coin.com/explorer.html#/address/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/genesisL1',
      tx_page: 'https://ping.pub/genesisL1/tx/${txHash}',
      account_page: 'https://ping.pub/genesisL1/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.utsa.tech/genesis',
      tx_page: 'https://exp.utsa.tech/genesis/tx/${txHash}',
      account_page: 'https://exp.utsa.tech/genesis/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.stavr.tech/Genesisl1',
      tx_page: 'https://explorer.stavr.tech/Genesisl1/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Genesisl1/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/genesisl1',
      tx_page: 'https://atomscan.com/genesisl1/transactions/${txHash}',
      account_page: 'https://atomscan.com/genesisl1/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
    }],
  snapshots: [{
      url: 'https://lcserve.zip',
      type: 'pruned',
      compression: 'lz4',
      checksum_available: true,
      provider: 'LCserve'
    }]
};
export default info;