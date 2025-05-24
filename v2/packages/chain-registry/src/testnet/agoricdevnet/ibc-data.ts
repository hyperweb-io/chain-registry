import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      clientId: '07-tendermint-14',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1128',
      connectionId: 'connection-872'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-602',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      clientId: '07-tendermint-21',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'celestiatestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      clientId: '07-tendermint-18',
      connectionId: 'connection-17'
    },
    chain2: {
      chainName: 'cosmosicsprovidertestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      clientId: '07-tendermint-16',
      connectionId: 'connection-16'
    },
    chain2: {
      chainName: 'elystestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      clientId: '07-tendermint-128',
      connectionId: 'connection-82'
    },
    chain2: {
      chainName: 'neutrontestnet',
      clientId: '07-tendermint-553',
      connectionId: 'connection-474'
    },
    channels: [{
        chain1: {
          channelId: 'channel-62',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1578',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      clientId: '07-tendermint-13',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'nobletestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'osmosistestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      clientId: '07-tendermint-15',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'stridetestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  }
];
export default info;