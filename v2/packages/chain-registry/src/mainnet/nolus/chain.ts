import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nolus',
  status: 'live',
  website: 'https://nolus.io/',
  networkType: 'mainnet',
  prettyName: 'Nolus',
  chainType: 'cosmos',
  chainId: 'pirin-1',
  bech32Prefix: 'nolus',
  daemonName: 'nolusd',
  nodeHome: '$HOME/.nolus',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'unls',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.05
      },
      {
        denom: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.07,
        highGasPrice: 0.09
      },
      {
        denom: 'ibc/18161D8EFBD00FF5B7683EF8E923B8913453567FBE3FB6672D75712B0DEB6682',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.07,
        highGasPrice: 0.09
      },
      {
        denom: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
        fixedMinGasPrice: 0.0058,
        lowGasPrice: 0.0058,
        averageGasPrice: 0.0072,
        highGasPrice: 0.0088
      },
      {
        denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
        fixedMinGasPrice: 0.088,
        lowGasPrice: 0.088,
        averageGasPrice: 0.11,
        highGasPrice: 0.13
      },
      {
        denom: 'ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.12,
        highGasPrice: 0.14
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'unls'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/nolus-protocol/nolus-core',
    recommendedVersion: 'v0.6.3',
    compatibleVersions: ['v0.6.3'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/nolus-protocol/nolus-networks/main/mainnet/pirin-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/nolus-protocol/cosmos-sdk',
      version: 'v0.50.7',
      tag: 'v0.50.7-nolus-rc1'
    },
    ibc: {
      type: 'go',
      version: '8.2.1',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: 'v0.51.0',
      repo: 'https://github.com/neutron-org/wasmd',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
  },
  description: 'Elevate your game with up to 3x equity. Dive into a world of minimized risks and unlock the full potential of your assets.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.nolus.network',
        provider: 'NolusProtocol'
      },
      {
        address: 'https://nolus.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://nolus-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://nolus-rpc.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      }
    ],
    rest: [
      {
        address: 'https://lcd.nolus.network',
        provider: 'NolusProtocol'
      },
      {
        address: 'https://nolus.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://nolus-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://nolus-api.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.nolus.network',
        provider: 'NolusProtocol'
      },
      {
        address: 'https://nolus.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'nolus-grpc.polkachu.com:19790',
        provider: 'Polkachu'
      },
      {
        address: 'nolus-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      }
    ]
  },
  explorers: [
    {
      kind: 'Nodes Guru Explorer',
      url: 'https://nolus.explorers.guru',
      txPage: 'https://nolus.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/nolus',
      txPage: 'https://staking-explorer.com/transaction.php?chain=nolus&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=nolus&addr=${accountAddress}'
    },
    {
      kind: 'KJ Nodes Explorer',
      url: 'https://explorer.kjnodes.com/nolus',
      txPage: 'https://explorer.kjnodes.com/nolus/tx/${txHash}',
      accountPage: 'https://explorer.kjnodes.com/nolus/account/${accountAddress}'
    }
  ],
  keywords: ['mainnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/nolus',
      type: 'pruned',
      compression: 'lz4',
      checksumAvailable: false,
      provider: 'Polkachu'
    }]
};
export default info;