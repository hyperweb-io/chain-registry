import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'atomone',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'beezee',
      clientId: '07-tendermint-23',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'atomone',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3396',
      connectionId: 'connection-4829'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-94814',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'atomone',
      clientId: '07-tendermint-6',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-380',
      connectionId: 'connection-337'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-448',
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