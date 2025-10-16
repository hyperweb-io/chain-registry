import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'namada',
      clientId: '07-tendermint-6',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'penumbra',
      clientId: '07-tendermint-18',
      connectionId: 'connection-14'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'neutron',
      clientId: '07-tendermint-137',
      connectionId: 'connection-98'
    },
    chain2: {
      chainName: 'penumbra',
      clientId: '07-tendermint-9',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4886',
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
      chainName: 'osmosis',
      clientId: '07-tendermint-3242',
      connectionId: 'connection-2730'
    },
    chain2: {
      chainName: 'penumbra',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-79703',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
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