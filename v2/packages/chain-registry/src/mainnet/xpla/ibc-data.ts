import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-75',
      connectionId: 'connection-62'
    },
    chain2: {
      chainName: 'xpla',
      chainId: 'dimension_37-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-49',
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
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-197',
      connectionId: 'connection-182'
    },
    chain2: {
      chainName: 'xpla',
      chainId: 'dimension_37-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-137',
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
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-2875',
      connectionId: 'connection-2389'
    },
    chain2: {
      chainName: 'xpla',
      chainId: 'dimension_37-1',
      clientId: '07-tendermint-11',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1634',
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