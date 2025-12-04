import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-22',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'axelartestnet',
      chainId: 'axelar-testnet-lisbon-3',
      clientId: '07-tendermint-1193',
      connectionId: 'connection-942'
    },
    channels: [{
        chain1: {
          channelId: 'channel-315',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-623',
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
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-21',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'celestiatestnet',
      chainId: 'blockspacerace-0',
      clientId: '07-tendermint-611',
      connectionId: 'connection-662'
    },
    channels: [{
        chain1: {
          channelId: 'channel-129',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-399',
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
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-18',
      connectionId: 'connection-17'
    },
    chain2: {
      chainName: 'cosmosicsprovidertestnet',
      chainId: 'provider',
      clientId: '07-tendermint-311',
      connectionId: 'connection-224'
    },
    channels: [{
        chain1: {
          channelId: 'channel-25',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-388',
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
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-16',
      connectionId: 'connection-16'
    },
    chain2: {
      chainName: 'elystestnet',
      chainId: 'elysicstestnet-1',
      clientId: '07-tendermint-17',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11',
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
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-602',
      connectionId: 'connection-558'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1748',
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
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-4596',
      connectionId: 'connection-3957'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10293',
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
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-15',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'stridetestnet',
      chainId: 'stride-internal-1',
      clientId: '07-tendermint-68',
      connectionId: 'connection-44'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-60',
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