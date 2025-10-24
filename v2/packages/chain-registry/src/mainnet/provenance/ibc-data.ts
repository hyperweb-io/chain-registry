import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-175',
      connectionId: 'connection-153'
    },
    chain2: {
      chainName: 'provenance',
      chainId: 'pio-mainnet-1',
      clientId: '07-tendermint-35',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-116',
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
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-30',
      connectionId: 'connection-37'
    },
    chain2: {
      chainName: 'provenance',
      chainId: 'pio-mainnet-1',
      clientId: '07-tendermint-36',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-20',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10',
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
      clientId: '07-tendermint-1899',
      connectionId: 'connection-1472'
    },
    chain2: {
      chainName: 'provenance',
      chainId: 'pio-mainnet-1',
      clientId: '07-tendermint-31',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-222',
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
  }
];
export default info;