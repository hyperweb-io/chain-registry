import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoricdevnet',
      client_id: '07-tendermint-18',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'cosmosicsprovidertestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmosicsprovidertestnet',
      client_id: '07-tendermint-159',
      connection_id: 'connection-107'
    },
    chain_2: {
      chain_name: 'mantrachaintestnet2',
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
          status: 'live',
          preferred: true
        }
      }]
  },
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
  }
];
export default info;