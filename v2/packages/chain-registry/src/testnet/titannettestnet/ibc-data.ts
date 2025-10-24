import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-4301',
      connectionId: 'connection-3765'
    },
    chain2: {
      chainName: 'titannettestnet',
      chainId: 'titan-test-4',
      clientId: '07-tendermint-7',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9941',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
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