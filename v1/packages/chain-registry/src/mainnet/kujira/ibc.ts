import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      chain_id: 'acre_9052-1',
      client_id: '07-tendermint-8',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-61',
      connection_id: 'connection-41'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-47',
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
      client_id: '07-tendermint-20',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-94',
      connection_id: 'connection-64'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-61',
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
      chain_name: 'akash',
      chain_id: 'akashnet-2',
      client_id: '07-tendermint-126',
      connection_id: 'connection-103'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-103',
      connection_id: 'connection-72'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-64',
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
      chain_name: 'andromeda',
      chain_id: 'andromeda-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-164',
      connection_id: 'connection-127'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-123',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-12',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-144',
      connection_id: 'connection-110'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-99',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'assetmantle',
      chain_id: 'mantle-1',
      client_id: '07-tendermint-50',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-104',
      connection_id: 'connection-73'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-65',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-19',
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
      client_id: '07-tendermint-42',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-11',
      connection_id: 'connection-6'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-14',
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
      chain_name: 'carbon',
      chain_id: 'carbon-1',
      client_id: '07-tendermint-16',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-60',
      connection_id: 'connection-40'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9',
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
      chain_name: 'comdex',
      chain_id: 'comdex-1',
      client_id: '07-tendermint-52',
      connection_id: 'connection-34'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-20',
      connection_id: 'connection-15'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-31',
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
      chain_name: 'composable',
      chain_id: 'centauri-1',
      client_id: '07-tendermint-110',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-147',
      connection_id: 'connection-112'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-101',
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
      client_id: '07-tendermint-28',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-163',
      connection_id: 'connection-126'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-122',
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
      client_id: '07-tendermint-769',
      connection_id: 'connection-555'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-343',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
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
      client_id: '07-tendermint-78',
      connection_id: 'connection-68'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-105',
      connection_id: 'connection-75'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-42',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-67',
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
      chain_name: 'dydx',
      chain_id: 'dydx-mainnet-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-158',
      connection_id: 'connection-122'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-118',
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
      client_id: '07-tendermint-17',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-169',
      connection_id: 'connection-132'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-160',
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
      chain_name: 'furya',
      chain_id: 'furya-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-160',
      connection_id: 'connection-123'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-119',
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
      chain_name: 'gateway',
      chain_id: 'wormchain',
      client_id: '07-tendermint-13',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-153',
      connection_id: 'connection-117'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-113',
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
      chain_name: 'gravitybridge',
      chain_id: 'gravity-bridge-3',
      client_id: '07-tendermint-225',
      connection_id: 'connection-189'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-69',
      connection_id: 'connection-45'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-107',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-50',
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
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-144',
      connection_id: 'connection-116'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-77',
      connection_id: 'connection-53'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-98',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-54',
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
      chain_name: 'jackal',
      chain_id: 'jackal-1',
      client_id: '07-tendermint-57',
      connection_id: 'connection-47'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-139',
      connection_id: 'connection-105'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-94',
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
      chain_name: 'juno',
      chain_id: 'juno-1',
      client_id: '07-tendermint-198',
      connection_id: 'connection-140'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-87',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-119',
      connection_id: 'connection-156'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-140',
      connection_id: 'connection-106'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-116',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-95',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-78',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'mars',
      chain_id: 'mars-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-55',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-82',
      connection_id: 'connection-59'
    },
    chain_2: {
      chain_name: 'migaloo',
      chain_id: 'migaloo-1',
      client_id: '07-tendermint-16',
      connection_id: 'connection-19'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-58',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-112',
      connection_id: 'connection-82'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-75',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-95',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-62',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-156',
      connection_id: 'connection-120'
    },
    chain_2: {
      chain_name: 'nomic',
      chain_id: 'nomic-stakenet-3',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-116',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-166',
      connection_id: 'connection-129'
    },
    chain_2: {
      chain_name: 'odin',
      chain_id: 'odin-mainnet-freya',
      client_id: '07-tendermint-114',
      connection_id: 'connection-83'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-157',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-63',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-108',
      connection_id: 'connection-78'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      chain_id: 'omniflixhub-1',
      client_id: '07-tendermint-43',
      connection_id: 'connection-36'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-70',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-2017',
      connection_id: 'connection-1559'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-259',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-167',
      connection_id: 'connection-130'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-162',
      connection_id: 'connection-200'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-158',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-152',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-70',
      connection_id: 'connection-46'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-144',
      connection_id: 'connection-151'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-51',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-155',
      connection_id: 'connection-119'
    },
    chain_2: {
      chain_name: 'realio',
      chain_id: 'realionetwork_3301-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-115',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-106',
      connection_id: 'connection-76'
    },
    chain_2: {
      chain_name: 'regen',
      chain_id: 'regen-1',
      client_id: '07-tendermint-115',
      connection_id: 'connection-104'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-68',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-100',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-12',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-48',
      connection_id: 'connection-29'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain_1: {
          channel_id: 'channel-44',
          port_id: 'transfer',
          client_id: '07-tendermint-12',
          connection_id: 'connection-7'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
          client_id: '07-tendermint-48',
          connection_id: 'connection-29'
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-107',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'sommelier',
      chain_id: 'sommelier-3',
      client_id: '07-tendermint-12',
      connection_id: 'connection-8'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-69',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-96',
      connection_id: 'connection-68'
    },
    chain_2: {
      chain_name: 'stafihub',
      chain_id: 'stafihub-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'stargaze',
      chain_id: 'stargaze-1',
      client_id: '07-tendermint-178',
      connection_id: 'connection-111'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-49',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-37',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'stride',
      chain_id: 'stride-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-32',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-132',
      connection_id: 'connection-100'
    },
    chain_2: {
      chain_name: 'teritori',
      chain_id: 'teritori-1',
      client_id: '07-tendermint-61',
      connection_id: 'connection-38'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-89',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-30',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'terra2',
      chain_id: 'phoenix-1',
      client_id: '07-tendermint-11',
      connection_id: 'connection-13'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-28',
          port_id: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
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