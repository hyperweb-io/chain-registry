import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-160',
      connection_id: 'connection-108'
    },
    chain_2: {
      chain_name: 'symphonytestnet',
      chain_id: 'symphony-testnet-4',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-242',
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
      chain_name: 'junotestnet6',
      chain_id: 'uni-6',
      client_id: '07-tendermint-794',
      connection_id: 'connection-872'
    },
    chain_2: {
      chain_name: 'symphonytestnet',
      chain_id: 'symphony-testnet-4',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-946',
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
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4155',
      connection_id: 'connection-3614'
    },
    chain_2: {
      chain_name: 'symphonytestnet',
      chain_id: 'symphony-testnet-4',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9540',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stargazetestnet',
      chain_id: 'elgafar-1',
      client_id: '07-tendermint-962',
      connection_id: 'connection-955'
    },
    chain_2: {
      chain_name: 'symphonytestnet',
      chain_id: 'symphony-testnet-4',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1006',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;