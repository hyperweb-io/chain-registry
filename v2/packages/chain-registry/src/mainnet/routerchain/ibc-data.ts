import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      clientId: '07-tendermint-136',
      connectionId: 'connection-132'
    },
    chain2: {
      chainName: 'routerchain',
      clientId: '07-tendermint-16',
      connectionId: 'connection-17'
    },
    channels: [{
        chain1: {
          channelId: 'channel-119',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3235',
      connectionId: 'connection-2722'
    },
    chain2: {
      chainName: 'routerchain',
      clientId: '07-tendermint-7',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-79180',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-79179',
          portId: 'wasm.osmo145vur8faym70dt7a4h60jz348vxxxqwpnezdz6ee9r88a4cftsvq85dtxr'
        },
        chain2: {
          channelId: 'channel-6',
          portId: 'crosschain'
        },
        ordering: 'unordered',
        version: 'router-ibc-v1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'routerchain',
      clientId: '07-tendermint-11',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'self',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;