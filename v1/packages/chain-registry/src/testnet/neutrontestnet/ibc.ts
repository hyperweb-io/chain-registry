import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoricdevnet',
      client_id: '07-tendermint-128',
      connection_id: 'connection-82'
    },
    chain_2: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-553',
      connection_id: 'connection-474'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-62',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1578',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'babylontestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-582',
      connection_id: 'connection-522'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1651',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-191',
      connection_id: 'connection-156'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-70',
      connection_id: 'connection-61'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-496',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-43',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-102',
      connection_id: 'connection-93'
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-30',
      connection_id: 'connection-17'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-133',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain_1: {
          channel_id: 'channel-135',
          port_id: 'wasm.neutron1tw9sg9e4l09l5rjglf4qfvcft470ljk5grdq3luagysyk83nzfusw2sxgq'
        },
        chain_2: {
          channel_id: 'channel-42',
          port_id: 'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
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
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-338',
      connection_id: 'connection-237'
    },
    chain_2: {
      chain_name: 'nolustestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1061',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-143',
      connection_id: 'connection-130'
    },
    chain_2: {
      chain_name: 'nolustestnet1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-208',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1990',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-133',
      connection_id: 'connection-123'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1272',
      connection_id: 'connection-1172'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-196',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4172',
          port_id: 'transfer'
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