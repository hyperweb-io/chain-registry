import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'allora',
      chainId: 'allora-mainnet-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-141',
      connectionId: 'connection-175'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-79',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-151',
      connectionId: 'connection-136'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-8',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-103',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
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
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1140',
      connectionId: 'connection-827'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-584',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
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
    chain1: {
      chainName: 'doravota',
      chainId: 'vota-ash',
      clientId: '07-tendermint-21',
      connectionId: 'connection-27'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-109',
      connectionId: 'connection-153'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-64',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'kava',
      chainId: 'kava_2222-10',
      clientId: '07-tendermint-146',
      connectionId: 'connection-181'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-38',
      connectionId: 'connection-33'
    },
    channels: [{
        chain1: {
          channelId: 'channel-132',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-18',
          portId: 'transfer'
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
    chain1: {
      chainName: 'migaloo',
      chainId: 'migaloo-1',
      clientId: '07-tendermint-108',
      connectionId: 'connection-84'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-22',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-57',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-14',
          portId: 'transfer'
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
    chain1: {
      chainName: 'neutron',
      chainId: 'neutron-1',
      clientId: '07-tendermint-89',
      connectionId: 'connection-65'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-123',
      connectionId: 'connection-157'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2016',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-66',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-2110',
          portId: 'wasm.neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07'
        },
        chain2: {
          channelId: 'channel-71',
          portId: 'wasm.sei12fykm2xhg5ces2vmf4q2aem8c958exv3v0wmvrspa8zucrdwjeds2e2ntx'
        },
        ordering: 'unordered',
        version: 'astroport-ibc-v1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-64',
      connectionId: 'connection-61'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-45',
      connectionId: 'connection-77'
    },
    channels: [{
        chain1: {
          channelId: 'channel-39',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-45',
          portId: 'transfer'
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
    chain1: {
      chainName: 'nois',
      chainId: 'nois-1',
      clientId: '07-tendermint-19',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-106',
      connectionId: 'connection-144'
    },
    channels: [{
        chain1: {
          channelId: 'channel-43',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-58',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-44',
          portId: 'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        chain2: {
          channelId: 'channel-59',
          portId: 'wasm.sei1vxlzhn6qvf95syha2tgr0ct23sk5359s2vqzylgthuyy7kd7ql5qcxa4r0'
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-2790',
      connectionId: 'connection-2288'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-782',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
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
    chain1: {
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-545',
      connectionId: 'connection-477'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-21',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-59',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
          portId: 'transfer'
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
    chain1: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-18',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-130',
      connectionId: 'connection-119'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-149',
          portId: 'transfer'
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
    chain1: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-135',
      connectionId: 'connection-160'
    },
    chain2: {
      chainName: 'zenrock',
      chainId: 'diamond-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-78',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
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