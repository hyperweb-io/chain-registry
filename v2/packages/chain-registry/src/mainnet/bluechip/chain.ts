import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bluechip',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Bluechip',
  chainType: 'cosmos',
  chainId: 'bluechip-3',
  bech32Prefix: 'bluechip',
  daemonName: 'bluechipchaind',
  nodeHome: '$HOME/.bluechipChain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubluechip',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubluechip'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Bluechip23/bluechip-chain-official.git',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Bluechip23/bluechip-chain-official/main/genesis.json'
    },
    tag: 'v1.0.0',
    binaries: {
      "linux/amd64": 'https://github.com/Bluechip23/bluechip-chain-official/releases/download/v1.0.0/bluechipchaind_v1.0.0_linux_amd64.tar.gz?checksum=sha256:f50384f3f8095916af13ef8586ed96aa514a067b890e29c9f7d58aa2cb315618'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.13'
    },
    cosmwasm: {
      version: '0.54.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: '8.5.2'
    }
  },
  apis: {
    rpc: [{
        address: 'https://bluechip.rpc.bluechip.link',
        provider: 'BluechipNode'
      }],
    rest: [{
        address: 'https://bluechip.api.bluechip.link',
        provider: 'BluechipNode'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'custom',
      url: 'https://bluechipsblockexplorer.com/frontpage',
      txPage: 'https://bluechipsblockexplorer.com/tx/${txHash}',
      accountPage: 'https://bluechipsblockexplorer.com/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluechip/images/bluechip.png'
    }],
  website: 'https://www.bluechip.link/home'
};
export default info;