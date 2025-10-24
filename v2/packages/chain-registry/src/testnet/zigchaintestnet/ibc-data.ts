import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      chainId: 'axelar-testnet-lisbon-3',
      clientId: '07-tendermint-1163',
      connectionId: 'connection-916'
    },
    chain2: {
      chainName: 'zigchaintestnet',
      chainId: 'zig-test-2',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-612',
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
  }, {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-572',
      connectionId: 'connection-520'
    },
    chain2: {
      chainName: 'zigchaintestnet',
      chainId: 'zig-test-2',
      clientId: '07-tendermint-84',
      connectionId: 'connection-62'
    },
    channels: [{
        chain1: {
          channelId: 'channel-704',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-44',
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