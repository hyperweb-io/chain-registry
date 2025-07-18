import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'atomone',
  chainType: 'cosmos',
  chainId: 'atomone-1',
  website: 'https://atom.one',
  prettyName: 'AtomOne',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'atone',
  daemonName: 'atomoned',
  nodeHome: '$HOME/.atomone',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uphoton',
        fixedMinGasPrice: 0.225,
        lowGasPrice: 0.225,
        averageGasPrice: 0.3,
        highGasPrice: 0.5
      }, {
        denom: 'uatone',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.04,
        highGasPrice: 0.08
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uatone'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/atomone-hub/atomone',
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v2.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v2.0.0/atomoned-v2.0.0-linux-amd64',
      "linux/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v2.0.0/atomoned-v2.0.0-linux-arm64',
      "darwin/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v2.0.0/atomoned-v2.0.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v2.0.0/atomoned-v2.0.0-darwin-arm64',
      "windows/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v2.0.0/atomoned-v2.0.0-windows-amd64.exe',
      "windows/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v2.0.0/atomoned-v2.0.0-windows-arm64.exe'
    },
    genesis: {
      genesisUrl: 'https://atomone.fra1.digitaloceanspaces.com/atomone-1/genesis.json'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.15'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.17'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
  },
  description: 'The Cosmos community, at a crossroads, confronts divergent views on key aspects such as mission, tokenomics, and security philosophy. AtomOne emerges as a beacon, offering an alternative fork to navigate these waters, equipped to handle contingencies and embodying a bastion for diverse political thought.',
  apis: {
    rpc: [
      {
        address: 'https://atomone-rpc.allinbits.com:443',
        provider: 'AllInBits'
      },
      {
        address: 'https://atomone-rpc.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://atomone.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://rpc-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://rpc-atomone-1.cros-nest.com:443',
        provider: 'crosnest'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/atomone/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://atomone-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://atomone_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://atomone-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://atomone-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.atomone-1.atomone.aviaone.com:443',
        provider: 'AVIAONE.com 🟢'
      },
      {
        address: 'https://atomone.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.atomone.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://atomone-mainnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://rpc-atone.vinjan.xyz',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://rpc-atomone.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://m-atomone.rpc.utsa.tech/',
        provider: 'UTSA'
      },
      {
        address: 'https://rpc.atomone.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://rpc.atomone.chaintools.tech',
        provider: 'ChainTools'
      },
      {
        address: 'https://atomone-mainnet-rpc.bonynode.online',
        provider: 'BonyNode💚'
      },
      {
        address: 'https://atomone-mainnet-rpc.shazoes.xyz',
        provider: 'Shazoes'
      }
    ],
    rest: [
      {
        address: 'https://atomone-api.allinbits.com',
        provider: 'AllInBits'
      },
      {
        address: 'https://atomone-api.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://atomone.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://api-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://rest-atomone-1.cros-nest.com:443',
        provider: 'crosnest'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/atomone/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://atomone-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://atomone_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://atomone-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://atomone-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.atomone-1.atomone.aviaone.com',
        provider: 'AVIAONE.com 🟢'
      },
      {
        address: 'https://atomone.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.atomone.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://atomone-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://api-atone.vinjan.xyz',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://rest-atomone.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://m-atomone.api.utsa.tech/',
        provider: 'UTSA'
      },
      {
        address: 'https://api.atomone.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://api.atomone.chaintools.tech',
        provider: 'ChainTools'
      },
      {
        address: 'https://atomone-mainnet-api.bonynode.online',
        provider: 'BonyNode💚'
      },
      {
        address: 'https://atomone-mainnet-api.shazoes.xyz',
        provider: 'Shazoes'
      }
    ],
    grpc: [
      {
        address: 'atomone-grpc.allinbits.com:9090',
        provider: 'AllInBits'
      },
      {
        address: 'atomone-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'atomone.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://grpc-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'atomone-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'atomone-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'http://grpc.atomone-1.atomone.aviaone.com:9102',
        provider: 'AVIAONE.com 🟢'
      },
      {
        address: 'atomone.grpc.m.stavr.tech:7201',
        provider: '🔥STAVR🔥'
      },
      {
        address: ' grpc.atomone.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'atomone-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'grpc.atomone.roomit.xyz:8443',
        provider: 'Roomit'
      },
      {
        address: 'grpc.atomone.chaintools.tech:443',
        provider: 'ChainTools'
      },
      {
        address: 'https://atomone-mainnet-grpc.bonynode.online:443',
        provider: 'BonyNode💚'
      },
      {
        address: 'atomone-mainnet-grpc.shazoes.xyz:12090',
        provider: 'Shazoes'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.allinbits.com/atomone',
      txPage: 'https://explorer.allinbits.com/atomone/tx/${txHash}',
      accountPage: 'https://explorer.allinbits.com/atomone/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/atomone/',
      txPage: 'https://explorer.nodeshub.online/atomone/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/atomone/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/atomone',
      txPage: 'https://explorer.ist/atomone/tx/${txHash}',
      accountPage: 'https://explorer.ist/atomone/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Atomone-Mainnet',
      txPage: 'https://explorer.stavr.tech/Atomone-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Atomone-Mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/atomone',
      txPage: 'https://explorer.whenmoonwhenlambo.money/atomone/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/atomone/account/${accountAddress}'
    },
    {
      kind: 'AVIAONE.com 🟢',
      url: 'https://mainnet.explorer.aviaone.com/atomone',
      txPage: 'https://mainnet.explorer.aviaone.com/atomone/tx/${txHash}',
      accountPage: 'https://mainnet.explorer.aviaone.com/atomone/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://mainnet.itrocket.net/atomone',
      txPage: 'https://mainnet.itrocket.net/atomone/tx/${txHash}',
      accountPage: 'https://mainnet.itrocket.net/atomone/account/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/atomone-mainnet',
      txPage: 'https://explorer.tendermint.roomit.xyz/atomone-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.tendermint.roomit.xyz/atomone-mainnet/account/${accountAddress}'
    },
    {
      kind: 'ChainTools',
      url: 'https://explorer.chaintools.tech/atomone',
      txPage: 'https://explorer.chaintools.tech/atomone/tx/${txHash}',
      accountPage: 'https://explorer.chaintools.tech/atomone/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://atomone.valopers.com/',
      txPage: 'https://atomone.valopers.com/transactions/${txHash}',
      accountPage: 'https://atomone.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'BonyNode💚',
      url: 'https://explorer.bonynode.online/atomone',
      txPage: 'https://explorer.bonynode.online/atomone/transactions/${txHash}',
      accountPage: 'https://explorer.bonynode.online/atomone/account/${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/atomone',
      txPage: 'https://explorer.chainroot.io/atomone/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/atomone/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
    }]
};
export default info;