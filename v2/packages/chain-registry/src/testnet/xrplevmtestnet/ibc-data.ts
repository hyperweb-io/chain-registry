import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'elystestnet',
      clientId: '07-tendermint-13',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'xrplevmtestnet',
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
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4629',
      connectionId: 'connection-3984'
    },
    chain2: {
      chainName: 'xrplevmtestnet',
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
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }
];
export default info;