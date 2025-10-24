import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'acrechain',
      chainId: 'acre_9052-1',
      clientId: '07-tendermint-14',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-70',
      connectionId: 'connection-48'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-57',
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
      chainName: 'agoric',
      chainId: 'agoric-3',
      clientId: '07-tendermint-74',
      connectionId: 'connection-68'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-129',
      connectionId: 'connection-118'
    },
    channels: [{
        chain1: {
          channelId: 'channel-59',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-148',
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
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-93',
      connectionId: 'connection-78'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-75',
      connectionId: 'connection-60'
    },
    channels: [{
        chain1: {
          channelId: 'channel-64',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-69',
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
      chainName: 'bandchain',
      chainId: 'laozi-mainnet',
      clientId: '07-tendermint-169',
      connectionId: 'connection-150'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-146',
      connectionId: 'connection-146'
    },
    channels: [{
        chain1: {
          channelId: 'channel-161',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-258',
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
      chainName: 'carbon',
      chainId: 'carbon-1',
      clientId: '07-tendermint-13',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-40',
      connectionId: 'connection-27'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-47',
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
      clientId: '07-tendermint-0',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-137',
      connectionId: 'connection-125'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-162',
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
      chainName: 'comdex',
      chainId: 'comdex-1',
      clientId: '07-tendermint-83',
      connectionId: 'connection-50'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-41',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-45',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-49',
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
      chainName: 'composable',
      chainId: 'centauri-1',
      clientId: '07-tendermint-14',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-126',
      connectionId: 'connection-116'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-134',
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
      clientId: '07-tendermint-913',
      connectionId: 'connection-635'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-391',
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
      chainName: 'crescent',
      chainId: 'crescent-1',
      clientId: '07-tendermint-38',
      connectionId: 'connection-39'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-44',
      connectionId: 'connection-30'
    },
    channels: [{
        chain1: {
          channelId: 'channel-29',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-51',
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
      chainName: 'dungeon1',
      chainId: 'dungeon-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-148',
      connectionId: 'connection-149'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-287',
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
      chainName: 'dydx',
      chainId: 'dydx-mainnet-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-133',
      connectionId: 'connection-123'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-160',
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
      chainName: 'dymension',
      chainId: 'dymension_1100-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-140',
      connectionId: 'connection-131'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-197',
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
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-77',
      connectionId: 'connection-33'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-8',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-25',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
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
      chainName: 'haqq',
      chainId: 'haqq_11235-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-143',
      connectionId: 'connection-143'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-240',
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
      clientId: '07-tendermint-131',
      connectionId: 'connection-103'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-89',
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
      chainName: 'juno',
      chainId: 'juno-1',
      clientId: '07-tendermint-263',
      connectionId: 'connection-205'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-31',
      connectionId: 'connection-19'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-139',
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
      },
      {
        chain1: {
          channelId: 'channel-202',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-48',
          portId: 'icacontroller-juno-1.DELEGATION'
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
          channelId: 'channel-143',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-26',
          portId: 'icacontroller-juno-1.FEE'
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
          channelId: 'channel-142',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-27',
          portId: 'icacontroller-juno-1.WITHDRAWAL'
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
          channelId: 'channel-140',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-28',
          portId: 'icacontroller-juno-1.REDEMPTION'
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
      chainName: 'kopi',
      chainId: 'luwak-1',
      clientId: '07-tendermint-26',
      connectionId: 'connection-46'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-161',
      connectionId: 'connection-170'
    },
    channels: [{
        chain1: {
          channelId: 'channel-18',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-322',
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
      chainName: 'kujira',
      chainId: 'kaiyo-1',
      clientId: '07-tendermint-37',
      connectionId: 'connection-31'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-32',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-8',
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
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-154',
      connectionId: 'connection-157'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-308',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'neutron',
      chainId: 'neutron-1',
      clientId: '07-tendermint-18',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-125',
      connectionId: 'connection-113'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-123',
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
      clientId: '07-tendermint-2119',
      connectionId: 'connection-1657'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-326',
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
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-83',
      connectionId: 'connection-71'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-54',
      connectionId: 'connection-33'
    },
    channels: [{
        chain1: {
          channelId: 'channel-67',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-53',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
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
      chainName: 'saga',
      chainId: 'ssc-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-142',
      connectionId: 'connection-142'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-213',
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
      chainName: 'secretnetwork',
      chainId: 'secret-4',
      clientId: '07-tendermint-75',
      connectionId: 'connection-40'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-37',
      connectionId: 'connection-25'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-40',
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
      chainName: 'sommelier',
      chainId: 'sommelier-3',
      clientId: '07-tendermint-60',
      connectionId: 'connection-75'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-131',
      connectionId: 'connection-122'
    },
    channels: [{
        chain1: {
          channelId: 'channel-71',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-150',
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
      chainName: 'stargaze',
      chainId: 'stargaze-1',
      clientId: '07-tendermint-195',
      connectionId: 'connection-128'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-30',
      connectionId: 'connection-18'
    },
    channels: [{
        chain1: {
          channelId: 'channel-106',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-19',
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
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-51',
      connectionId: 'connection-32'
    },
    chain2: {
      chainName: 'terra2',
      chainId: 'phoenix-1',
      clientId: '07-tendermint-87',
      connectionId: 'connection-72'
    },
    channels: [{
        chain1: {
          channelId: 'channel-52',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-46',
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
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-32',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'umee',
      chainId: 'umee-1',
      clientId: '07-tendermint-64',
      connectionId: 'connection-45'
    },
    channels: [{
        chain1: {
          channelId: 'channel-29',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-34',
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