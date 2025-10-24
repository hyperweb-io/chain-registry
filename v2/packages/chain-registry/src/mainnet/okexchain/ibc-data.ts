import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'assetmantle',
      chainId: 'mantle-1',
      clientId: '07-tendermint-42',
      connectionId: 'connection-22'
    },
    chain2: {
      chainName: 'okexchain',
      chainId: 'exchain-66',
      clientId: '07-tendermint-92',
      connectionId: 'connection-35'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-30',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'chihuahua',
      chainId: 'chihuahua-1',
      clientId: '07-tendermint-85',
      connectionId: 'connection-54'
    },
    chain2: {
      chainName: 'okexchain',
      chainId: 'exchain-66',
      clientId: '07-tendermint-5',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-24',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'crescent',
      chainId: 'crescent-1',
      clientId: '07-tendermint-44',
      connectionId: 'connection-46'
    },
    chain2: {
      chainName: 'okexchain',
      chainId: 'exchain-66',
      clientId: '07-tendermint-116',
      connectionId: 'connection-78'
    },
    channels: [{
        chain1: {
          channelId: 'channel-31',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-46',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'juno',
      chainId: 'juno-1',
      clientId: '07-tendermint-314',
      connectionId: 'connection-285'
    },
    chain2: {
      chainName: 'okexchain',
      chainId: 'exchain-66',
      clientId: '07-tendermint-122',
      connectionId: 'connection-92'
    },
    channels: [{
        chain1: {
          channelId: 'channel-212',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-52',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'okexchain',
      chainId: 'exchain-66',
      clientId: '07-tendermint-100',
      connectionId: 'connection-44'
    },
    chain2: {
      chainName: 'vidulum',
      chainId: 'vidulum-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
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
  }
];
export default info;