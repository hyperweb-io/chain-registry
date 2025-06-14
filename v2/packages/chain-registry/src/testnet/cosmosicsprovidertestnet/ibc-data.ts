import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      clientId: '07-tendermint-18',
      connectionId: 'connection-17'
    },
    chain2: {
      chainName: 'cosmosicsprovidertestnet',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmosicsprovidertestnet',
      clientId: '07-tendermint-159',
      connectionId: 'connection-107'
    },
    chain2: {
      chainName: 'mantrachaintestnet2',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmosicsprovidertestnet',
      clientId: '07-tendermint-290',
      connectionId: 'connection-208'
    },
    chain2: {
      chainName: 'xrplevmtestnet',
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
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }
];
export default info;