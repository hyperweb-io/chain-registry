import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      chain_id: 'agoric-3',
      client_id: '07-tendermint-75',
      connection_id: 'connection-69'
    },
    chain_2: {
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-23',
      connection_id: 'connection-21'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-60',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
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
      chain_name: 'akash',
      chain_id: 'akashnet-2',
      client_id: '07-tendermint-166',
      connection_id: 'connection-146'
    },
    chain_2: {
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-26',
      connection_id: 'connection-28'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-109',
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
      chain_name: 'andromeda',
      chain_id: 'andromeda-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-58',
      connection_id: 'connection-68'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-97',
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
      client_id: '07-tendermint-16',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-160',
      connection_id: 'connection-145'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-111',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-114',
      connection_id: 'connection-107'
    },
    chain_2: {
      chain_name: 'beezee',
      chain_id: 'beezee-1',
      client_id: '07-tendermint-8',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-147',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-37',
      connection_id: 'connection-40'
    },
    chain_2: {
      chain_name: 'bitcanna',
      chain_id: 'bitcanna-1',
      client_id: '07-tendermint-83',
      connection_id: 'connection-74'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-35',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-92',
      connection_id: 'connection-90'
    },
    chain_2: {
      chain_name: 'bitsong',
      chain_id: 'bitsong-2b',
      client_id: '07-tendermint-80',
      connection_id: 'connection-55'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-124',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-29',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-75',
      connection_id: 'connection-79'
    },
    chain_2: {
      chain_name: 'composable',
      chain_id: 'centauri-1',
      client_id: '07-tendermint-143',
      connection_id: 'connection-63'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-108',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-50',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-1152',
      connection_id: 'connection-873'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-623',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-38',
      connection_id: 'connection-41'
    },
    chain_2: {
      chain_name: 'decentr',
      chain_id: 'mainnet-3',
      client_id: '07-tendermint-21',
      connection_id: 'connection-8'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-113',
      connection_id: 'connection-106'
    },
    chain_2: {
      chain_name: 'doravota',
      chain_id: 'vota-ash',
      client_id: '07-tendermint-22',
      connection_id: 'connection-28'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-146',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-91',
      connection_id: 'connection-89'
    },
    chain_2: {
      chain_name: 'dymension',
      chain_id: 'dymension_1100-1',
      client_id: '07-tendermint-39',
      connection_id: 'connection-30'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-123',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-40',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      chain_id: 'gravity-bridge-3',
      client_id: '07-tendermint-424',
      connection_id: 'connection-406'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-145',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-17',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'jackal',
      chain_id: 'jackal-1',
      client_id: '07-tendermint-61',
      connection_id: 'connection-50'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }],
    operators: [{
        chain_1: {
          address: 'archway16l5ls4ajah6hethh374tpgn42r5q4sqeuw8udj'
        },
        chain_2: {
          address: 'jkl134a4es94hjqqej732cymf0w3988zh3c4yuqtf8'
        },
        memo: 'by AM Solutions | https://www.theamsolutions.info',
        name: 'AM Solutions',
        discord_handle: 'AlexeyM#5409'
      }, {
        chain_1: {
          address: 'archway1nms20r7jzaa4ms9exv90ckl2xfn0rd3rmqh7zm'
        },
        chain_2: {
          address: 'jkl1nms20r7jzaa4ms9exv90ckl2xfn0rd3rh49t3n'
        },
        memo: 'Relayed by NodeStake',
        name: 'NodeStake',
        discord_handle: 'nodestake'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'juno',
      chain_id: 'juno-1',
      client_id: '07-tendermint-387',
      connection_id: 'connection-379'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-290',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-119',
      connection_id: 'connection-114'
    },
    chain_2: {
      chain_name: 'migaloo',
      chain_id: 'migaloo-1',
      client_id: '07-tendermint-138',
      connection_id: 'connection-108'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-184',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-141',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-22',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'nois',
      chain_id: 'nois-1',
      client_id: '07-tendermint-15',
      connection_id: 'connection-9'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-17',
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
      }, {
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'wasm.archway10f3aasgsnpv84ymjyld50jayc4ecu267sdpjamauwm8nvxlzex9qj4dkwr'
        },
        chain_2: {
          channel_id: 'channel-22',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-39',
      connection_id: 'connection-42'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      chain_id: 'omniflixhub-1',
      client_id: '07-tendermint-49',
      connection_id: 'connection-43'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-32',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-2850',
      connection_id: 'connection-2362'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1429',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      },
      {
        chain_1: {
          channel_id: '*',
          port_id: 'wasm.*'
        },
        chain_2: {
          channel_id: '*',
          port_id: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'ACTIVE'
        }
      },
      {
        chain_1: {
          channel_id: '*',
          port_id: 'wasm.*'
        },
        chain_2: {
          channel_id: '*',
          port_id: 'icqhost'
        },
        ordering: 'unordered',
        version: 'icq-1',
        tags: {
          status: 'ACTIVE'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-82',
      connection_id: 'connection-83'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-561',
      connection_id: 'connection-486'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-112',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-36',
      connection_id: 'connection-39'
    },
    chain_2: {
      chain_name: 'quicksilver',
      chain_id: 'quicksilver-2',
      client_id: '07-tendermint-83',
      connection_id: 'connection-58'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-116',
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
      client_id: '07-tendermint-55',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'qwoyn',
      chain_id: 'qwoyn-1',
      client_id: '07-tendermint-8',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-88',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-24',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-169',
      connection_id: 'connection-119'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-84',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-42',
      connection_id: 'connection-47'
    },
    chain_2: {
      chain_name: 'terra2',
      chain_id: 'phoenix-1',
      client_id: '07-tendermint-384',
      connection_id: 'connection-360'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-265',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'umee',
      chain_id: 'umee-1',
      client_id: '07-tendermint-228',
      connection_id: 'connection-190'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-97',
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
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-80',
      connection_id: 'connection-81'
    },
    chain_2: {
      chain_name: 'vidulum',
      chain_id: 'vidulum-1',
      client_id: '07-tendermint-49',
      connection_id: 'connection-46'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-110',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-24',
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