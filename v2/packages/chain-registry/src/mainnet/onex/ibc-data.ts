import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'kava',
      chainId: 'kava_2222-10',
      clientId: '07-tendermint-163',
      connectionId: 'connection-204'
    },
    chain2: {
      chainName: 'onex',
      chainId: 'onex-mainnet-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-145',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-98',
      connectionId: 'connection-91'
    },
    chain2: {
      chainName: 'onex',
      chainId: 'onex-mainnet-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-14'
    },
    channels: [{
        chain1: {
          channelId: 'channel-78',
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
      chainName: 'onex',
      chainId: 'onex-mainnet-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'onomy',
      chainId: 'onomy-mainnet-1',
      clientId: '07-tendermint-12',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
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
      chainName: 'onex',
      chainId: 'onex-mainnet-1',
      clientId: '07-tendermint-7',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3202',
      connectionId: 'connection-2659'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-74628',
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