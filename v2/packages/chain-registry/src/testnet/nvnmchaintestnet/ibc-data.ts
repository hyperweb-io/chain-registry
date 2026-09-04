import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'mantrachaintestnet2',
      chainId: 'mantra-dukong-1',
      clientId: '07-tendermint-24',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'nvnmchaintestnet',
      chainId: 'nvnm-testnet-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
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
  }];
export default info;