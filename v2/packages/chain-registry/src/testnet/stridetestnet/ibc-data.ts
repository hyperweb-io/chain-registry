import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'agoricdevnet',
      chainId: 'agoricdev-25',
      clientId: '07-tendermint-15',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'stridetestnet',
      chainId: 'stride-internal-1',
      clientId: '07-tendermint-68',
      connectionId: 'connection-44'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-60',
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