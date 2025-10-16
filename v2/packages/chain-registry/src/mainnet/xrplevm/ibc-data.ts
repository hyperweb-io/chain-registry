import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1411',
      connectionId: 'connection-1134'
    },
    chain2: {
      chainName: 'xrplevm',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1377',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'elys',
      clientId: '07-tendermint-57',
      connectionId: 'connection-38'
    },
    chain2: {
      chainName: 'xrplevm',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-27',
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
      chainName: 'injective',
      clientId: '07-tendermint-314',
      connectionId: 'connection-314'
    },
    chain2: {
      chainName: 'xrplevm',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-436',
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
      chainName: 'noble',
      clientId: '07-tendermint-164',
      connectionId: 'connection-159'
    },
    chain2: {
      chainName: 'xrplevm',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-152',
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
      chainName: 'osmosis',
      clientId: '07-tendermint-3499',
      connectionId: 'connection-10747'
    },
    chain2: {
      chainName: 'xrplevm',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-104325',
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
  }
];
export default info;