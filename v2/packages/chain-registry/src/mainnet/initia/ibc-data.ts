import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'initia',
      clientId: '07-tendermint-20',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'neutron',
      clientId: '07-tendermint-161',
      connectionId: 'connection-118'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6885',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }, {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'initia',
      clientId: '07-tendermint-36',
      connectionId: 'connection-36'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3477',
      connectionId: 'connection-10713'
    },
    channels: [{
        chain1: {
          channelId: 'channel-68',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-102122',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }];
export default info;