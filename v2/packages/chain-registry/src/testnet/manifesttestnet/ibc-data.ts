import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      chainId: 'axelar-testnet-lisbon-3',
      clientId: '07-tendermint-1090',
      connectionId: 'connection-847'
    },
    chain2: {
      chainName: 'manifesttestnet',
      chainId: 'manifest-ledger-testnet',
      clientId: '07-tendermint-9',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-594',
          portId: 'transfer',
          clientId: '07-tendermint-1090',
          connectionId: 'connection-847'
        },
        chain2: {
          channelId: 'channel-6',
          portId: 'transfer',
          clientId: '07-tendermint-9',
          connectionId: 'connection-10'
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
      chainName: 'manifesttestnet',
      chainId: 'manifest-ledger-testnet',
      clientId: '07-tendermint-8',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-4456',
      connectionId: 'connection-3898'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer',
          clientId: '07-tendermint-8',
          connectionId: 'connection-9'
        },
        chain2: {
          channelId: 'channel-10183',
          portId: 'transfer',
          clientId: '07-tendermint-4456',
          connectionId: 'connection-3898'
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