import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-203',
      connection_id: 'connection-183'
    },
    chain_2: {
      chain_name: 'chain4energy',
      chain_id: 'perun-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-141',
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
  }, {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chain4energy',
      chain_id: 'perun-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-3107',
      connection_id: 'connection-2586'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-22172',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }];
export default info;