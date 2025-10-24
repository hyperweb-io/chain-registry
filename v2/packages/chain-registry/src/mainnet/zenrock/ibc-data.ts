import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-135',
      connectionId: 'connection-160'
    },
    chain2: {
      chainName: 'zenrock',
      chainId: 'diamond-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-78',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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