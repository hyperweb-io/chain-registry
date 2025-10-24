import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      chain_id: 'agoric-3',
      client_id: '07-tendermint-101',
      connection_id: 'connection-99'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-148',
      connection_id: 'connection-108'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-146',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5789',
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
      client_id: '07-tendermint-51',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-62',
      connection_id: 'connection-43'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-61',
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
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-123',
      connection_id: 'connection-110'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-78',
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
      chain_name: 'babylon',
      chain_id: 'bbn-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-164',
      connection_id: 'connection-123'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6980',
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
      chain_name: 'bitsong',
      chain_id: 'bitsong-2b',
      client_id: '07-tendermint-83',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-182',
      connection_id: 'connection-136'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7232',
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
      client_id: '07-tendermint-29',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-48',
      connection_id: 'connection-36'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-35',
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
      chain_name: 'chihuahua',
      chain_id: 'chihuahua-1',
      client_id: '07-tendermint-191',
      connection_id: 'connection-127'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-74',
      connection_id: 'connection-53'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-76',
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
      }, {
        chain_1: {
          channel_id: 'channel-77',
          port_id: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52'
        },
        chain_2: {
          channel_id: 'channel-52',
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
      client_id: '07-tendermint-66',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-29',
      connection_id: 'connection-22'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
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
      client_id: '07-tendermint-1119',
      connection_id: 'connection-809'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-569',
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
      chain_name: 'dungeon1',
      chain_id: 'dungeon-1',
      client_id: '07-tendermint-8',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-146',
      connection_id: 'connection-106'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5481',
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
      client_id: '07-tendermint-11',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-72',
      connection_id: 'connection-51'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
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
      chain_name: 'dymension',
      chain_id: 'dymension_1100-1',
      client_id: '07-tendermint-16',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-82',
      connection_id: 'connection-61'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-675',
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
      client_id: '07-tendermint-36',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-152',
      connection_id: 'connection-112'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6476',
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
      chain_name: 'initia',
      chain_id: 'interwoven-1',
      client_id: '07-tendermint-20',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-161',
      connection_id: 'connection-118'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6885',
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
      client_id: '07-tendermint-233',
      connection_id: 'connection-220'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-78',
      connection_id: 'connection-58'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-177',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-60',
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
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-151',
      connection_id: 'connection-111'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6455',
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
      client_id: '07-tendermint-557',
      connection_id: 'connection-524'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-97',
      connection_id: 'connection-71'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-548',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4328',
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
      chain_name: 'mantrachain',
      chain_id: 'mantra-1',
      client_id: '07-tendermint-7',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-162',
      connection_id: 'connection-119'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6964',
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
      chain_name: 'mars',
      chain_id: 'mars-1',
      client_id: '07-tendermint-64',
      connection_id: 'connection-50'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-21',
      connection_id: 'connection-21'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
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
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-11',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-168',
      connection_id: 'connection-128'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7024',
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
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-83',
      connection_id: 'connection-62'
    },
    chain_2: {
      chain_name: 'nois',
      chain_id: 'nois-1',
      client_id: '07-tendermint-20',
      connection_id: 'connection-13'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-722',
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
      }, {
        chain_1: {
          channel_id: 'channel-1559',
          port_id: 'wasm.neutron14cwv7d4lwc69zrjrzywwh8c9327m8dpngpq52f5kgqephhgrjc2s9ry3eu'
        },
        chain_2: {
          channel_id: 'channel-48',
          port_id: 'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        ordering: 'unordered',
        version: 'nois-v7',
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
      client_id: '07-tendermint-71',
      connection_id: 'connection-50'
    },
    chain_2: {
      chain_name: 'nolus',
      chain_id: 'pirin-1',
      client_id: '07-tendermint-13',
      connection_id: 'connection-11'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-44',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3839',
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
      client_id: '07-tendermint-154',
      connection_id: 'connection-114'
    },
    chain_2: {
      chain_name: 'nomic',
      chain_id: 'nomic-stakenet-3',
      client_id: '07-tendermint-11',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6478',
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
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-19',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-2823',
      connection_id: 'connection-2338'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-874',
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
          channel_id: 'channel-2107',
          port_id: 'wasm.neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07'
        },
        chain_2: {
          channel_id: 'channel-39589',
          port_id: 'wasm.osmo1pfeve3esg5rhhkfhlujxtthc25akcf3zpa3t9whghvvp2v5v92ps0z30r6'
        },
        ordering: 'unordered',
        version: 'astroport-ibc-v1',
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
      client_id: '07-tendermint-137',
      connection_id: 'connection-98'
    },
    chain_2: {
      chain_name: 'penumbra',
      chain_id: 'penumbra-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-7'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4886',
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
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-98',
      connection_id: 'connection-72'
    },
    chain_2: {
      chain_name: 'pryzm',
      chain_id: 'pryzm-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4329',
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
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-90',
      connection_id: 'connection-66'
    },
    chain_2: {
      chain_name: 'saga',
      chain_id: 'ssc-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2060',
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
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-85',
      connection_id: 'connection-63'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-199',
      connection_id: 'connection-192'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1551',
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
      }, {
        chain_1: {
          channel_id: 'channel-1950',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-151',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
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
      client_id: '07-tendermint-89',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'sei',
      chain_id: 'pacific-1',
      client_id: '07-tendermint-123',
      connection_id: 'connection-157'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2016',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-66',
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
          channel_id: 'channel-2110',
          port_id: 'wasm.neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07'
        },
        chain_2: {
          channel_id: 'channel-71',
          port_id: 'wasm.sei12fykm2xhg5ces2vmf4q2aem8c958exv3v0wmvrspa8zucrdwjeds2e2ntx'
        },
        ordering: 'unordered',
        version: 'astroport-ibc-v1',
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
      client_id: '07-tendermint-160',
      connection_id: 'connection-117'
    },
    chain_2: {
      chain_name: 'sidechain',
      chain_id: 'sidechain-1',
      client_id: '07-tendermint-23',
      connection_id: 'connection-9'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6852',
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
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-31',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'stargaze',
      chain_id: 'stargaze-1',
      client_id: '07-tendermint-283',
      connection_id: 'connection-211'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-191',
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
      client_id: '07-tendermint-18',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'stride',
      chain_id: 'stride-1',
      client_id: '07-tendermint-125',
      connection_id: 'connection-113'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8',
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
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-12',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'terra2',
      chain_id: 'phoenix-1',
      client_id: '07-tendermint-274',
      connection_id: 'connection-192'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-229',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-167',
          port_id: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-2112',
          port_id: 'wasm.neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07'
        },
        chain_2: {
          channel_id: 'channel-396',
          port_id: 'wasm.terra1k9j8rcyk87v5jvfla2m9wp200azegjz0eshl7n2pwv852a7ssceqsnn7pq'
        },
        ordering: 'unordered',
        version: 'astroport-ibc-v1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-5389',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-554',
          port_id: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }
    ]
  }
];
export default info;