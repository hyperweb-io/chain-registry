import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      chainId: 'axelar-testnet-lisbon-3',
      clientId: '07-tendermint-1106',
      connectionId: 'connection-862'
    },
    chain2: {
      chainName: 'babylontestnet',
      chainId: 'bbn-test-5',
      clientId: '07-tendermint-17',
      connectionId: 'connection-15'
    },
    channels: [{
        chain1: {
          channelId: 'channel-598',
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
      chainName: 'babylontestnet',
      chainId: 'bbn-test-5',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'neutrontestnet',
      chainId: 'pion-1',
      clientId: '07-tendermint-582',
      connectionId: 'connection-522'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1651',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'babylontestnet',
      chainId: 'bbn-test-5',
      clientId: '07-tendermint-11',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-420',
      connectionId: 'connection-386'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-329',
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
      clientId: '07-tendermint-31',
      connectionId: 'connection-29'
    },
    chain2: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-4636',
      connectionId: 'connection-3994'
    },
    channels: [{
        chain1: {
          channelId: 'channel-21',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10366',
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
          channelId: 'channel-22',
          portId: 'wasm.bbn17tu5q57xdf3u4m0u8j4mnjlcwe9kt4n87fmc4cdnrkf9zungn7wsjfhts0'
        },
        chain2: {
          channelId: 'channel-10367',
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