import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-18',
      connectionId: 'connection-17'
    },
    chain2: {
      chainName: 'cosmosicsprovidertestnet',
      chainId: 'provider',
      clientId: '07-tendermint-311',
      connectionId: 'connection-224'
    },
    channels: [{
        chain1: {
          channelId: 'channel-25',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-388',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'babylontestnet',
      chainId: 'bbn-test-5',
      clientId: '07-tendermint-12',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'cosmosicsprovidertestnet',
      chainId: 'provider',
      clientId: '07-tendermint-248',
      connectionId: 'connection-179'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-347',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmosicsprovidertestnet',
      chainId: 'provider',
      clientId: '07-tendermint-159',
      connectionId: 'connection-107'
    },
    chain2: {
      chainName: 'mantrachaintestnet2',
      chainId: 'mantra-dukong-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-241',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmosicsprovidertestnet',
      chainId: 'provider',
      clientId: '07-tendermint-374',
      connectionId: 'connection-260'
    },
    chain2: {
      chainName: 'outbedevnet',
      chainId: 'outbe-devnet-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-500',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmosicsprovidertestnet',
      chainId: 'provider',
      clientId: '07-tendermint-290',
      connectionId: 'connection-208'
    },
    chain2: {
      chainName: 'xrplevmtestnet',
      chainId: 'xrplevm_1449000-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-374',
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
  }
];
export default info;