import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1045',
      connection_id: 'connection-806'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-564',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestiatestnet3',
      chain_id: 'mocha-4',
      client_id: '07-tendermint-615',
      connection_id: 'connection-551'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-14',
      connection_id: 'connection-8'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-138',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composabletestnet',
      chain_id: 'banksy-testnet-3',
      client_id: '07-tendermint-218',
      connection_id: 'connection-127'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-3805',
      connection_id: 'connection-3845'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-11'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4366',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'elystestnet',
      chain_id: 'elysicstestnet-1',
      client_id: '07-tendermint-118',
      connection_id: 'connection-80'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-21',
      connection_id: 'connection-14'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-52',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'jackaltestnet2',
      chain_id: 'mesomelas-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-17',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-319',
      connection_id: 'connection-269'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-222',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet4',
      chain_id: 'osmo-test-4',
      client_id: '07-tendermint-4060',
      connection_id: 'connection-3506'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9018',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-16',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'quicksilvertestnet2',
      chain_id: 'rhye-2',
      client_id: '07-tendermint-4',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-29',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      chain_id: 'elgafar-1',
      client_id: '07-tendermint-961',
      connection_id: 'connection-954'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1005',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;