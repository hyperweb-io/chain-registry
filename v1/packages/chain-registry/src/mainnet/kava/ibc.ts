import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      chain_id: 'agoric-3',
      client_id: '07-tendermint-78',
      connection_id: 'connection-73'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-147',
      connection_id: 'connection-182'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-133',
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
      chain_name: 'aura',
      chain_id: 'aura_6322-2',
      client_id: '07-tendermint-26',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-133',
      connection_id: 'connection-168'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-124',
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
      client_id: '07-tendermint-49',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-158',
      connection_id: 'connection-198'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-140',
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
      client_id: '07-tendermint-29',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-160',
      connection_id: 'connection-200'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-142',
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
      client_id: '07-tendermint-557',
      connection_id: 'connection-460'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-277',
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
      chain_name: 'cronos',
      chain_id: 'cronosmainnet_25-1',
      client_id: '07-tendermint-33',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-134',
      connection_id: 'connection-169'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-125',
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
      client_id: '07-tendermint-7',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-154',
      connection_id: 'connection-195'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-137',
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
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-162',
      connection_id: 'connection-203'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-144',
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
      chain_name: 'haqq',
      chain_id: 'haqq_11235-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-149',
      connection_id: 'connection-193'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-135',
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
      client_id: '07-tendermint-205',
      connection_id: 'connection-189'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-130',
      connection_id: 'connection-166'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-143',
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
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-125',
      connection_id: 'connection-162'
    },
    chain_2: {
      chain_name: 'migaloo',
      chain_id: 'migaloo-1',
      client_id: '07-tendermint-90',
      connection_id: 'connection-73'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-120',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-48',
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
      client_id: '07-tendermint-151',
      connection_id: 'connection-194'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-54',
      connection_id: 'connection-37'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-136',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-36',
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
      client_id: '07-tendermint-172',
      connection_id: 'connection-214'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-107',
      connection_id: 'connection-102'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-151',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-88',
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
      client_id: '07-tendermint-163',
      connection_id: 'connection-204'
    },
    chain_2: {
      chain_name: 'onex',
      chain_id: 'onex-mainnet-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-13'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-145',
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
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1735',
      connection_id: 'connection-1328'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-143',
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
      client_id: '07-tendermint-148',
      connection_id: 'connection-189'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-156',
      connection_id: 'connection-195'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-134',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-129',
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
      client_id: '07-tendermint-146',
      connection_id: 'connection-181'
    },
    chain_2: {
      chain_name: 'sei',
      chain_id: 'pacific-1',
      client_id: '07-tendermint-38',
      connection_id: 'connection-33'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-132',
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
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-156',
      connection_id: 'connection-196'
    },
    chain_2: {
      chain_name: 'terra2',
      chain_id: 'phoenix-1',
      client_id: '07-tendermint-386',
      connection_id: 'connection-362'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-138',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-272',
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
      client_id: '07-tendermint-124',
      connection_id: 'connection-160'
    },
    chain_2: {
      chain_name: 'umee',
      chain_id: 'umee-1',
      client_id: '07-tendermint-229',
      connection_id: 'connection-191'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-119',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-98',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;