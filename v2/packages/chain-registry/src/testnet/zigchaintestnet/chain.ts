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
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
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
    rest: [
      {
        address: 'https://testnet-api.zigchain.com',
        provider: 'ZIGCHAIN'
      },
      {
        address: 'https://public-zigchain-testnet-lcd.numia.xyz/',
        provider: 'Numia'
      },
      {
        address: 'https://zigchain-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-t.zigchain.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    rpc: [
      {
        address: 'https://testnet-rpc.zigchain.com',
        provider: 'ZIGCHAIN'
      },
      {
        address: 'https://public-zigchain-testnet-rpc.numia.xyz/',
        provider: 'Numia'
      },
      {
        address: 'https://zigchain-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-t.zigchain.nodestake.org:443',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'zigchain-grpc.327oz4i6b04df1e27394zieudsh.g.eu.link.numia.xyz:9090',
        provider: 'Numia'
      },
      {
        address: 'zigchain-testnet-grpc.polkachu.com:32890',
        provider: 'Polkachu'
      },
      {
        address: 'grpc-t.zigchain.nodestake.org:443',
        provider: 'NodeStake'
      }
    ]
  },
  codebase: {
    gitRepo: 'https://github.com/ZIGChain/zigchain',
    recommendedVersion: '4.1.0',
    compatibleVersions: ['4.1.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.21'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.5'
    },
    ibc: {
      type: 'go',
      version: '10.1.1'
    },
    cosmwasm: {
      version: '0.55.1',
      enabled: true
    },
    genesis: {
      genesisUrl: 'https://github.com/ZIGChain/networks/raw/main/zig-test-2/genesis.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/binaries/zigchaind-v4.1.0-linux-amd64.tar.gz?checksum=sha256:1a64152e48fb25c990bfcf52c0578171137470b78a79859e3c861714e099cd5e',
      "darwin/amd64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/binaries/zigchaind-v4.1.0-darwin-amd64.tar.gz?checksum=sha256:adb639e7e1496ec30de54f7dbcd8a8110548b95ca3b3b1d20ca65ec4ad2bfaa0',
      "darwin/arm64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/binaries/zigchaind-v4.1.0-darwin-arm64.tar.gz?checksum=sha256:a27cb748c8b4c90724378109e518fd730f8471d9e28fbea56bb963b3757fd6da'
    },
    tag: 'v4.1.0',
    language: {
      type: 'go',
      version: '1.25.9'
    }
  },
  explorers: [
    {
      kind: 'range',
      url: 'https://app.range.org/address/zigchain-testnet/zigchain',
      txPage: 'https://app.range.org/tx/zig-test-2/${txHash}',
      accountPage: 'https://app.range.org/address/zig-test-2/${accountAddress}'
    },
    {
      kind: 'zigscan',
      url: 'https://testnet.zigscan.org',
      txPage: 'https://testnet.zigscan.org/tx/${txHash}',
      accountPage: 'https://testnet.zigscan.org/address/${accountAddress}'
    },
    {
      kind: 'nodestake',
      url: 'https://explorer.nodestake.org/zigchain-testnet',
      txPage: 'https://explorer.nodestake.org/zigchain-testnet/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/zigchain-testnet/account/${accountAddress}'
    }
  ],
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
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
    }]
};
export default info;