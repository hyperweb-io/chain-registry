import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-205',
      connectionId: 'connection-186'
    },
    chain2: {
      chainName: 'nolus',
      chainId: 'pirin-1',
      clientId: '07-tendermint-17',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-143',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10177',
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
      chainName: 'doravota',
      chainId: 'vota-ash',
      clientId: '07-tendermint-13',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'nolus',
      chainId: 'pirin-1',
      clientId: '07-tendermint-14',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4092',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'neutron',
      chainId: 'neutron-1',
      clientId: '07-tendermint-71',
      connectionId: 'connection-50'
    },
    chain2: {
      chainName: 'nolus',
      chainId: 'pirin-1',
      clientId: '07-tendermint-13',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-44',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3839',
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
      chainName: 'nolus',
      chainId: 'pirin-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-2791',
      connectionId: 'connection-2289'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-783',
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
      chainName: 'nolus',
      chainId: 'pirin-1',
      clientId: '07-tendermint-18',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'secretnetwork',
      chainId: 'secret-4',
      clientId: '07-tendermint-201',
      connectionId: 'connection-193'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13995',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-146',
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