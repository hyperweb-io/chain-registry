import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'bitway',
      clientId: '07-tendermint-30',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-183',
      connectionId: 'connection-178'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-172',
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