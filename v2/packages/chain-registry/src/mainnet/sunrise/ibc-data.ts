import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1430',
      connectionId: 'connection-1148'
    },
    chain2: {
      chainName: 'sunrise',
      chainId: 'sunrise-1',
      clientId: '07-tendermint-7',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1421',
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
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-180',
      connectionId: 'connection-174'
    },
    chain2: {
      chainName: 'sunrise',
      chainId: 'sunrise-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-168',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3582',
      connectionId: 'connection-10927'
    },
    chain2: {
      chainName: 'sunrise',
      chainId: 'sunrise-1',
      clientId: '07-tendermint-42',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-106275',
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