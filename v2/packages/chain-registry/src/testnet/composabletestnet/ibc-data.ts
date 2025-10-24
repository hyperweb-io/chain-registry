import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'composabletestnet',
      chainId: 'banksy-testnet-3',
      clientId: '07-tendermint-23',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-273',
      connectionId: 'connection-237'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-329',
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
      chainName: 'composabletestnet',
      chainId: 'banksy-testnet-3',
      clientId: '07-tendermint-218',
      connectionId: 'connection-127'
    },
    chain2: {
      chainName: 'prysmdevnet',
      chainId: 'prysm-devnet-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-50',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }];
export default info;