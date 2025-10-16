import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1898',
      connectionId: 'connection-1471'
    },
    chain2: {
      chainName: 'rizon',
      clientId: '07-tendermint-3',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-221',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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