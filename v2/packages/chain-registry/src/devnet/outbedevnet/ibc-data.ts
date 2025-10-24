import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmosicsprovidertestnet',
      chainId: 'provider',
      clientId: '07-tendermint-374',
      connectionId: 'connection-260'
    },
    chain2: {
      chainName: 'outbedevnet',
      chainId: 'outbe-devnet-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-500',
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
  }];
export default info;