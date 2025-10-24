import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-166',
      connectionId: 'connection-146'
    },
    chain2: {
      chainName: 'archway',
      chainId: 'archway-1',
      clientId: '07-tendermint-26',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-109',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-26',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-53',
      connectionId: 'connection-29'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-385',
      connectionId: 'connection-339'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-184',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-132',
      connectionId: 'connection-107'
    },
    chain2: {
      chainName: 'crescent',
      chainId: 'crescent-1',
      clientId: '07-tendermint-80',
      connectionId: 'connection-71'
    },
    channels: [{
        chain1: {
          channelId: 'channel-70',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-44',
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
      clientId: '07-tendermint-48',
      connectionId: 'connection-23'
    },
    chain2: {
      chainName: 'cryptoorgchain',
      chainId: 'crypto-org-chain-mainnet-1',
      clientId: '07-tendermint-65',
      connectionId: 'connection-38'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-21',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-183',
      connectionId: 'connection-171'
    },
    chain2: {
      chainName: 'doravota',
      chainId: 'vota-ash',
      clientId: '07-tendermint-17',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-125',
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
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-191',
      connectionId: 'connection-177'
    },
    chain2: {
      chainName: 'elys',
      chainId: 'elys-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-129',
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
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-44',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'irisnet',
      chainId: 'irishub-1',
      clientId: '07-tendermint-23',
      connectionId: 'connection-16'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-84',
      connectionId: 'connection-58'
    },
    chain2: {
      chainName: 'juno',
      chainId: 'juno-1',
      clientId: '07-tendermint-80',
      connectionId: 'connection-47'
    },
    channels: [{
        chain1: {
          channelId: 'channel-35',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-29',
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
      clientId: '07-tendermint-126',
      connectionId: 'connection-103'
    },
    chain2: {
      chainName: 'kujira',
      chainId: 'kaiyo-1',
      clientId: '07-tendermint-103',
      connectionId: 'connection-72'
    },
    channels: [{
        chain1: {
          channelId: 'channel-63',
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
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-119',
      connectionId: 'connection-93'
    },
    chain2: {
      chainName: 'omniflixhub',
      chainId: 'omniflixhub-1',
      clientId: '07-tendermint-42',
      connectionId: 'connection-35'
    },
    channels: [{
        chain1: {
          channelId: 'channel-61',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-25',
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
      clientId: '07-tendermint-18',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
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
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-47',
      connectionId: 'connection-22'
    },
    chain2: {
      chainName: 'regen',
      chainId: 'regen-1',
      clientId: '07-tendermint-20',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
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
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-102',
      connectionId: 'connection-69'
    },
    chain2: {
      chainName: 'secretnetwork',
      chainId: 'secret-4',
      clientId: '07-tendermint-47',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-43',
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
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-45',
      connectionId: 'connection-21'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-42',
      connectionId: 'connection-27'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-61',
      connectionId: 'connection-36'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-11',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-24',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-192',
      connectionId: 'connection-178'
    },
    chain2: {
      chainName: 'stargaze',
      chainId: 'stargaze-1',
      clientId: '07-tendermint-379',
      connectionId: 'connection-336'
    },
    channels: [{
        chain1: {
          channelId: 'channel-130',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-447',
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
      clientId: '07-tendermint-59',
      connectionId: 'connection-35'
    },
    chain2: {
      chainName: 'starname',
      chainId: 'iov-mainnet-ibc',
      clientId: '07-tendermint-29',
      connectionId: 'connection-18'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-173',
      connectionId: 'connection-159'
    },
    chain2: {
      chainName: 'terra2',
      chainId: 'phoenix-1',
      clientId: '07-tendermint-387',
      connectionId: 'connection-364'
    },
    channels: [{
        chain1: {
          channelId: 'channel-116',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-273',
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