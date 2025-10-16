import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'lumeratestnet',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4899',
      connectionId: 'connection-4268'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10884',
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