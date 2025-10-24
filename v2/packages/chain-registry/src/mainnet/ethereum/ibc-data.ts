import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'composable',
      chainId: 'centauri-1',
      clientId: '08-wasm-159',
      connectionId: 'connection-70'
    },
    chain2: {
      chainName: 'ethereum',
      chainId: '1',
      clientId: '07-tendermint-11',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-52',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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