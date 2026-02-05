import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmosicsprovidertestnet',
      chainId: 'provider',
      clientId: '07-tendermint-403',
      connectionId: 'connection-289'
    },
    chain2: {
      chainName: 'divinetestnet',
      chainId: 'divine-testnet-1',
      clientId: '07-tendermint-7',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-575',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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
      chainName: 'divinetestnet',
      chainId: 'divine-testnet-1',
      clientId: '07-tendermint-8',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-5024',
      connectionId: 'connection-4386'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11375',
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