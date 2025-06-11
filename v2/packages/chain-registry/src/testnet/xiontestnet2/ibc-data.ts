import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'nobletestnet',
      clientId: '07-tendermint-423',
      connectionId: 'connection-390'
    },
    chain2: {
      chainName: 'xiontestnet2',
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
          status: 'live',
          preferred: true
        }
      }]
  }, {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4492',
      connectionId: 'connection-3926'
    },
    chain2: {
      chainName: 'xiontestnet2',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10231',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }, {
        chain1: {
          channelId: 'channel-10381',
          portId: 'icqhost'
        },
        chain2: {
          channelId: 'channel-10',
          portId: 'feeabs'
        },
        ordering: 'unordered',
        version: 'icq-1',
        tags: {
          status: 'live'
        }
      }]
  }];
export default info;