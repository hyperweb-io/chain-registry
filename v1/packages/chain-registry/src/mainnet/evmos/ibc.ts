import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      chain_id: 'acre_9052-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-97',
      connection_id: 'connection-55'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      chain_id: 'agoric-3',
      client_id: '07-tendermint-72',
      connection_id: 'connection-66'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-116',
      connection_id: 'connection-70'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-85',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-50',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-69',
      connection_id: 'connection-27'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'carbon',
      chain_id: 'carbon-1',
      client_id: '07-tendermint-11',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-73',
      connection_id: 'connection-29'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      chain_id: 'celestia',
      client_id: '07-tendermint-79',
      connection_id: 'connection-49'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-134',
      connection_id: 'connection-80'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-106',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      chain_id: 'centauri-1',
      client_id: '07-tendermint-26',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-111',
      connection_id: 'connection-66'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-82',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      chain_id: 'coreum-mainnet-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-117',
      connection_id: 'connection-71'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-87',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-620',
      connection_id: 'connection-480'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-292',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      chain_id: 'crescent-1',
      client_id: '07-tendermint-12',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-38',
      connection_id: 'connection-15'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      chain_id: 'crypto-org-chain-mainnet-1',
      client_id: '07-tendermint-1136',
      connection_id: 'connection-260'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-85',
      connection_id: 'connection-43'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-31',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      chain_id: 'dydx-mainnet-1',
      client_id: '07-tendermint-17',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-135',
      connection_id: 'connection-81'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-107',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dymension',
      chain_id: 'dymension_1100-1',
      client_id: '07-tendermint-31',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-138',
      connection_id: 'connection-85'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-109',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-119',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'gateway',
      chain_id: 'wormchain',
      client_id: '07-tendermint-10',
      connection_id: 'connection-6'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-94',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-17',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      chain_id: 'gravity-bridge-3',
      client_id: '07-tendermint-108',
      connection_id: 'connection-106'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-65',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-19',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-112',
      connection_id: 'connection-92'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-83',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-113',
      connection_id: 'connection-67'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-120',
      connection_id: 'connection-157'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-83',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-117',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-53',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-25',
      connection_id: 'connection-19'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-142',
      connection_id: 'connection-89'
    },
    chain_2: {
      chain_name: 'lava',
      chain_id: 'lava-mainnet-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-14'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-117',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-106',
      connection_id: 'connection-63'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-12',
      connection_id: 'connection-19'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-64',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1840',
      connection_id: 'connection-1440'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-204',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-50',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-42',
      connection_id: 'connection-24'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-41',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'stargaze',
      chain_id: 'stargaze-1',
      client_id: '07-tendermint-173',
      connection_id: 'connection-104'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-77',
      connection_id: 'connection-33'
    },
    chain_2: {
      chain_name: 'stride',
      chain_id: 'stride-1',
      client_id: '07-tendermint-8',
      connection_id: 'connection-7'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-88',
      connection_id: 'connection-46'
    },
    chain_2: {
      chain_name: 'tgrade',
      chain_id: 'tgrade-mainnet-1',
      client_id: '07-tendermint-8',
      connection_id: 'connection-11'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;