import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3712',
      connectionId: 'connection-11065'
    },
    chain2: {
      chainName: 'turkchain',
      chainId: '1919',
      clientId: '07-tendermint-0',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-110319',
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