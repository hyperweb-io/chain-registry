import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'osmosistestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Osmosis Testnet',
  chainType: 'cosmos',
  chainId: 'osmo-test-5',
  bech32Prefix: 'osmo',
  daemonName: 'osmosisd',
  nodeHome: '$HOME/.osmosisd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uosmo',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uosmo'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/osmosis-labs/osmosis',
    recommendedVersion: '29.0.0',
    compatibleVersions: ['29.0.0-rc1', '29.0.0'],
    tag: 'v29.0.0',
    language: {
      type: 'go',
      version: '1.22.11'
    },
    binaries: {
      "linux/amd64": 'https://github.com/osmosis-labs/osmosis/releases/download/v29.0.0/osmosisd-29.0.0-linux-amd64?checksum=6999331507e5119228456a64f733eb1d945f5392ffcfd4673bdad25886b19a7e',
      "linux/arm64": 'https://github.com/osmosis-labs/osmosis/releases/download/v29.0.0/osmosisd-29.0.0-linux-arm64?checksum=079d836d1bf009aab09149eb79d3c187980c5116b8319e09c66a8cae7fa0704c'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.11',
      repo: 'https://github.com/osmosis-labs/cosmos-sdk',
      tag: 'v0.50.11-v28-osmo-1'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.17',
      repo: 'https://github.com/osmosis-labs/cometbft',
      tag: 'v0.38.17-v28-osmo-1'
    },
    cosmwasm: {
      version: '0.53.2',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.53.2',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: '8.7.0',
      repo: 'https://github.com/cosmos/ibc-go',
      tag: 'v8.7.0',
      icsEnabled: ['ics20-1']
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }, {
        address: 'https://osmosis-testnet-tendermint.reliableninjas.com',
        provider: 'Reliable Ninjas'
      }],
    rest: [{
        address: 'https://lcd.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }, {
        address: 'https://osmosis-testnet-cosmos.reliableninjas.com',
        provider: 'Reliable Ninjas'
      }],
    grpc: [{
        address: 'https://grpc.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://mintscan.io/osmosis-testnet',
      txPage: 'https://mintscan.io/osmosis-testnet/txs/${txHash}',
      accountPage: 'https://mintscan.io/osmosis-testnet/account/${accountAddress}'
    }, {
      kind: 'ping.pub',
      url: 'https://explorer.osmotest5.osmosis.zone',
      txPage: 'https://explorer.osmotest5.osmosis.zone/osmo-test-5/tx/${txHash}',
      accountPage: 'https://explorer.osmotest5.osmosis.zone/osmo-test-5/account/${accountAddress}'
    }],
  keywords: ['dex', 'testnet'],
  images: [{
      imageSync: {
        chainName: 'osmosis'
      },
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
    }]
};
export default info;