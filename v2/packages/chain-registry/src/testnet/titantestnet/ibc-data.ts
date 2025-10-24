import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      chainId: 'axelar-testnet-lisbon-3',
      clientId: '07-tendermint-1001',
      connectionId: 'connection-780'
    },
    chain2: {
      chainName: 'titantestnet',
      chainId: 'titan_18889-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-537',
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
      chainName: 'cosmoshubtestnet',
      chainId: 'theta-testnet-001',
      clientId: '07-tendermint-3237',
      connectionId: 'connection-3407'
    },
    chain2: {
      chainName: 'titantestnet',
      chainId: 'titan_18889-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3910',
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
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-293',
      connectionId: 'connection-246'
    },
    chain2: {
      chainName: 'titantestnet',
      chainId: 'titan_18889-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-208',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-2436',
      connectionId: 'connection-2267'
    },
    chain2: {
      chainName: 'titantestnet',
      chainId: 'titan_18889-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5969',
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
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'stargazetestnet',
      chainId: 'elgafar-1',
      clientId: '07-tendermint-764',
      connectionId: 'connection-753'
    },
    chain2: {
      chainName: 'titantestnet',
      chainId: 'titan_18889-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-807',
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
          status: 'INACTIVE'
        }
      }]
  }
];
export default info;