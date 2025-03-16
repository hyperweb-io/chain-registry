import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1106',
      connectionId: 'connection-862'
    },
    chain2: {
      chainName: 'babylontestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'babylontestnet',
      clientId: '07-tendermint-12',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'cosmoshubicstestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'babylontestnet',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'neutrontestnet',
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
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'babylontestnet',
      clientId: '07-tendermint-11',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'nobletestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  }
];
export default info;