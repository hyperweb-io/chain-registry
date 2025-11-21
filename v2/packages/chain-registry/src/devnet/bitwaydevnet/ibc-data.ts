import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'bitwaydevnet',
      chainId: 'bitway-devnet-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'nobletestnet',
      chainId: 'grand-1',
      clientId: '07-tendermint-592',
      connectionId: 'connection-537'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-774',
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