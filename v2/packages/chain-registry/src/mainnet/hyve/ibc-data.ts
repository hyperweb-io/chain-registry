import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'hyve',
      chainId: 'hyve_7847-1',
      clientId: '07-tendermint-12',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-230',
      connectionId: 'connection-213'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-610',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }, {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'hyve',
      chainId: 'hyve_7847-1',
      clientId: '07-tendermint-11',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3739',
      connectionId: 'connection-11087'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-110655',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }];
export default info;