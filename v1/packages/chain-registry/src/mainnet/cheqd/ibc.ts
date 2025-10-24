import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cheqd',
      chain_id: 'cheqd-mainnet-1',
      client_id: '07-tendermint-13',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      chain_id: 'gravity-bridge-3',
      client_id: '07-tendermint-64',
      connection_id: 'connection-74'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-43',
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
      chain_name: 'cheqd',
      chain_id: 'cheqd-mainnet-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1615',
      connection_id: 'connection-1268'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-108',
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
      chain_name: 'cheqd',
      chain_id: 'cheqd-mainnet-1',
      client_id: '07-tendermint-85',
      connection_id: 'connection-63'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-196',
      connection_id: 'connection-191'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-141',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        fee_version: 'ics29-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cheqd',
      chain_id: 'cheqd-mainnet-1',
      client_id: '07-tendermint-83',
      connection_id: 'connection-61'
    },
    chain_2: {
      chain_name: 'terra2',
      chain_id: 'phoenix-1',
      client_id: '07-tendermint-392',
      connection_id: 'connection-382'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-301',
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