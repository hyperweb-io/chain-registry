import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'bandchain',
      clientId: '07-tendermint-124',
      connectionId: 'connection-107'
    },
    chain2: {
      chainName: 'comdex',
      clientId: '07-tendermint-81',
      connectionId: 'connection-48'
    },
    channels: [{
        chain1: {
          channelId: 'channel-96',
          portId: 'oracle'
        },
        chain2: {
          channelId: 'channel-43',
          portId: 'bandoracleV1'
        },
        ordering: 'unordered',
        version: 'bandchain-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'bandchain',
      clientId: '07-tendermint-162',
      connectionId: 'connection-141'
    },
    chain2: {
      chainName: 'coreum',
      clientId: '07-tendermint-33',
      connectionId: 'connection-22'
    },
    channels: [{
        chain1: {
          channelId: 'channel-159',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-20',
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
      chainName: 'bandchain',
      clientId: '07-tendermint-94',
      connectionId: 'connection-91'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1743',
      connectionId: 'connection-1345'
    },
    channels: [{
        chain1: {
          channelId: 'channel-83',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-148',
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
      chainName: 'bandchain',
      clientId: '07-tendermint-169',
      connectionId: 'connection-150'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-146',
      connectionId: 'connection-146'
    },
    channels: [{
        chain1: {
          channelId: 'channel-161',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-258',
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