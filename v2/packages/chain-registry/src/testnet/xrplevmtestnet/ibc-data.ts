import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
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
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'elystestnet',
      chainId: 'elysicstestnet-1',
      clientId: '07-tendermint-13',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'xrplevmtestnet',
      chainId: 'xrplevm_1449000-1',
      clientId: '07-tendermint-15',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
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
      chainName: 'injectivetestnet',
      chainId: 'injective-888',
      clientId: '07-tendermint-321',
      connectionId: 'connection-281'
    },
    chain2: {
      chainName: 'xrplevmtestnet',
      chainId: 'xrplevm_1449000-1',
      clientId: '07-tendermint-24',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-77038',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
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
      clientId: '07-tendermint-4629',
      connectionId: 'connection-3984'
    },
    chain2: {
      chainName: 'xrplevmtestnet',
      chainId: 'xrplevm_1449000-1',
      clientId: '07-tendermint-10',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10361',
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
  }
];
export default info;