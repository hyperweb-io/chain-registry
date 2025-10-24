import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      chain_id: 'akashnet-2',
      client_id: '07-tendermint-45',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-42',
      connection_id: 'connection-27'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-233',
      connection_id: 'connection-224'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-213',
      connection_id: 'connection-163'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-165',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-96',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-388',
      connection_id: 'connection-341'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-58',
      connection_id: 'connection-33'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-186',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: false,
          status: 'ACTIVE'
        }
      }, {
        chain_1: {
          channel_id: 'channel-1549',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-97',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      chain_id: 'crypto-org-chain-mainnet-1',
      client_id: '07-tendermint-63',
      connection_id: 'connection-36'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-43',
      connection_id: 'connection-28'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'decentr',
      chain_id: 'mainnet-3',
      client_id: '07-tendermint-13',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-103',
      connection_id: 'connection-81'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-55',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      chain_id: 'irishub-1',
      client_id: '07-tendermint-36',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-54',
      connection_id: 'connection-30'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'medasdigital',
      chain_id: 'medasdigital-2',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-110',
      connection_id: 'connection-87'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-60',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-34',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-61',
      connection_id: 'connection-36'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'regen',
      chain_id: 'regen-1',
      client_id: '07-tendermint-31',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-56',
      connection_id: 'connection-32'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-14',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-96',
      connection_id: 'connection-75'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-50',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-84',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-88',
      connection_id: 'connection-70'
    },
    chain_2: {
      chain_name: 'starname',
      chain_id: 'iov-mainnet-ibc',
      client_id: '07-tendermint-46',
      connection_id: 'connection-32'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;