import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'bitway',
      chainId: 'bitway-1',
      clientId: '07-tendermint-31',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1440',
      connectionId: 'connection-1178'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1556',
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
      chainName: 'bitway',
      chainId: 'bitway-1',
      clientId: '07-tendermint-30',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-183',
      connectionId: 'connection-178'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-172',
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