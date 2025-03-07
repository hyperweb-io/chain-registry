import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1090',
      connectionId: 'connection-847'
    },
    chain2: {
      chainName: 'manifesttestnet',
      clientId: '07-tendermint-9',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-594',
          portId: 'transfer',
          clientId: '07-tendermint-1090',
          connectionId: 'connection-847'
        },
        chain2: {
          channelId: 'channel-6',
          portId: 'transfer',
          clientId: '07-tendermint-9',
          connectionId: 'connection-10'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }, {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'manifesttestnet',
      clientId: '07-tendermint-8',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4456',
      connectionId: 'connection-3898'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer',
          clientId: '07-tendermint-8',
          connectionId: 'connection-9'
        },
        chain2: {
          channelId: 'channel-10183',
          portId: 'transfer',
          clientId: '07-tendermint-4456',
          connectionId: 'connection-3898'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }];
export default info;