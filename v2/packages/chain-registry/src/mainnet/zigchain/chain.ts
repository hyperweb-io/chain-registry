import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'zigchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://zigchain.com/',
  prettyName: 'ZIGChain',
  chainType: 'cosmos',
  chainId: 'zigchain-1',
  bech32Prefix: 'zig',
  daemonName: 'zigchaind',
  nodeHome: '$HOME/.zigchaind',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  description: 'ZIGChain (ZIG) is a Layer 1 blockchain focused on unlocking financial opportunities for everyone - regardless of their income, location, or level of knowledge.',
  fees: {
    feeTokens: [{
        denom: 'uzig',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uzig'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/ZIGChain/zigchain',
    recommendedVersion: '1.2.0',
    compatibleVersions: [],
    consensus: {
      type: 'cometbft',
      version: '0.38.17'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.14'
    },
    ibc: {
      type: 'go',
      version: '8.4.0'
    },
    cosmwasm: {
      version: '0.55.1',
      enabled: true
    },
    genesis: {
      genesisUrl: 'https://github.com/ZIGChain/networks/raw/main/zigchain-1/genesis.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/zig-test-2/binaries/zigchaind-v1.2.0-linux-amd64.tar.gz',
      "darwin/amd64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/zig-test-2/binaries/zigchaind-v1.2.0-darwin-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/zig-test-2/binaries/zigchaind-v1.2.0-darwin-amd64.tar.gz'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
    }],
  apis: {
    rpc: [{
        address: 'https://public-zigchain-rpc.numia.xyz/',
        provider: 'Numia'
      }, {
        address: 'https://rpc.zigchain.com',
        provider: 'ZIGCHAIN'
      }],
    rest: [{
        address: 'https://public-zigchain-lcd.numia.xyz/',
        provider: 'Numia'
      }, {
        address: 'https://api.zigchain.com',
        provider: 'ZIGCHAIN'
      }],
    grpc: [{
        address: 'grpc.zigchain.com:9090',
        provider: 'ZIGCHAIN'
      }]
  },
  explorers: [{
      kind: 'range',
      url: 'https://app.range.org/address/zigchain/zigchain',
      txPage: 'https://app.range.org/tx/zigchain/${txHash}',
      accountPage: 'https://app.range.org/address/zigchain/${accountAddress}'
    }, {
      kind: 'zigscan',
      url: 'https://zigscan.org',
      txPage: 'https://zigscan.org/tx/${txHash}',
      accountPage: 'https://zigscan.org/address/${accountAddress}'
    }],
  keywords: [
    'zigchain',
    'rwa',
    'wealth generation infrastructure',
    'wasm'
  ]
};
export default info;