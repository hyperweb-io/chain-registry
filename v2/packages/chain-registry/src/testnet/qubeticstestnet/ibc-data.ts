import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-4996',
      connectionId: 'connection-4359'
    },
    chain2: {
      chainName: 'qubeticstestnet',
      chainId: 'qubetics_9029-1',
      clientId: '07-tendermint-14',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11229',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-8',
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