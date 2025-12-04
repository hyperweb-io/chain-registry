import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-602',
      connectionId: 'connection-558'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1748',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'babylontestnet',
      chainId: 'bbn-test-5',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-582',
      connectionId: 'connection-522'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1651',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-191',
      connectionId: 'connection-156'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-70',
      connectionId: 'connection-61'
    },
    channels: [{
        chain1: {
          channelId: 'channel-496',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-43',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-102',
      connectionId: 'connection-93'
    },
    chain2: {
      chainName: 'noistestnet',
      chainId: 'nois-testnet-005',
      clientId: '07-tendermint-30',
      connectionId: 'connection-17'
    },
    channels: [{
        chain1: {
          channelId: 'channel-133',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-40',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-135',
          portId: 'wasm.neutron1tw9sg9e4l09l5rjglf4qfvcft470ljk5grdq3luagysyk83nzfusw2sxgq'
        },
        chain2: {
          channelId: 'channel-42',
          portId: 'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-338',
      connectionId: 'connection-237'
    },
    chain2: {
      chainName: 'nolustestnet',
      chainId: 'rila-3',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1061',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-143',
      connectionId: 'connection-130'
    },
    chain2: {
      chainName: 'nolustestnet1',
      chainId: 'rila-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-208',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1990',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-133',
      connectionId: 'connection-123'
    },
    chain2: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-1272',
      connectionId: 'connection-1172'
    },
    channels: [{
        chain1: {
          channelId: 'channel-196',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4172',
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