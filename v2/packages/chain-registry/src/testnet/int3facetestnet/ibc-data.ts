import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
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
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'int3facetestnet',
      clientId: '07-tendermint-12',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'nobletestnet',
      clientId: '07-tendermint-529',
      connectionId: 'connection-491'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-537',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'int3facetestnet',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4231',
      connectionId: 'connection-3694'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9755',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;