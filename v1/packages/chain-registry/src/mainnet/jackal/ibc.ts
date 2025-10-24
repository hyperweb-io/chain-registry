import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-17',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'jackal',
      chain_id: 'jackal-1',
      client_id: '07-tendermint-61',
      connection_id: 'connection-50'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }],
    operators: [{
        chain_1: {
          address: 'archway16l5ls4ajah6hethh374tpgn42r5q4sqeuw8udj'
        },
        chain_2: {
          address: 'jkl134a4es94hjqqej732cymf0w3988zh3c4yuqtf8'
        },
        memo: 'by AM Solutions | https://www.theamsolutions.info',
        name: 'AM Solutions',
        discord_handle: 'AlexeyM#5409'
      }, {
        chain_1: {
          address: 'archway1nms20r7jzaa4ms9exv90ckl2xfn0rd3rmqh7zm'
        },
        chain_2: {
          address: 'jkl1nms20r7jzaa4ms9exv90ckl2xfn0rd3rh49t3n'
        },
        memo: 'Relayed by NodeStake',
        name: 'NodeStake',
        discord_handle: 'nodestake'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-235',
      connection_id: 'connection-225'
    },
    chain_2: {
      chain_name: 'jackal',
      chain_id: 'jackal-1',
      client_id: '07-tendermint-80',
      connection_id: 'connection-66'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-137',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-49',
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
      chain_name: 'beezee',
      chain_id: 'beezee-1',
      client_id: '07-tendermint-10',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'jackal',
      chain_id: 'jackal-1',
      client_id: '07-tendermint-79',
      connection_id: 'connection-65'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-142',
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
      chain_name: 'crescent',
      chain_id: 'crescent-1',
      client_id: '07-tendermint-111',
      connection_id: 'connection-97'
    },
    chain_2: {
      chain_name: 'jackal',
      chain_id: 'jackal-1',
      client_id: '07-tendermint-56',
      connection_id: 'connection-46'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
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
      chain_name: 'jackal',
      chain_id: 'jackal-1',
      client_id: '07-tendermint-57',
      connection_id: 'connection-47'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-139',
      connection_id: 'connection-105'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-94',
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
      chain_name: 'jackal',
      chain_id: 'jackal-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-2273',
      connection_id: 'connection-1762'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-412',
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
      chain_name: 'jackal',
      chain_id: 'jackal-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-124',
      connection_id: 'connection-94'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-62',
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