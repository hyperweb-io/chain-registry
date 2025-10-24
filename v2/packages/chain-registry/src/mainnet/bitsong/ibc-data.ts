import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      chainId: 'archway-1',
      clientId: '07-tendermint-92',
      connectionId: 'connection-90'
    },
    chain2: {
      chainName: 'bitsong',
      chainId: 'bitsong-2b',
      clientId: '07-tendermint-80',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-124',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-29',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-207',
      connectionId: 'connection-188'
    },
    chain2: {
      chainName: 'bitsong',
      chainId: 'bitsong-2b',
      clientId: '07-tendermint-81',
      connectionId: 'connection-56'
    },
    channels: [{
        chain1: {
          channelId: 'channel-145',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-30',
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
      chainName: 'bitcanna',
      chainId: 'bitcanna-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'bitsong',
      chainId: 'bitsong-2b',
      clientId: '07-tendermint-1237',
      connectionId: 'connection-1132'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-42',
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
      chainName: 'bitsong',
      chainId: 'bitsong-2b',
      clientId: '07-tendermint-1',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-481',
      connectionId: 'connection-395'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-229',
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
      chainName: 'bitsong',
      chainId: 'bitsong-2b',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'juno',
      chainId: 'juno-1',
      clientId: '07-tendermint-33',
      connectionId: 'connection-26'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-17',
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
      chainName: 'bitsong',
      chainId: 'bitsong-2b',
      clientId: '07-tendermint-83',
      connectionId: 'connection-58'
    },
    chain2: {
      chainName: 'neutron',
      chainId: 'neutron-1',
      clientId: '07-tendermint-182',
      connectionId: 'connection-136'
    },
    channels: [{
        chain1: {
          channelId: 'channel-39',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7232',
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
      chainName: 'bitsong',
      chainId: 'bitsong-2b',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-1551',
      connectionId: 'connection-1216'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-73',
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