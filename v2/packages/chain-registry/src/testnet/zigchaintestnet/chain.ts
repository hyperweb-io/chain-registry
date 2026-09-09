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
        denom: 'azig',
        fixedMinGasPrice: 2500000000,
        lowGasPrice: 2500000000,
        averageGasPrice: 25000000000,
        highGasPrice: 50000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'azig'
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
    recommendedVersion: '5.0.0-patch-1',
    compatibleVersions: ['5.0.0-patch-1'],
    consensus: {
      type: 'cometbft',
      version: '0.38.25'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.8'
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
      "linux/amd64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/binaries/v5.0.0-patch-1/zigchaind-v5.0.0-patch-1-linux-amd64.tar.gz?checksum=sha256:002c1edb1db0f32ac16bc3faaa96438b1720f9330b2fca438108f19cd49586ee',
      "darwin/amd64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/binaries/v5.0.0-patch-1/zigchaind-v5.0.0-patch-1-darwin-amd64.tar.gz?checksum=sha256:3b9dfc2cfd290fe2cf8e7a2f6ba6cff5f93f9a2f1fb1c2565ca27b17803e9b28',
      "darwin/arm64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/binaries/v5.0.0-patch-1/zigchaind-v5.0.0-patch-1-darwin-arm64.tar.gz?checksum=sha256:408972867f66ae17fcf6730c5e5c96432f2175a96a36d991b6e0f26d7fa567ef'
    },
    tag: 'v5.0.0-patch-1',
    language: {
      type: 'go',
      version: '1.25.13'
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
        baseDenom: 'azig'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
    }]
};
export default info;