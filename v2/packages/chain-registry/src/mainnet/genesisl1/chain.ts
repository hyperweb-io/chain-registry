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
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      name: 'plan_ethermint',
      genesisUrl: 'https://raw.githubusercontent.com/GenesisL1/genesis-parameters/main/genesis_29-2/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46.15'
    },
    tag: 'v1.0.0'
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
      }, {
        address: 'https://genesisl1-rpc.zenode.app',
        provider: 'anodeofzen'
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
      kind: 'ping.pub',
      url: 'https://ping.pub/genesisL1',
      txPage: 'https://ping.pub/genesisL1/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.utsa.tech/genesis',
      txPage: 'https://exp.utsa.tech/genesis/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Genesisl1',
      txPage: 'https://explorer.stavr.tech/Genesisl1/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Genesisl1/accounts/${accountAddress}'
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
    }]
};
export default info;