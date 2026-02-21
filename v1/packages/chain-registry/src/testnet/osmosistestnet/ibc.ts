import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4596',
      connection_id: 'connection-3957'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10293',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akashtestnet1',
      chain_id: 'sandbox-01',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1271',
      connection_id: 'connection-1171'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4171',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archwaytestnet',
      chain_id: 'constantine-3',
      client_id: '07-tendermint-121',
      connection_id: 'connection-120'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-3459',
      connection_id: 'connection-3027'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-225',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7779',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-685',
      connection_id: 'connection-538'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1270',
      connection_id: 'connection-1169'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-339',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4170',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'babylontestnet',
      chain_id: 'bbn-test-5',
      client_id: '07-tendermint-31',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4636',
      connection_id: 'connection-3994'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10366',
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
          channel_id: 'channel-22',
          port_id: 'wasm.bbn17tu5q57xdf3u4m0u8j4mnjlcwe9kt4n87fmc4cdnrkf9zungn7wsjfhts0'
        },
        chain_2: {
          channel_id: 'channel-10367',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestiatestnet3',
      chain_id: 'mocha-4',
      client_id: '07-tendermint-118',
      connection_id: 'connection-98'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1445',
      connection_id: 'connection-1350'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4370',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chain4energytestnet',
      chain_id: 'babajaga-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-3393',
      connection_id: 'connection-2989'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7735',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composabletestnet',
      chain_id: 'banksy-testnet-3',
      client_id: '07-tendermint-23',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-273',
      connection_id: 'connection-237'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-329',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreumtestnet',
      chain_id: 'coreum-testnet-1',
      client_id: '07-tendermint-104',
      connection_id: 'connection-69'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-3529',
      connection_id: 'connection-3094'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-47',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7894',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-2528',
      connection_id: 'connection-2886'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1262',
      connection_id: 'connection-1157'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3306',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4156',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'divinetestnet',
      chain_id: 'divine-testnet-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-5042',
      connection_id: 'connection-4395'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11380',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'doravotatestnet',
      chain_id: 'vota-testnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-2',
      connection_id: 'connection-611'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1260',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'empowertestnet',
      chain_id: 'circulus-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-146',
      connection_id: 'connection-157'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-155',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'entrypointtestnet',
      chain_id: 'entrypoint-pubtest-2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-930',
      connection_id: 'connection-840'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1543',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'hippoprotocoltestnet',
      chain_id: 'hippo-protocol-testnet-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4754',
      connection_id: 'connection-4185'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10743',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'impacthubtestnet',
      chain_id: 'pandora-8',
      client_id: '07-tendermint-53',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1010',
      connection_id: 'connection-911'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1637',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      chain_id: 'injective-888',
      client_id: '07-tendermint-305',
      connection_id: 'connection-272'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4379',
      connection_id: 'connection-3814'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-77026',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10092',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'int3facetestnet',
      chain_id: 'int3-test-2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4231',
      connection_id: 'connection-3694'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9755',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet6',
      chain_id: 'uni-6',
      client_id: '07-tendermint-743',
      connection_id: 'connection-827'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1932',
      connection_id: 'connection-1889'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-889',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5498',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kimanetworktestnet',
      chain_id: 'kima_testnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4135',
      connection_id: 'connection-3592'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9247',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kyvetestnet',
      chain_id: 'kaon-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-11',
      connection_id: 'connection-11'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'lavatestnet',
      chain_id: 'lava-testnet-2',
      client_id: '07-tendermint-11',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-2554',
      connection_id: 'connection-2401'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6092',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'likecointestnet',
      chain_id: 'likecoin-public-testnet-5',
      client_id: '07-tendermint-5',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1431',
      connection_id: 'connection-1336'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4357',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'lumeratestnet',
      chain_id: 'lumera-testnet-2',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4899',
      connection_id: 'connection-4268'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10884',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'manifesttestnet',
      chain_id: 'manifest-ledger-testnet',
      client_id: '07-tendermint-8',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4456',
      connection_id: 'connection-3898'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer',
          client_id: '07-tendermint-8',
          connection_id: 'connection-9'
        },
        chain_2: {
          channel_id: 'channel-10183',
          port_id: 'transfer',
          client_id: '07-tendermint-4456',
          connection_id: 'connection-3898'
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'mantrachaintestnet',
      chain_id: 'mantra-hongbai-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-3930',
      connection_id: 'connection-3411'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8734',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'mantrachaintestnet2',
      chain_id: 'mantra-dukong-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4086',
      connection_id: 'connection-3531'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9126',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'marstestnet',
      chain_id: 'ares-1',
      client_id: '07-tendermint-33',
      connection_id: 'connection-30'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1933',
      connection_id: 'connection-1890'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-28',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5499',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutrontestnet',
      chain_id: 'pion-1',
      client_id: '07-tendermint-133',
      connection_id: 'connection-123'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1272',
      connection_id: 'connection-1172'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-196',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4172',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-42',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1374',
      connection_id: 'connection-1275'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4280',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nolustestnet',
      chain_id: 'rila-3',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-3711',
      connection_id: 'connection-3235'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8272',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nolustestnet1',
      chain_id: 'rila-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-102',
      connection_id: 'connection-120'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-110',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-595',
      connection_id: 'connection-529'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      chain_id: 'test-core-2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1037',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4996',
      connection_id: 'connection-4359'
    },
    chain_2: {
      chain_name: 'qubeticstestnet',
      chain_id: 'qubetics_9029-1',
      client_id: '07-tendermint-14',
      connection_id: 'connection-12'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11229',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-19',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'quicksilvertestnet2',
      chain_id: 'rhye-2',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1448',
      connection_id: 'connection-1552'
    },
    chain_2: {
      chain_name: 'sagatestnet',
      chain_id: 'ssc-testnet-2',
      client_id: '07-tendermint-26',
      connection_id: 'connection-21'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4946',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-965',
      connection_id: 'connection-865'
    },
    chain_2: {
      chain_name: 'sgetestnet',
      chain_id: 'sge-network-3',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1568',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1274',
      connection_id: 'connection-1175'
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      chain_id: 'elgafar-1',
      client_id: '07-tendermint-621',
      connection_id: 'connection-633'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4175',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-638',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-3714',
      connection_id: 'connection-3238'
    },
    chain_2: {
      chain_name: 'swisstroniktestnet',
      chain_id: 'swisstronik_1291-1',
      client_id: '07-tendermint-31',
      connection_id: 'connection-18'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8295',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4155',
      connection_id: 'connection-3614'
    },
    chain_2: {
      chain_name: 'symphonytestnet',
      chain_id: 'symphony-testnet-4',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9540',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4093',
      connection_id: 'connection-3540'
    },
    chain_2: {
      chain_name: 'synternettestnet',
      chain_id: 'amber-2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9152',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: false,
          status: 'ACTIVE'
        }
      }, {
        chain_1: {
          channel_id: 'channel-85186',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4301',
      connection_id: 'connection-3765'
    },
    chain_2: {
      chain_name: 'titannettestnet',
      chain_id: 'titan-test-4',
      client_id: '07-tendermint-7',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9941',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-2436',
      connection_id: 'connection-2267'
    },
    chain_2: {
      chain_name: 'titantestnet',
      chain_id: 'titan_18889-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5969',
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
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-3125',
      connection_id: 'connection-2826'
    },
    chain_2: {
      chain_name: 'xiontestnet1',
      chain_id: 'xion-testnet-1',
      client_id: '07-tendermint-121',
      connection_id: 'connection-57'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6668',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-490',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4492',
      connection_id: 'connection-3926'
    },
    chain_2: {
      chain_name: 'xiontestnet2',
      chain_id: 'xion-testnet-2',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10231',
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
      }, {
        chain_1: {
          channel_id: 'channel-10381',
          port_id: 'icqhost'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'feeabs'
        },
        ordering: 'unordered',
        version: 'icq-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4629',
      connection_id: 'connection-3984'
    },
    chain_2: {
      chain_name: 'xrplevmtestnet',
      chain_id: 'xrplevm_1449000-1',
      client_id: '07-tendermint-10',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10361',
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
  }
];
export default info;