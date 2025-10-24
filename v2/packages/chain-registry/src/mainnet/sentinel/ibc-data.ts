import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
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
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-233',
      connectionId: 'connection-224'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-213',
      connectionId: 'connection-163'
    },
    channels: [{
        chain1: {
          channelId: 'channel-165',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-96',
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
      clientId: '07-tendermint-388',
      connectionId: 'connection-341'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-58',
      connectionId: 'connection-33'
    },
    channels: [{
        chain1: {
          channelId: 'channel-186',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: false,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-1549',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-97',
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
      clientId: '07-tendermint-63',
      connectionId: 'connection-36'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-43',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-19',
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
      chainName: 'decentr',
      chainId: 'mainnet-3',
      clientId: '07-tendermint-13',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-103',
      connectionId: 'connection-81'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-55',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'irisnet',
      chainId: 'irishub-1',
      clientId: '07-tendermint-36',
      connectionId: 'connection-28'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-54',
      connectionId: 'connection-30'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
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
      chainName: 'medasdigital',
      chainId: 'medasdigital-2',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-110',
      connectionId: 'connection-87'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-60',
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
      clientId: '07-tendermint-2',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
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
      chainName: 'regen',
      chainId: 'regen-1',
      clientId: '07-tendermint-31',
      connectionId: 'connection-29'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-56',
      connectionId: 'connection-32'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
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
      chainName: 'secretnetwork',
      chainId: 'secret-4',
      clientId: '07-tendermint-14',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-96',
      connectionId: 'connection-75'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-50',
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
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-84',
      connectionId: 'connection-58'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-88',
      connectionId: 'connection-70'
    },
    chain2: {
      chainName: 'starname',
      chainId: 'iov-mainnet-ibc',
      clientId: '07-tendermint-46',
      connectionId: 'connection-32'
    },
    channels: [{
        chain1: {
          channelId: 'channel-40',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;