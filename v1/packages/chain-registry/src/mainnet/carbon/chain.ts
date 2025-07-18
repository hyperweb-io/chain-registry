import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'carbon',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Carbon',
  chain_type: 'cosmos',
  chain_id: 'carbon-1',
  bech32_prefix: 'swth',
  daemon_name: 'carbond',
  website: 'https://www.carbon.network/',
  node_home: '$HOME/.carbon',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'swth',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'usc',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0001,
        average_gas_price: 0.0001,
        high_gas_price: 0.0001,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'bnb.1.6.773edb',
        fixed_min_gas_price: 0,
        low_gas_price: 1000000,
        average_gas_price: 1000000,
        high_gas_price: 1000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'bneo.1.14.e2e5f6',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0015,
        average_gas_price: 0.0015,
        high_gas_price: 0.0015,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'busd.1.6.754a80',
        fixed_min_gas_price: 0,
        low_gas_price: 100000000,
        average_gas_price: 100000000,
        high_gas_price: 100000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'cglp.1.19.1698d3',
        fixed_min_gas_price: 0,
        low_gas_price: 100000000,
        average_gas_price: 100000000,
        high_gas_price: 100000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'cgt/1',
        fixed_min_gas_price: 0,
        low_gas_price: 100000000,
        average_gas_price: 100000000,
        high_gas_price: 100000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'eth.1.19.c3b805',
        fixed_min_gas_price: 0,
        low_gas_price: 100000,
        average_gas_price: 100000,
        high_gas_price: 100000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'eth.1.2.942d87',
        fixed_min_gas_price: 0,
        low_gas_price: 100000,
        average_gas_price: 100000,
        high_gas_price: 100000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0035,
        average_gas_price: 0.0035,
        high_gas_price: 0.0035,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0000075,
        average_gas_price: 0.0000075,
        high_gas_price: 0.0000075,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00005,
        average_gas_price: 0.00005,
        high_gas_price: 0.00005,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00032,
        average_gas_price: 0.00032,
        high_gas_price: 0.00032,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
        fixed_min_gas_price: 0,
        low_gas_price: 300000000,
        average_gas_price: 300000000,
        high_gas_price: 300000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0006,
        average_gas_price: 0.0006,
        high_gas_price: 0.0006,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00015,
        average_gas_price: 0.00015,
        high_gas_price: 0.00015,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0000075,
        average_gas_price: 0.0000075,
        high_gas_price: 0.0000075,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00015,
        average_gas_price: 0.00015,
        high_gas_price: 0.00015,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
        fixed_min_gas_price: 0,
        low_gas_price: 200000000,
        average_gas_price: 200000000,
        high_gas_price: 200000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00001,
        average_gas_price: 0.00001,
        high_gas_price: 0.00001,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00001,
        average_gas_price: 0.00001,
        high_gas_price: 0.00001,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00015,
        average_gas_price: 0.00015,
        high_gas_price: 0.00015,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'usdc.1.2.343151',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0001,
        average_gas_price: 0.0001,
        high_gas_price: 0.0001,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'usdc.1.6.53ff75',
        fixed_min_gas_price: 0,
        low_gas_price: 100000000,
        average_gas_price: 100000000,
        high_gas_price: 100000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      },
      {
        denom: 'zil.1.18.1a4a06',
        fixed_min_gas_price: 0,
        low_gas_price: 6000,
        average_gas_price: 6000,
        high_gas_price: 6000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000
        }
      }
    ]
  },
  staking: {
    staking_tokens: [{
        denom: 'swth'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Switcheo/carbon-bootstrap',
    recommended_version: 'v2.53.1',
    compatible_versions: ['v2.53.0', 'v2.53.1'],
    binaries: {
      "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.53.1/carbond-mainnet.linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.53.1/carbond-mainnet.linux-arm64.tar.gz'
    },
    genesis: {
      genesis_url: 'https://github.com/Switcheo/carbon-bootstrap/raw/master/carbon-1/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://tm-api.carbon.network',
        provider: 'switcheo-labs'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/carbon',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://carbon-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.carbon.blockhunters.org',
        provider: 'BlockHunters'
      }
    ],
    rest: [
      {
        address: 'https://api.carbon.network',
        provider: 'switcheo-labs'
      },
      {
        address: 'https://rest.lavenderfive.com:443/carbon',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://carbon-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest.carbon.blockhunters.org',
        provider: 'BlockHunters'
      }
    ],
    grpc: [{
        address: 'carbon.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'carbon-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/carbon',
      tx_page: 'https://explorer.chainroot.io/carbon/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/carbon/accounts/${accountAddress}'
    },
    {
      kind: 'carbonscan',
      url: 'https://scan.carbon.network',
      tx_page: 'https://scan.carbon.network/transaction/${txHash}?net=main'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/carbon',
      tx_page: 'https://ping.pub/carbon/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/carbon',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=carbon&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=carbon&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/carbon',
      tx_page: 'https://atomscan.com/carbon/transactions/${txHash}',
      account_page: 'https://atomscan.com/carbon/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
      theme: {
        primary_color_hex: '#a5edf2'
      }
    }]
};
export default info;