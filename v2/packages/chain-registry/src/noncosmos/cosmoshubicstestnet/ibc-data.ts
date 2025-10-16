import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'babylontestnet',
      clientId: '07-tendermint-12',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'cosmoshubicstestnet',
      clientId: '07-tendermint-248',
      connectionId: 'connection-179'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-347',
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