import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'divinetestnet',
      chainId: 'divine-testnet-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-4998',
      connectionId: 'connection-4361'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11231',
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