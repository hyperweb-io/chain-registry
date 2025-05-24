import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'dungeon',
      clientId: '07-tendermint-22',
      connectionId: 'connection-8630'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-163',
      connectionId: 'connection-157'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5307',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-150',
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
      chainName: 'dungeon',
      clientId: '07-tendermint-18',
      connectionId: 'connection-8628'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3456',
      connectionId: 'connection-10614'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5305',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-101249',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }];
export default info;