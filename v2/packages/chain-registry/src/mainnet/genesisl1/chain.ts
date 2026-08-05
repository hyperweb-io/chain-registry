import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'genesisl1',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'GenesisL1',
  chainType: 'cosmos',
  chainId: 'genesis_29-2',
  website: 'https://GenesisL1.com',
  bech32Prefix: 'genesis',
  daemonName: 'genesisd',
  nodeHome: '$HOME/.genesis',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'el1',
        lowGasPrice: 57000000000,
        averageGasPrice: 58000000000,
        highGasPrice: 59000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'el1'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/GenesisL1/genesis-crypto',
    recommendedVersion: 'v1.6.2',
    compatibleVersions: ['v1.6.2'],
    binaries: {
      "linux/amd64": 'https://github.com/GenesisL1/genesis-crypto/releases/download/v1.6.2/genesis_1.6.2_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/GenesisL1/genesis-crypto/releases/download/v1.6.2/genesis_1.6.2_Linux_arm64.tar.gz',
      "windows/amd64": 'https://github.com/GenesisL1/genesis-crypto/releases/download/v1.6.2/genesis_1.6.2_Windows_x86_64.tar.gz'
    },
    genesis: {
      name: 'plan_ethermint',
      genesisUrl: 'https://raw.githubusercontent.com/GenesisL1/genesis-parameters/main/genesis_29-2/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.6'
    },
    tag: 'v1.6.2'
  },
  logoURIs: {
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
    evmHttpJsonrpc: [{
        address: 'https://rpc.genesisl1.org',
        provider: 'GenesisL1'
      }]
  },
  explorers: [
    {
      kind: 'GenesisL1',
      url: 'https://explorer.genesisl1.org',
      txPage: 'https://explorer.genesisl1.org/tx/${txHash}',
      accountPage: 'https://explorer.genesisl1.org/address/${accountAddress}'
    },
    {
      kind: 'GenesisL1',
      url: 'https://l1coin.com/explorer.html',
      txPage: 'https://l1coin.com/explorer.html#/tx/${txHash}',
      accountPage: 'https://l1coin.com/explorer.html#/address/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/genesisL1',
      txPage: 'https://ping.pub/genesisL1/tx/${txHash}',
      accountPage: 'https://ping.pub/genesisL1/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.utsa.tech/genesis',
      txPage: 'https://exp.utsa.tech/genesis/tx/${txHash}',
      accountPage: 'https://exp.utsa.tech/genesis/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.stavr.tech/Genesisl1',
      txPage: 'https://explorer.stavr.tech/Genesisl1/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Genesisl1/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/genesisl1',
      txPage: 'https://atomscan.com/genesisl1/transactions/${txHash}',
      accountPage: 'https://atomscan.com/genesisl1/accounts/${accountAddress}'
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
      checksumAvailable: true,
      provider: 'LCserve'
    }]
};
export default info;