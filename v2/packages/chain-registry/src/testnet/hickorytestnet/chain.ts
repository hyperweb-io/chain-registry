import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'hickorytestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://hickoryblockchain.com',
  prettyName: 'Hickory Testnet',
  chainType: 'cosmos',
  chainId: 'Hickory',
  bech32Prefix: 'hic',
  daemonName: 'hickoryd',
  nodeHome: '$HOME/.hickory',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uhic',
        averageGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uhic'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/HicDevs/hickory-blockchain',
    language: {
      type: 'go',
      version: '1.24.6'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.3'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.17'
    },
    ibc: {
      type: 'go',
      version: '10.2.0',
      icsEnabled: ['ics20-1']
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/HicDevs/hickory-blockchain/79b16f2971b5b203a5d4a6594d1e2bcb9e089919/networks/hickory-testnet/genesis.json'
    }
  },
  description: 'Hickory is a Cosmos SDK public test network for developing and validating the HIC ecosystem, validator operations, staking, governance, wallets and IBC-ready infrastructure.',
  apis: {
    rpc: [{
        address: 'https://rpc.hickoryblockchain.com',
        provider: 'Hickory'
      }],
    rest: [{
        address: 'https://rest.hickoryblockchain.com',
        provider: 'Hickory'
      }],
    grpc: [{
        address: 'grpc.hickoryblockchain.com:443',
        provider: 'Hickory'
      }]
  },
  explorers: [{
      kind: 'HICScan',
      url: 'https://hicscan.com',
      txPage: 'https://hicscan.com/tx/${txHash}',
      accountPage: 'https://hicscan.com/address/${accountAddress}',
      validatorPage: 'https://hicscan.com/validator/${validatorAddress}',
      blockPage: 'https://hicscan.com/block/${blockHeight}'
    }],
  keywords: [
    'cosmos-sdk',
    'testnet',
    'staking'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hickorytestnet/images/hic.png',
      theme: {
        circle: true
      }
    }]
};
export default info;