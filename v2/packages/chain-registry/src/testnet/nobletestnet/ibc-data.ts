import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-13',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-432',
      connectionId: 'connection-196'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-337',
          portId: 'transfer'
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
    chain1: {
      chainName: 'babylontestnet',
      chainId: 'bbn-test-5',
      clientId: '07-tendermint-11',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-420',
      connectionId: 'connection-386'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-329',
          portId: 'transfer'
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
    chain1: {
      chainName: 'bitwaydevnet',
      chainId: 'bitway-devnet-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-592',
      connectionId: 'connection-537'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-774',
          portId: 'transfer'
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
    chain1: {
      chainName: 'elystestnet',
      chainId: 'elysicstestnet-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-28',
      connectionId: 'connection-26'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-19',
          portId: 'transfer'
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
    chain1: {
      chainName: 'int3facetestnet',
      chainId: 'int3-test-2',
      clientId: '07-tendermint-12',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-529',
      connectionId: 'connection-491'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-537',
          portId: 'transfer'
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
    chain1: {
      chainName: 'mantrachaintestnet',
      chainId: 'mantra-hongbai-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-294',
      connectionId: 'connection-247'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-209',
          portId: 'transfer'
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
    chain1: {
      chainName: 'mantrachaintestnet2',
      chainId: 'mantra-dukong-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-341',
      connectionId: 'connection-290'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-237',
          portId: 'transfer'
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
    chain1: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-191',
      connectionId: 'connection-156'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-70',
      connectionId: 'connection-61'
    },
    channels: [{
        chain1: {
          channelId: 'channel-496',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-43',
          portId: 'transfer'
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
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-42',
      connectionId: 'connection-31'
    },
    chain2: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-1374',
      connectionId: 'connection-1275'
    },
    channels: [{
        chain1: {
          channelId: 'channel-22',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4280',
          portId: 'transfer'
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
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'osmosistestnet4',
      chainId: 'osmo-test-4',
      clientId: '07-tendermint-4504',
      connectionId: 'connection-3905'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3651',
          portId: 'transfer'
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
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-319',
      connectionId: 'connection-269'
    },
    chain2: {
      chainName: 'prysmdevnet',
      chainId: 'prysm-devnet-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-222',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-44',
      connectionId: 'connection-32'
    },
    chain2: {
      chainName: 'seitestnet2',
      chainId: 'atlantic-2',
      clientId: '07-tendermint-127',
      connectionId: 'connection-107'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-75',
          portId: 'transfer'
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
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-293',
      connectionId: 'connection-246'
    },
    chain2: {
      chainName: 'titantestnet',
      chainId: 'titan_18889-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-208',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
          portId: 'transfer'
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
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-224',
      connectionId: 'connection-176'
    },
    chain2: {
      chainName: 'xiontestnet1',
      chainId: 'xion-testnet-1',
      clientId: '07-tendermint-120',
      connectionId: 'connection-56'
    },
    channels: [{
        chain1: {
          channelId: 'channel-147',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-489',
          portId: 'transfer'
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
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-423',
      connectionId: 'connection-390'
    },
    chain2: {
      chainName: 'xiontestnet2',
      chainId: 'xion-testnet-2',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-333',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
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
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-572',
      connectionId: 'connection-520'
    },
    chain2: {
      chainName: 'zigchaintestnet',
      chainId: 'zig-test-2',
      clientId: '07-tendermint-84',
      connectionId: 'connection-62'
    },
    channels: [{
        chain1: {
          channelId: 'channel-704',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-44',
          portId: 'transfer'
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