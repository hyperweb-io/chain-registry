import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3517',
      connectionId: 'connection-10760'
    },
    chain2: {
      chainName: 'symphony',
      chainId: 'symphony-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-104867',
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