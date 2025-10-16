import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'impacthubtestnet',
      clientId: '07-tendermint-53',
      connectionId: 'connection-23'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1010',
      connectionId: 'connection-911'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1637',
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