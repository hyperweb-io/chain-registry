import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'zigchaintestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'ZIGChain Testnet',
  website: 'https://zigchain.com/',
  chainType: 'cosmos',
  chainId: 'zig-test-2',
  bech32Prefix: 'zig',
  daemonName: 'zigchaind',
  nodeHome: '$HOME/.zigchain',
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.svg'
  },
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
      time: '604800s'
    }
  },
  apis: {
    rest: [{
        address: 'https://testnet-api.zigchain.com',
        provider: 'ZIGCHAIN'
      }, {
        address: 'https://public-zigchain-testnet-lcd.numia.xyz/',
        provider: 'Numia'
      }],
    rpc: [{
        address: 'https://testnet-rpc.zigchain.com',
        provider: 'ZIGCHAIN'
      }, {
        address: 'https://public-zigchain-testnet-rpc.numia.xyz/',
        provider: 'Numia'
      }],
    grpc: [{
        address: 'zigchain-grpc.327oz4i6b04df1e27394zieudsh.g.eu.link.numia.xyz:9090',
        provider: 'Numia'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ZIGChain/zigchain',
    recommendedVersion: '1.2.2',
    compatibleVersions: ['1.2.2'],
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
      genesisUrl: 'https://github.com/ZIGChain/networks/raw/main/zig-test-2/genesis.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/zig-test-2/binaries/zigchaind-v1.2.2-linux-amd64.tar.gz',
      "darwin/amd64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/zig-test-2/binaries/zigchaind-v1.2.2-darwin-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/zig-test-2/binaries/zigchaind-v1.2.2-darwin-amd64.tar.gz'
    },
    tag: '1.2.2'
  },
  explorers: [{
      kind: 'range',
      url: 'https://app.range.org/address/zigchain-testnet/zigchain',
      txPage: 'https://app.range.org/tx/zig-test-2/${txHash}',
      accountPage: 'https://app.range.org/address/zig-test-2/${accountAddress}'
    }, {
      kind: 'zigscan',
      url: 'https://testnet.zigscan.org',
      txPage: 'https://testnet.zigscan.org/tx/${txHash}',
      accountPage: 'https://testnet.zigscan.org/address/${accountAddress}'
    }],
  keywords: [
    'wealth generation',
    'rwa',
    'staking',
    'wasm',
    'testnet'
  ],
  images: [{
      imageSync: {
        chainName: 'zigchaintestnet',
        baseDenom: 'uzig'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.svg'
    }]
};
export default info;