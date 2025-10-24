import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1120',
      connectionId: 'connection-807'
    },
    chain2: {
      chainName: 'lumnetwork',
      chainId: 'lum-network-1',
      clientId: '07-tendermint-21',
      connectionId: 'connection-22'
    },
    channels: [{
        chain1: {
          channelId: 'channel-566',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'lumnetwork',
      chainId: 'lum-network-1',
      clientId: '07-tendermint-7',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-1668',
      connectionId: 'connection-1280'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-115',
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