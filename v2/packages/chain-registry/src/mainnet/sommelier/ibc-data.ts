import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-109',
      connectionId: 'connection-96'
    },
    chain2: {
      chainName: 'sommelier',
      chainId: 'sommelier-3',
      clientId: '07-tendermint-13',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-72',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics-20',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-135',
      connectionId: 'connection-108'
    },
    chain2: {
      chainName: 'sommelier',
      chainId: 'sommelier-3',
      clientId: '07-tendermint-4',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-93',
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
      chainName: 'kujira',
      chainId: 'kaiyo-1',
      clientId: '07-tendermint-107',
      connectionId: 'connection-77'
    },
    chain2: {
      chainName: 'sommelier',
      chainId: 'sommelier-3',
      clientId: '07-tendermint-12',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-69',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-1745',
      connectionId: 'connection-1348'
    },
    chain2: {
      chainName: 'sommelier',
      chainId: 'sommelier-3',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-165',
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
      chainName: 'quicksilver',
      chainId: 'quicksilver-2',
      clientId: '07-tendermint-79',
      connectionId: 'connection-54'
    },
    chain2: {
      chainName: 'sommelier',
      chainId: 'sommelier-3',
      clientId: '07-tendermint-57',
      connectionId: 'connection-59'
    },
    channels: [{
        chain1: {
          channelId: 'channel-101',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-59',
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
      chainName: 'sommelier',
      chainId: 'sommelier-3',
      clientId: '07-tendermint-60',
      connectionId: 'connection-75'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-131',
      connectionId: 'connection-122'
    },
    channels: [{
        chain1: {
          channelId: 'channel-71',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-150',
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