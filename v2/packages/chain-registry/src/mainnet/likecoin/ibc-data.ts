import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-468',
      connectionId: 'connection-386'
    },
    chain2: {
      chainName: 'likecoin',
      chainId: 'likecoin-mainnet-2',
      clientId: '07-tendermint-24',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-217',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }, {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'likecoin',
      chainId: 'likecoin-mainnet-2',
      clientId: '07-tendermint-16',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-1507',
      connectionId: 'connection-1173'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-53',
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