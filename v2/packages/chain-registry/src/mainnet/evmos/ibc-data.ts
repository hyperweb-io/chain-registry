import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'acrechain',
      chainId: 'acre_9052-1',
      clientId: '07-tendermint-18',
      connectionId: 'connection-16'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-97',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
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
      chainName: 'agoric',
      chainId: 'agoric-3',
      clientId: '07-tendermint-72',
      connectionId: 'connection-66'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-116',
      connectionId: 'connection-70'
    },
    channels: [{
        chain1: {
          channelId: 'channel-57',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-85',
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
      clientId: '07-tendermint-50',
      connectionId: 'connection-31'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-69',
      connectionId: 'connection-27'
    },
    channels: [{
        chain1: {
          channelId: 'channel-22',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-21',
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
      clientId: '07-tendermint-11',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-73',
      connectionId: 'connection-29'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-23',
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
      clientId: '07-tendermint-79',
      connectionId: 'connection-49'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-134',
      connectionId: 'connection-80'
    },
    channels: [{
        chain1: {
          channelId: 'channel-26',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-106',
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
      clientId: '07-tendermint-26',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-111',
      connectionId: 'connection-66'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-82',
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
      chainName: 'coreum',
      chainId: 'coreum-mainnet-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-117',
      connectionId: 'connection-71'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-87',
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
      clientId: '07-tendermint-620',
      connectionId: 'connection-480'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-292',
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
      chainName: 'crescent',
      chainId: 'crescent-1',
      clientId: '07-tendermint-12',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-38',
      connectionId: 'connection-15'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11',
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
      clientId: '07-tendermint-1136',
      connectionId: 'connection-260'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-85',
      connectionId: 'connection-43'
    },
    channels: [{
        chain1: {
          channelId: 'channel-57',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-31',
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
      clientId: '07-tendermint-17',
      connectionId: 'connection-23'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-135',
      connectionId: 'connection-81'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-107',
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
      clientId: '07-tendermint-31',
      connectionId: 'connection-22'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-138',
      connectionId: 'connection-85'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-109',
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
      clientId: '07-tendermint-119',
      connectionId: 'connection-77'
    },
    chain2: {
      chainName: 'gateway',
      chainId: 'wormchain',
      clientId: '07-tendermint-10',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-94',
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
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-17',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'gravitybridge',
      chainId: 'gravity-bridge-3',
      clientId: '07-tendermint-108',
      connectionId: 'connection-106'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-65',
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
      clientId: '07-tendermint-19',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-112',
      connectionId: 'connection-92'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-83',
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
      clientId: '07-tendermint-113',
      connectionId: 'connection-67'
    },
    chain2: {
      chainName: 'kava',
      chainId: 'kava_2222-10',
      clientId: '07-tendermint-120',
      connectionId: 'connection-157'
    },
    channels: [{
        chain1: {
          channelId: 'channel-83',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-117',
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
      clientId: '07-tendermint-53',
      connectionId: 'connection-21'
    },
    chain2: {
      chainName: 'kujira',
      chainId: 'kaiyo-1',
      clientId: '07-tendermint-25',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-18',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-23',
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
      clientId: '07-tendermint-142',
      connectionId: 'connection-89'
    },
    chain2: {
      chainName: 'lava',
      chainId: 'lava-mainnet-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-14'
    },
    channels: [{
        chain1: {
          channelId: 'channel-117',
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
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-106',
      connectionId: 'connection-63'
    },
    chain2: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-12',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-64',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
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
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-1840',
      connectionId: 'connection-1440'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-204',
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
      clientId: '07-tendermint-50',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'secretnetwork',
      chainId: 'secret-4',
      clientId: '07-tendermint-42',
      connectionId: 'connection-24'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
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
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-41',
      connectionId: 'connection-17'
    },
    chain2: {
      chainName: 'stargaze',
      chainId: 'stargaze-1',
      clientId: '07-tendermint-173',
      connectionId: 'connection-104'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
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
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-88',
      connectionId: 'connection-46'
    },
    chain2: {
      chainName: 'tgrade',
      chainId: 'tgrade-mainnet-1',
      clientId: '07-tendermint-8',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-34',
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
  }
];
export default info;