import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'celestia',
      chainId: 'celestia',
      clientId: '07-tendermint-179',
      connectionId: 'connection-118'
    },
    chain2: {
      chainName: 'luxa',
      chainId: 'luxa-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-709',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1519',
      connectionId: 'connection-1313'
    },
    chain2: {
      chainName: 'luxa',
      chainId: 'luxa-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1941',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'luxa',
      chainId: 'luxa-1',
      clientId: '07-tendermint-7',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-239',
      connectionId: 'connection-219'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-640',
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
      chainName: 'luxa',
      chainId: 'luxa-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3760',
      connectionId: 'connection-11099'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-111100',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE',
          preferred: true
        }
      }]
  }
];
export default info;