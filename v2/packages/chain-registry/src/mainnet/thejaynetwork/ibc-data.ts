import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'celestia',
      chainId: 'celestia',
      clientId: '07-tendermint-149',
      connectionId: 'connection-102'
    },
    chain2: {
      chainName: 'thejaynetwork',
      chainId: 'thejaynetwork',
      clientId: '07-tendermint-9',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-277',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1476',
      connectionId: 'connection-1265'
    },
    chain2: {
      chainName: 'thejaynetwork',
      chainId: 'thejaynetwork',
      clientId: '07-tendermint-8',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1871',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-322',
      connectionId: 'connection-328'
    },
    chain2: {
      chainName: 'thejaynetwork',
      chainId: 'thejaynetwork',
      clientId: '07-tendermint-10',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-450',
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
  }
];
export default info;