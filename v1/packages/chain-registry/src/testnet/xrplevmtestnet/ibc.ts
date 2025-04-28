import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmosicsprovidertestnet',
      client_id: '07-tendermint-290',
      connection_id: 'connection-208'
    },
    chain_2: {
      chain_name: 'xrplevmtestnet',
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
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'elystestnet',
      client_id: '07-tendermint-13',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'xrplevmtestnet',
      client_id: '07-tendermint-15',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-321',
      connection_id: 'connection-281'
    },
    chain_2: {
      chain_name: 'xrplevmtestnet',
      client_id: '07-tendermint-24',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-77038',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-4629',
      connection_id: 'connection-3984'
    },
    chain_2: {
      chain_name: 'xrplevmtestnet',
      client_id: '07-tendermint-10',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10361',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }
];
export default info;