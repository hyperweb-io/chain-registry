import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'celestiatestnet3',
      chainId: 'mocha-4',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-2382',
      connectionId: 'connection-2727'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3152',
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
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-2522',
      connectionId: 'connection-2881'
    },
    chain2: {
      chainName: 'elystestnet',
      chainId: 'elysicstestnet-1',
      clientId: '07-tendermint-19',
      connectionId: 'connection-17'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3302',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-16',
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
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-2073',
      connectionId: 'connection-2418'
    },
    chain2: {
      chainName: 'empowertestnet',
      chainId: 'circulus-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2765',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '7-tendermint-3407',
      connectionId: 'connection-3519'
    },
    chain2: {
      chainName: 'kujiratestnet',
      chainId: 'harpoon-4',
      clientId: '07-tendermint-72',
      connectionId: 'connection-47'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4004',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-51',
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
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-2528',
      connectionId: 'connection-2886'
    },
    chain2: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-1262',
      connectionId: 'connection-1157'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3306',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4156',
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
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-2100',
      connectionId: 'connection-2447'
    },
    chain2: {
      chainName: 'persistencetestnet2',
      chainId: 'test-core-2',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2777',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-3805',
      connectionId: 'connection-3845'
    },
    chain2: {
      chainName: 'prysmdevnet',
      chainId: 'prysm-devnet-1',
      clientId: '07-tendermint-18',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4366',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-160',
      connectionId: 'connection-108'
    },
    chain2: {
      chainName: 'symphonytestnet',
      chainId: 'symphony-testnet-4',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-242',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-3237',
      connectionId: 'connection-3407'
    },
    chain2: {
      chainName: 'titantestnet',
      chainId: 'titan_18889-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3910',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
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
    chain1: {
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-289',
      connectionId: 'connection-207'
    },
    chain2: {
      chainName: 'wardenprotocoltestnet',
      chainId: 'docas_10100-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-373',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
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