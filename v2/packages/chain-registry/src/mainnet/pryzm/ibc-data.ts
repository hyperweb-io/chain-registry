import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-224',
      connectionId: 'connection-209'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-7',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-155',
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
      chainName: 'celestia',
      chainId: 'celestia',
      clientId: '07-tendermint-88',
      connectionId: 'connection-57'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-34',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1304',
      connectionId: 'connection-1038'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-859',
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
      },
      {
        chain1: {
          channelId: 'channel-863',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-8',
          portId: 'icacontroller-reward-uatom'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-861',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'icacontroller-sweep-uatom'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-891',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-20',
          portId: 'icacontroller-delegation-uatom'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'dydx',
      chainId: 'dydx-mainnet-1',
      clientId: '07-tendermint-29',
      connectionId: 'connection-34'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-71',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-24',
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
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-267',
      connectionId: 'connection-268'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-284',
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
      },
      {
        chain1: {
          channelId: 'channel-285',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-10',
          portId: 'icacontroller-delegation-inj'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-286',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-11',
          portId: 'icacontroller-reward-inj'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-287',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-12',
          portId: 'icacontroller-sweep-inj'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'neutron',
      chainId: 'neutron-1',
      clientId: '07-tendermint-98',
      connectionId: 'connection-72'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4329',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-100',
      connectionId: 'connection-92'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-79',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
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
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3206',
      connectionId: 'connection-2663'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-75755',
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
      },
      {
        chain1: {
          channelId: 'channel-76804',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-15',
          portId: 'icacontroller-reward-uosmo'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-76805',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-16',
          portId: 'icacontroller-sweep-uosmo'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-79080',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-22',
          portId: 'icacontroller-delegation-uosmo'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: false,
          status: 'INACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-101479',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-29',
          portId: 'icacontroller-delegation-uosmo'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-8',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-145',
      connectionId: 'connection-145'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-257',
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
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'terra2',
      chainId: 'phoenix-1',
      clientId: '07-tendermint-410',
      connectionId: 'connection-414'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-473',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-17',
          portId: 'icacontroller-delegation-uluna'
        },
        chain2: {
          channelId: 'channel-478',
          portId: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: false,
          status: 'INACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-18',
          portId: 'icacontroller-reward-uluna'
        },
        chain2: {
          channelId: 'channel-479',
          portId: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-19',
          portId: 'icacontroller-sweep-uluna'
        },
        chain2: {
          channelId: 'channel-480',
          portId: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-25',
          portId: 'icacontroller-delegation-uluna'
        },
        chain2: {
          channelId: 'channel-526',
          portId: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }
    ]
  }
];
export default info;