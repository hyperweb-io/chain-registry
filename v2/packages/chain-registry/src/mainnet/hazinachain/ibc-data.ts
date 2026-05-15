import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'hazinachain',
      chainId: 'hazinachain-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3702',
      connectionId: 'connection-11056'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-110100',
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