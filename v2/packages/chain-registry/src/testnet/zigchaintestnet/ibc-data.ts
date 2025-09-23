import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1163',
      connectionId: 'connection-916'
    },
    chain2: {
      chainName: 'zigchaintestnet',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-612',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
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
      chainName: 'nobletestnet',
      clientId: '07-tendermint-555',
      connectionId: 'connection-507'
    },
    chain2: {
      chainName: 'zigchaintestnet',
      clientId: '07-tendermint-72',
      connectionId: 'connection-52'
    },
    channels: [{
        chain1: {
          channelId: 'channel-664',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-35',
          portId: 'transfer'
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