import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bitcanna',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.bitcanna.io/',
  pretty_name: 'BitCanna',
  chain_type: 'cosmos',
  chain_id: 'bitcanna-1',
  bech32_prefix: 'bcna',
  daemon_name: 'bcnad',
  node_home: '$HOME/.bcna',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ubcna',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.0025,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubcna'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/BitCannaGlobal/bcna',
    recommended_version: 'v4.0.3',
    compatible_versions: [
      'v4.0.0',
      'v4.0.1',
      'v4.0.2',
      'v4.0.3'
    ],
    binaries: {
      "linux/amd64": 'https://github.com/BitCannaGlobal/bcna/releases/download/v4.0.1/bcnad_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/BitCannaGlobal/bcna/releases/download/v4.0.1/bcnad_linux_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.2'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.bitcanna.io/',
        provider: 'bitcanna'
      },
      {
        address: 'https://rpc.bitcanna.sgtstake.com/',
        provider: 'SGTstake'
      },
      {
        address: 'https://bitcanna.rpc.m.anode.team/',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://bitcanna.rpc.m.stavr.tech/',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-bcna.kjinc.io/',
        provider: 'KJINC.io'
      },
      {
        address: 'https://mainnet-bitcanna-rpc.konsortech.xyz/',
        provider: 'KonsorTech'
      },
      {
        address: 'https://bitcanna.rpc.kjnodes.com/',
        provider: 'kjnodes'
      },
      {
        address: 'https://bitcanna-rpc.genznodes.dev/',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc.bitcanna-1.bitcanna.aviaone.com/',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://rpc.bitcanna-mainnet.hexnodes.one/',
        provider: 'Hexnodes'
      },
      {
        address: 'https://rpc.bitcanna.citizenweb3.com/',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://bitcanna-mainnet.rpc.l0vd.com/',
        provider: 'L0vd.com'
      },
      {
        address: 'https://bitcanna-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://bitcanna.nodejumper.io:443',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://rpc.bitcanna.indonode.net/',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc-bitcanna.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'https://bitcanna-rpc.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://bitcanna.rpc.nodex.one',
        provider: 'NodeX Emperor ⚡ Bitcanna'
      },
      {
        address: 'https://bcna.rpc.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://rpc.bitcanna.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://bitcanna-rpc.bluestake.net',
        provider: 'BlueStake'
      },
      {
        address: 'https://rpc-bitcanna.cryptech.com.ua',
        provider: 'CrypTech'
      },
      {
        address: 'https://bitcanna-rpc.kalia.network/',
        provider: 'Kalia Network'
      },
      {
        address: 'https://bitcanna_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc.bitcanna.io:443',
        provider: 'bitcanna'
      },
      {
        address: 'bitcanna.grpc.m.stavr.tech:9081',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc.bitcanna-mainnet.hexnodes.one:27090',
        provider: 'HexNodes'
      },
      {
        address: 'grpc.bitcanna-1.bitcanna.aviaone.com:9102',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'bitcanna-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com'
      },
      {
        address: 'bitcanna.grpc.kjnodes.com:14290',
        provider: 'kjnodes'
      },
      {
        address: 'bitcanna-grpc.polkachu.com:13090',
        provider: 'Polkachu'
      },
      {
        address: 'grpc-bitcanna.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'mainnet-bitcanna-grpc.konsortech.xyz:27090',
        provider: 'KonsorTech'
      },
      {
        address: 'bitcanna.grpc.m.anode.team:443',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'grpc-bcna.kjinc.io:443',
        provider: 'KJINC.io'
      },
      {
        address: 'bitcanna.grpc.nodex.one:443',
        provider: 'NodeX Emperor ⚡ Bitcanna'
      },
      {
        address: 'grpc.bitcanna.bh.rocks:42090',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'grpc.bitcanna.indonode.net:11090',
        provider: 'Indonode'
      },
      {
        address: 'bitcanna-grpc.validatornode.com:443',
        provider: 'ValidatorNode'
      },
      {
        address: 'grpc-bitcanna.cryptech.com.ua:443',
        provider: 'CrypTech'
      },
      {
        address: 'bitcanna-grpc.kalia.network:443',
        provider: 'Kalia Network'
      }
    ],
    rest: [
      {
        address: 'https://lcd.bitcanna.io',
        provider: 'bitcanna'
      },
      {
        address: 'https://api.bitcanna.sgtstake.com/',
        provider: 'SGTstake'
      },
      {
        address: 'https://bitcanna.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://bitcanna.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://api-bcna.kjinc.io/',
        provider: 'KJINC.io'
      },
      {
        address: 'https://mainnet-bitcanna-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://bitcanna.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://bitcanna-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://api.bitcanna-1.bitcanna.aviaone.com',
        provider: 'AVIAONE 🟢'
      },
      {
        address: 'https://lcd.bitcanna-mainnet.hexnodes.one',
        provider: 'Hexnodes'
      },
      {
        address: 'https://bitcanna-mainnet.api.l0vd.com',
        provider: 'L0vd.com'
      },
      {
        address: 'https://bitcanna-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://bitcanna.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://api-bitcanna.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'https://bitcanna-api.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://bitcanna.api.nodex.one',
        provider: 'NodeX Emperor ⚡ Bitcanna'
      },
      {
        address: 'https://bcna.api.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://api.bitcanna.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://api.bitcanna.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://bitcanna-api.bluestake.net',
        provider: 'BlueStake'
      },
      {
        address: 'https://api-bitcanna.cryptech.com.ua',
        provider: 'CrypTech'
      },
      {
        address: 'https://bitcanna-api.kalia.network',
        provider: 'Kalia Network'
      },
      {
        address: 'https://api.bitcanna.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://bitcanna_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/bitcanna',
      tx_page: 'https://explorer.chainroot.io/bitcanna/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/bitcanna/accounts/${accountAddress}'
    },
    {
      kind: 'EZStaking Tools',
      url: 'https://app.ezstaking.io/bitcanna',
      tx_page: 'https://ezstaking.tools/bitcanna/txs/${txHash}',
      account_page: 'https://ezstaking.tools/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/bitcanna',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=bitcanna&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=bitcanna&addr=${accountAddress}'
    },
    {
      kind: 'forbole',
      url: 'https://explorer.bitcanna.io',
      tx_page: 'https://explorer.bitcanna.io/transactions/${txHash}',
      account_page: 'https://explorer.bitcanna.io/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/bitcanna',
      tx_page: 'https://ping.pub/bitcanna/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitcanna/',
      tx_page: 'https://www.mintscan.io/bitcanna/txs/${txHash}',
      account_page: 'https://www.mintscan.io/bitcanna/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Bitcanna',
      tx_page: 'https://explorer.stavr.tech/Bitcanna/txs/${txHash}',
      account_page: 'https://explorer.stavr.tech/Bitcanna/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bitcanna',
      tx_page: 'https://atomscan.com/bitcanna/transactions/${txHash}'
    },
    {
      kind: 'ValidatorNode Explorer',
      url: 'https://explorer.validatornode.com/bitcanna',
      tx_page: 'https://explorer.validatornode.com/bitcanna/tx/${txHash}'
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM',
      url: 'https://main.anode.team/bitcanna',
      tx_page: 'https://main.anode.team/bitcanna/tx/${txHash}'
    },
    {
      kind: 'kjnodes',
      url: 'https://explorer.kjnodes.com/bitcanna',
      tx_page: 'https://explorer.kjnodes.com/bitcanna/tx/${txHash}'
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://explorers.l0vd.com/bitcanna-mainnet',
      tx_page: 'https://explorers.l0vd.com/bitcanna-mainnet/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodex.one/bitcanna',
      tx_page: 'https://explorer.nodex.one/bitcanna/tx/${txHash}'
    },
    {
      kind: 'Moonbys Dashboard',
      url: 'https://explorer.moonbys.com',
      tx_page: 'https://explorer.moonbys.com/${txHash}'
    },
    {
      kind: 'BlockHunters 🎯',
      url: 'https://scan.bh.rocks/bitcanna',
      tx_page: 'https://scan.bh.rocks/bitcanna/tx/${txHash}'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/bitcanna',
      tx_page: 'https://explorer.indonode.net/bitcanna/tx/${txHash}'
    },
    {
      kind: 'CrypTech Explorer',
      url: 'https://explorers.cryptech.com.ua/bitcanna',
      tx_page: 'https://explorers.cryptech.com.ua/bitcanna/txs/${txHash}'
    },
    {
      kind: 'Kalia Network',
      url: 'https://explorer.kalia.network/bitcanna',
      tx_page: 'https://explorer.kalia.network/bitcanna/tx/${txHash}',
      account_page: 'https://explorer.kalia.network/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'AviaOne Explorer 🟢',
      url: 'https://mainnet.explorer.aviaone.com/bitcanna',
      tx_page: 'https://mainnet.explorer.aviaone.com/bitcanna/tx/${txHash}',
      account_page: 'https://mainnet.explorer.aviaone.com/bitcanna/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/bitcanna',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/bitcanna/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'AviaOne Explorer 🟢',
      url: 'https://mainnet.explorer.aviaone.com/bitcanna',
      tx_page: 'https://mainnet.explorer.aviaone.com/bitcanna/tx/${txHash}',
      account_page: 'https://mainnet.explorer.aviaone.com/bitcanna/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://bitcanna.valopers.com/',
      tx_page: 'https://bitcanna.valopers.com/transactions/${txHash}',
      account_page: 'https://bitcanna.valopers.com/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
      theme: {
        primary_color_hex: '#3cc494'
      }
    }]
};
export default info;