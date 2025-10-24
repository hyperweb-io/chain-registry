import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      chainId: 'archway-1',
      clientId: '07-tendermint-114',
      connectionId: 'connection-107'
    },
    chain2: {
      chainName: 'beezee',
      chainId: 'beezee-1',
      clientId: '07-tendermint-8',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-147',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'atomone',
      chainId: 'atomone-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'beezee',
      chainId: 'beezee-1',
      clientId: '07-tendermint-23',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
      chainName: 'beezee',
      chainId: 'beezee-1',
      clientId: '07-tendermint-10',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'jackal',
      chainId: 'jackal-1',
      clientId: '07-tendermint-79',
      connectionId: 'connection-65'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-142',
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
      chainName: 'beezee',
      chainId: 'beezee-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-112',
      connectionId: 'connection-107'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-95',
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
      chainName: 'beezee',
      chainId: 'beezee-1',
      clientId: '07-tendermint-11',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'omniflixhub',
      chainId: 'omniflixhub-1',
      clientId: '07-tendermint-75',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-50',
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
      chainName: 'beezee',
      chainId: 'beezee-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-2154',
      connectionId: 'connection-1672'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-340',
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