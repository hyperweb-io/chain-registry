import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
      chainName: 'cosmoshubtestnet',
      clientId: '07-tendermint-2522',
      connectionId: 'connection-2881'
    },
    chain2: {
      chainName: 'elystestnet',
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
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'elystestnet',
      clientId: '07-tendermint-9',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'nobletestnet',
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
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'elystestnet',
      clientId: '07-tendermint-118',
      connectionId: 'connection-80'
    },
    chain2: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-21',
      connectionId: 'connection-14'
    },
    channels: [{
        chain1: {
          channelId: 'channel-52',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'elystestnet',
      clientId: '07-tendermint-13',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'xrplevmtestnet',
      clientId: '07-tendermint-15',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }
];
export default info;