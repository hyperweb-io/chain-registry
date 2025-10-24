import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      chain_id: 'agoric-3',
      client_id: '07-tendermint-93',
      connection_id: 'connection-91'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-167',
      connection_id: 'connection-210'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-72',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-202',
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
      client_id: '07-tendermint-188',
      connection_id: 'connection-174'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-169',
      connection_id: 'connection-214'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-127',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-213',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chihuahua',
      chain_id: 'chihuahua-1',
      client_id: '07-tendermint-207',
      connection_id: 'connection-137'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-168',
      connection_id: 'connection-212'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-94',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-203',
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
      client_id: '07-tendermint-123',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-94',
      connection_id: 'connection-75'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-71',
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
      client_id: '07-tendermint-391',
      connection_id: 'connection-344'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-36',
      connection_id: 'connection-30'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-190',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      chain_id: 'crescent-1',
      client_id: '07-tendermint-42',
      connection_id: 'connection-41'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-88',
      connection_id: 'connection-72'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-30',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-68',
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
      client_id: '07-tendermint-61',
      connection_id: 'connection-34'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-24',
      connection_id: 'connection-17'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
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
      client_id: '07-tendermint-4',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-159',
      connection_id: 'connection-197'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-131',
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
      client_id: '07-tendermint-39',
      connection_id: 'connection-50'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-51',
      connection_id: 'connection-49'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-110',
      connection_id: 'connection-91'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-57',
      connection_id: 'connection-53'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-82',
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
      chain_name: 'irisnet',
      chain_id: 'irishub-1',
      client_id: '07-tendermint-34',
      connection_id: 'connection-25'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-31',
      connection_id: 'connection-25'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      chain_id: 'juno-1',
      client_id: '07-tendermint-89',
      connection_id: 'connection-51'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-49',
      connection_id: 'connection-48'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-33',
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
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-73',
      connection_id: 'connection-52'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-161',
      connection_id: 'connection-199'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-136',
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
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
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
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-96',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'quicksilver',
      chain_id: 'quicksilver-2',
      client_id: '07-tendermint-15',
      connection_id: 'connection-8'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-73',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-33',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'regen',
      chain_id: 'regen-1',
      client_id: '07-tendermint-30',
      connection_id: 'connection-28'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-106',
      connection_id: 'connection-146'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-126',
      connection_id: 'connection-98'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-82',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-64',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }, {
        chain_1: {
          channel_id: 'channel-159',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-132',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-34',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-61',
      connection_id: 'connection-36'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-38',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-8'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-166',
      connection_id: 'connection-207'
    },
    chain_2: {
      chain_name: 'stargaze',
      chain_id: 'stargaze-1',
      client_id: '07-tendermint-358',
      connection_id: 'connection-293'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-197',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-287',
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
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-39',
      connection_id: 'connection-39'
    },
    chain_2: {
      chain_name: 'starname',
      chain_id: 'iov-mainnet-ibc',
      client_id: '07-tendermint-44',
      connection_id: 'connection-30'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-83',
      connection_id: 'connection-71'
    },
    chain_2: {
      chain_name: 'stride',
      chain_id: 'stride-1',
      client_id: '07-tendermint-54',
      connection_id: 'connection-33'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-67',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-53',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-105',
      connection_id: 'connection-144'
    },
    chain_2: {
      chain_name: 'umee',
      chain_id: 'umee-1',
      client_id: '07-tendermint-179',
      connection_id: 'connection-119'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-81',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
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