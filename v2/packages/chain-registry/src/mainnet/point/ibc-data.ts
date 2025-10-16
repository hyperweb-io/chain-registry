import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-926',
      connectionId: 'connection-648'
    },
    chain2: {
      chainName: 'point',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-404',
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
          status: 'ACTIVE'
        }
      }]
  }];
export default info;