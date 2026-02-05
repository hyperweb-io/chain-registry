import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1467',
      connectionId: 'connection-1205'
    },
    chain2: {
      chainName: 'divine',
      chainId: 'divine-1',
      clientId: '07-tendermint-14',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1742',
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
  }, {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'divine',
      chainId: 'divine-1',
      clientId: '07-tendermint-10',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3667',
      connectionId: 'connection-11030'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-108909',
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