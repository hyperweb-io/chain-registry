import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      chain_id: 'agoric-3',
      client_id: '07-tendermint-77',
      connection_id: 'connection-72'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-32',
      connection_id: 'connection-38'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-62',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-28',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-17',
      connection_id: 'connection-26'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
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
      chain_name: 'aura',
      chain_id: 'aura_6322-2',
      client_id: '07-tendermint-43',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-66',
      connection_id: 'connection-63'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
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
      chain_name: 'babylon',
      chain_id: 'bbn-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-147',
      connection_id: 'connection-140'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-132',
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
      chain_name: 'beezee',
      chain_id: 'beezee-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-112',
      connection_id: 'connection-107'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3',
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
      chain_name: 'bitbadges',
      chain_id: 'bitbadges-1',
      client_id: '07-tendermint-10',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-172',
      connection_id: 'connection-165'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-158',
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
      chain_name: 'bitway',
      chain_id: 'bitway-1',
      client_id: '07-tendermint-30',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-183',
      connection_id: 'connection-178'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-172',
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
      client_id: '07-tendermint-32',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-71',
      connection_id: 'connection-72'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-19',
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
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-1116',
      connection_id: 'connection-790'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-12'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-536',
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
      chain_name: 'crescent',
      chain_id: 'crescent-1',
      client_id: '07-tendermint-68',
      connection_id: 'connection-63'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-38',
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
      chain_name: 'doravota',
      chain_id: 'vota-ash',
      client_id: '07-tendermint-23',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-111',
      connection_id: 'connection-106'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-14',
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
      chain_name: 'dungeon',
      chain_id: 'dungeon-1',
      client_id: '07-tendermint-22',
      connection_id: 'connection-8630'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-163',
      connection_id: 'connection-157'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5307',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-150',
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
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-59',
      connection_id: 'connection-57'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-33',
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
      client_id: '07-tendermint-14',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-79',
      connection_id: 'connection-80'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-62',
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
      chain_name: 'elys',
      chain_id: 'elys-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-133',
      connection_id: 'connection-130'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
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
      chain_name: 'furya',
      chain_id: 'furya-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-67',
      connection_id: 'connection-64'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-42',
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
      client_id: '07-tendermint-21',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-143',
      connection_id: 'connection-137'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'wasm.wormhole1wkwy0xh89ksdgj9hr347dyd2dw7zesmtrue6kfzyml4vdtz6e5ws2y050r'
        },
        chain_2: {
          channel_id: 'channel-128',
          port_id: 'wormhole'
        },
        ordering: 'unordered',
        version: 'ibc-wormhole-v1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'haqq',
      chain_id: 'haqq_11235-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-58',
      connection_id: 'connection-56'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-32',
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
      chain_name: 'impacthub',
      chain_id: 'ixo-5',
      client_id: '07-tendermint-59',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-20',
      connection_id: 'connection-29'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
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
      client_id: '07-tendermint-212',
      connection_id: 'connection-195'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-57',
      connection_id: 'connection-55'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-148',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-31',
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
      chain_name: 'int3face',
      chain_id: 'int3face-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-179',
      connection_id: 'connection-172'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-165',
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
      chain_name: 'joltify',
      chain_id: 'joltify_1729-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-102',
      connection_id: 'connection-94'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-81',
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
      client_id: '07-tendermint-334',
      connection_id: 'connection-322'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-8'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-224',
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
      chain_name: 'kopi',
      chain_id: 'luwak-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-140',
      connection_id: 'connection-135'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9',
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
      chain_name: 'lava',
      chain_id: 'lava-mainnet-1',
      client_id: '07-tendermint-11',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-120',
      connection_id: 'connection-115'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-105',
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
      chain_name: 'mantrachain',
      chain_id: 'mantra-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-117',
      connection_id: 'connection-111'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
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
      chain_name: 'migaloo',
      chain_id: 'migaloo-1',
      client_id: '07-tendermint-113',
      connection_id: 'connection-89'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-19',
      connection_id: 'connection-28'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-60',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
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
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-8',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-153',
      connection_id: 'connection-143'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-136',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-40',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-25',
      connection_id: 'connection-34'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-30',
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
      chain_name: 'nibiru',
      chain_id: 'cataclysm-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-86',
      connection_id: 'connection-86'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-67',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-68',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      chain_id: 'omniflixhub-1',
      client_id: '07-tendermint-51',
      connection_id: 'connection-49'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-44',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-98',
      connection_id: 'connection-91'
    },
    chain_2: {
      chain_name: 'onex',
      chain_id: 'onex-mainnet-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-14'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-78',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-60',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'oraichain',
      chain_id: 'Oraichain',
      client_id: '07-tendermint-106',
      connection_id: 'connection-83'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-147',
          port_id: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm'
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-2704',
      connection_id: 'connection-2241'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-750',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-188',
      connection_id: 'connection-181'
    },
    chain_2: {
      chain_name: 'paxi',
      chain_id: 'paxi-mainnet',
      client_id: '07-tendermint-8',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-205',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-61',
      connection_id: 'connection-59'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-160',
      connection_id: 'connection-198'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-132',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-103',
      connection_id: 'connection-95'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-567',
      connection_id: 'connection-490'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-82',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-30',
      connection_id: 'connection-37'
    },
    chain_2: {
      chain_name: 'provenance',
      chain_id: 'pio-mainnet-1',
      client_id: '07-tendermint-36',
      connection_id: 'connection-13'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-20',
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
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-100',
      connection_id: 'connection-92'
    },
    chain_2: {
      chain_name: 'pryzm',
      chain_id: 'pryzm-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-79',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-104',
      connection_id: 'connection-96'
    },
    chain_2: {
      chain_name: 'regen',
      chain_id: 'regen-1',
      client_id: '07-tendermint-177',
      connection_id: 'connection-149'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-83',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-165',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-136',
      connection_id: 'connection-132'
    },
    chain_2: {
      chain_name: 'routerchain',
      chain_id: 'router_9600-1',
      client_id: '07-tendermint-16',
      connection_id: 'connection-17'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-119',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-181',
      connection_id: 'connection-175'
    },
    chain_2: {
      chain_name: 'saga',
      chain_id: 'ssc-1',
      client_id: '07-tendermint-28',
      connection_id: 'connection-23'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-169',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-37',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-24',
      connection_id: 'connection-33'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-170',
      connection_id: 'connection-127'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-17',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-64',
      connection_id: 'connection-61'
    },
    chain_2: {
      chain_name: 'sei',
      chain_id: 'pacific-1',
      client_id: '07-tendermint-45',
      connection_id: 'connection-77'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-45',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-106',
      connection_id: 'connection-99'
    },
    chain_2: {
      chain_name: 'shido',
      chain_id: 'shido_9008-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-11'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-87',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-141',
      connection_id: 'connection-136'
    },
    chain_2: {
      chain_name: 'sidechain',
      chain_id: 'sidechain-1',
      client_id: '07-tendermint-7',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-123',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-16',
      connection_id: 'connection-25'
    },
    chain_2: {
      chain_name: 'stargaze',
      chain_id: 'stargaze-1',
      client_id: '07-tendermint-287',
      connection_id: 'connection-214'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-180',
      connection_id: 'connection-174'
    },
    chain_2: {
      chain_name: 'sunrise',
      chain_id: 'sunrise-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-168',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-76',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'teritori',
      chain_id: 'teritori-1',
      client_id: '07-tendermint-97',
      connection_id: 'connection-97'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-54',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-62',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-162',
      connection_id: 'connection-156'
    },
    chain_2: {
      chain_name: 'terra',
      chain_id: 'columbus-5',
      client_id: '07-tendermint-274',
      connection_id: 'connection-164'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-149',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-56',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'terra2',
      chain_id: 'phoenix-1',
      client_id: '07-tendermint-367',
      connection_id: 'connection-302'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-30',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-253',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-114',
      connection_id: 'connection-109'
    },
    chain_2: {
      chain_name: 'titan',
      chain_id: 'titan_18888-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-99',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-73',
      connection_id: 'connection-74'
    },
    chain_2: {
      chain_name: 'umee',
      chain_id: 'umee-1',
      client_id: '07-tendermint-248',
      connection_id: 'connection-210'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-120',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-128',
      connection_id: 'connection-124'
    },
    chain_2: {
      chain_name: 'xion',
      chain_id: 'xion-mainnet-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-113',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-164',
      connection_id: 'connection-159'
    },
    chain_2: {
      chain_name: 'xrplevm',
      chain_id: 'xrplevm_1440000-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-152',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-184',
      connection_id: 'connection-179'
    },
    chain_2: {
      chain_name: 'zigchain',
      chain_id: 'zigchain-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-175',
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
  }
];
export default info;