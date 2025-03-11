import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sedatestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.seda.xyz/',
  prettyName: 'SEDA',
  chainType: 'cosmos',
  chainId: 'seda-1-testnet',
  bech32Prefix: 'seda',
  daemonName: 'sedad',
  nodeHome: '$HOME/.sedad',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aseda',
        fixedMinGasPrice: 10000000000,
        lowGasPrice: 10000000000,
        averageGasPrice: 10000000000,
        highGasPrice: 14000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aseda'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sedaprotocol/seda-chain',
    recommendedVersion: 'v0.1.9',
    compatibleVersions: ['v0.1.7', 'v0.1.9'],
    binaries: {
      "linux/amd64": 'https://github.com/sedaprotocol/seda-chain/releases/download/v0.1.9/sedad-amd64',
      "linux/arm64": 'https://github.com/sedaprotocol/seda-chain/releases/download/v0.1.9/sedad-arm64'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sedaprotocol/seda-networks/main/mainnet/genesis.json'
    },
    language: {
      type: 'go',
      version: '1.22.11'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.12'
    },
    cosmwasm: {
      version: '0.50.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.6.1'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
  },
  description: 'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda-testnet.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-testnet-rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      }
    ],
    rest: [
      {
        address: 'https://lcd.testnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda-testnet.api.kjnodes.com',
        provider: 'kjnodes'
      }
    ],
    grpc: [{
        address: 'seda-testnet-grpc.polkachu.com:25890',
        provider: 'Polkachu'
      }]
  },
  explorers: [{
      kind: 'sedaexplorer',
      url: 'https://testnet.explorer.seda.xyz/',
      txPage: 'https://testnet.explorer.seda.xyz/txs/${txHash}',
      accountPage: 'https://testnet.explorer.seda.xyz/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
      theme: {
        primaryColorHex: '#8178d1'
      }
    }]
};
export default info;