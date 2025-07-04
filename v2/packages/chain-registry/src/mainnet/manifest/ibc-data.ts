import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'manifest',
      clientId: '07-tendermint-0',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3448',
      connectionId: 'connection-10605'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer',
          clientId: '07-tendermint-0',
          connectionId: 'connection-1'
        },
        chain2: {
          channelId: 'channel-100418',
          portId: 'transfer',
          clientId: '07-tendermint-3448',
          connectionId: 'connection-10605'
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