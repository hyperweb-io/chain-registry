import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'agoric',
      chainId: 'agoric-3',
      clientId: '07-tendermint-93',
      connectionId: 'connection-91'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-167',
      connectionId: 'connection-210'
    },
    channels: [{
        chain1: {
          channelId: 'channel-72',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-202',
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
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-188',
      connectionId: 'connection-174'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-169',
      connectionId: 'connection-214'
    },
    channels: [{
        chain1: {
          channelId: 'channel-127',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-213',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'chihuahua',
      chainId: 'chihuahua-1',
      clientId: '07-tendermint-207',
      connectionId: 'connection-137'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-168',
      connectionId: 'connection-212'
    },
    channels: [{
        chain1: {
          channelId: 'channel-94',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-203',
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
      clientId: '07-tendermint-123',
      connectionId: 'connection-65'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-94',
      connectionId: 'connection-75'
    },
    channels: [{
        chain1: {
          channelId: 'channel-57',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-71',
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
      clientId: '07-tendermint-391',
      connectionId: 'connection-344'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-36',
      connectionId: 'connection-30'
    },
    channels: [{
        chain1: {
          channelId: 'channel-190',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-24',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'crescent',
      chainId: 'crescent-1',
      clientId: '07-tendermint-42',
      connectionId: 'connection-41'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-88',
      connectionId: 'connection-72'
    },
    channels: [{
        chain1: {
          channelId: 'channel-30',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-68',
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
      chainName: 'cryptoorgchain',
      chainId: 'crypto-org-chain-mainnet-1',
      clientId: '07-tendermint-61',
      connectionId: 'connection-34'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-24',
      connectionId: 'connection-17'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'dydx',
      chainId: 'dydx-mainnet-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-159',
      connectionId: 'connection-197'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-131',
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
      chainName: 'gravitybridge',
      chainId: 'gravity-bridge-3',
      clientId: '07-tendermint-39',
      connectionId: 'connection-50'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-51',
      connectionId: 'connection-49'
    },
    channels: [{
        chain1: {
          channelId: 'channel-24',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-38',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-110',
      connectionId: 'connection-91'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-57',
      connectionId: 'connection-53'
    },
    channels: [{
        chain1: {
          channelId: 'channel-82',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-41',
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
      chainName: 'irisnet',
      chainId: 'irishub-1',
      clientId: '07-tendermint-34',
      connectionId: 'connection-25'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-31',
      connectionId: 'connection-25'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-19',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'juno',
      chainId: 'juno-1',
      clientId: '07-tendermint-89',
      connectionId: 'connection-51'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-49',
      connectionId: 'connection-48'
    },
    channels: [{
        chain1: {
          channelId: 'channel-33',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-37',
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
      chainName: 'kava',
      chainId: 'kava_2222-10',
      clientId: '07-tendermint-148',
      connectionId: 'connection-189'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-156',
      connectionId: 'connection-195'
    },
    channels: [{
        chain1: {
          channelId: 'channel-134',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-129',
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
      clientId: '07-tendermint-167',
      connectionId: 'connection-130'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-162',
      connectionId: 'connection-200'
    },
    channels: [{
        chain1: {
          channelId: 'channel-158',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-152',
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
      clientId: '07-tendermint-73',
      connectionId: 'connection-52'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-161',
      connectionId: 'connection-199'
    },
    channels: [{
        chain1: {
          channelId: 'channel-49',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-136',
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
      clientId: '07-tendermint-61',
      connectionId: 'connection-59'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-160',
      connectionId: 'connection-198'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-132',
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
      clientId: '07-tendermint-3',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
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
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-96',
      connectionId: 'connection-77'
    },
    chain2: {
      chainName: 'quicksilver',
      chainId: 'quicksilver-2',
      clientId: '07-tendermint-15',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-73',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-16',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-33',
      connectionId: 'connection-27'
    },
    chain2: {
      chainName: 'regen',
      chainId: 'regen-1',
      clientId: '07-tendermint-30',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-21',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-106',
      connectionId: 'connection-146'
    },
    chain2: {
      chainName: 'secretnetwork',
      chainId: 'secret-4',
      clientId: '07-tendermint-126',
      connectionId: 'connection-98'
    },
    channels: [{
        chain1: {
          channelId: 'channel-82',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-64',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }, {
        chain1: {
          channelId: 'channel-159',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-132',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-34',
      connectionId: 'connection-28'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-61',
      connectionId: 'connection-36'
    },
    channels: [{
        chain1: {
          channelId: 'channel-22',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-38',
      connectionId: 'connection-32'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-18',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-26',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-166',
      connectionId: 'connection-207'
    },
    chain2: {
      chainName: 'stargaze',
      chainId: 'stargaze-1',
      clientId: '07-tendermint-358',
      connectionId: 'connection-293'
    },
    channels: [{
        chain1: {
          channelId: 'channel-197',
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
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-39',
      connectionId: 'connection-39'
    },
    chain2: {
      chainName: 'starname',
      chainId: 'iov-mainnet-ibc',
      clientId: '07-tendermint-44',
      connectionId: 'connection-30'
    },
    channels: [{
        chain1: {
          channelId: 'channel-27',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
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
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-105',
      connectionId: 'connection-144'
    },
    chain2: {
      chainName: 'umee',
      chainId: 'umee-1',
      clientId: '07-tendermint-179',
      connectionId: 'connection-119'
    },
    channels: [{
        chain1: {
          channelId: 'channel-81',
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
  }
];
export default info;