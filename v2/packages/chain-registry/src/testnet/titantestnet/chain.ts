import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'titantestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://titanlab.io/',
  prettyName: 'Titan Testnet',
  chainType: 'cosmos',
  chainId: 'titan_18889-1',
  bech32Prefix: 'titan',
  nodeHome: '$HOME/.titand',
  daemonName: 'titand',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'atkx',
        fixedMinGasPrice: 100000000000,
        lowGasPrice: 100000000000,
        averageGasPrice: 110000000000,
        highGasPrice: 200000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atkx'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/titantkx/titan',
    recommendedVersion: 'v3.0.0-rc.0',
    compatibleVersions: ['v3.0.0-rc.0'],
    consensus: {
      type: 'cometbft',
      version: '0.37.6'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/titantkx/titan-testnets/main/public/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.6',
      tag: 'v0.47.6-titan.7'
    },
    ibc: {
      type: 'go',
      version: '7.4.0',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.45.0',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.svg'
    }],
  apis: {
    rpc: [
      {
        address: 'https://titan-testnet-rpc.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-rpc-1.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-rpc-2.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-rpc-3.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-rpc-4.titanlab.io:443',
        provider: 'Titanlab.io'
      }
    ],
    rest: [
      {
        address: 'https://titan-testnet-lcd.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-lcd-1.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-lcd-2.titanlab.io:443',
        provider: 'Titanlab.io'
      }
    ],
    grpc: [],
    evmHttpJsonrpc: [
      {
        address: 'https://titan-testnet-json-rpc.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-json-rpc-1.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-testnet-json-rpc-2.titanlab.io:443',
        provider: 'Titanlab.io'
      }
    ]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://titan-testnet-explorer-light.titanlab.io',
      txPage: 'https://titan-testnet-explorer-light.titanlab.io/Titan%20Testnet/tx/${txHash}',
      accountPage: 'https://titan-testnet-explorer-light.titanlab.io/Titan%20Testnet/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/chain.svg'
  }
};
export default info;