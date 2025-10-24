import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'canto',
      chainId: 'canto_7700-1',
      clientId: '07-tendermint-10',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'carbon',
      chainId: 'carbon-1',
      clientId: '07-tendermint-40',
      connectionId: 'connection-23'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-18',
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
      chainName: 'canto',
      chainId: 'canto_7700-1',
      clientId: '07-tendermint-38',
      connectionId: 'connection-32'
    },
    chain2: {
      chainName: 'composable',
      chainId: 'centauri-1',
      clientId: '07-tendermint-50',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'canto',
      chainId: 'canto_7700-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-873',
      connectionId: 'connection-604'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-358',
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
      chainName: 'canto',
      chainId: 'canto_7700-1',
      clientId: '07-tendermint-0',
      connectionId: '07-tendermint-0'
    },
    chain2: {
      chainName: 'gravitybridge',
      chainId: 'gravity-bridge-3',
      clientId: '07-tendermint-156',
      connectionId: 'connection-150'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-88',
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
      chainName: 'canto',
      chainId: 'canto_7700-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-2481',
      connectionId: 'connection-2017'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-550',
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
      chainName: 'canto',
      chainId: 'canto_7700-1',
      clientId: '07-tendermint-24',
      connectionId: 'connection-16'
    },
    chain2: {
      chainName: 'sommelier',
      chainId: 'sommelier-3',
      clientId: '07-tendermint-10',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
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
  }
];
export default info;