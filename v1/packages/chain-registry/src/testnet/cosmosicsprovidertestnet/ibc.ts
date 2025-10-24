import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-18',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'cosmosicsprovidertestnet',
      chain_id: 'provider',
      client_id: '07-tendermint-311',
      connection_id: 'connection-224'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-388',
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
      chain_id: 'bbn-test-5',
      client_id: '07-tendermint-12',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'cosmosicsprovidertestnet',
      chain_id: 'provider',
      client_id: '07-tendermint-248',
      connection_id: 'connection-179'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-347',
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
      chain_name: 'cosmosicsprovidertestnet',
      chain_id: 'provider',
      client_id: '07-tendermint-159',
      connection_id: 'connection-107'
    },
    chain_2: {
      chain_name: 'mantrachaintestnet2',
      chain_id: 'mantra-dukong-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-241',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
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
      chain_name: 'cosmosicsprovidertestnet',
      chain_id: 'provider',
      client_id: '07-tendermint-374',
      connection_id: 'connection-260'
    },
    chain_2: {
      chain_name: 'outbedevnet',
      chain_id: 'outbe-devnet-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-500',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
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
      chain_name: 'cosmosicsprovidertestnet',
      chain_id: 'provider',
      client_id: '07-tendermint-290',
      connection_id: 'connection-208'
    },
    chain_2: {
      chain_name: 'xrplevmtestnet',
      chain_id: 'xrplevm_1449000-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-374',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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