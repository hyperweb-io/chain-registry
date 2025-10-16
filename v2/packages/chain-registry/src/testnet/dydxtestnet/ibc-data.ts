import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-594',
      connectionId: 'connection-410'
    },
    chain2: {
      chainName: 'dydxtestnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-297',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }, {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'dydxtestnet',
      clientId: '07-tendermint-53',
      connectionId: 'connection-49'
    },
    chain2: {
      chainName: 'int3facetestnet',
      clientId: '07-tendermint-13',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-86',
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