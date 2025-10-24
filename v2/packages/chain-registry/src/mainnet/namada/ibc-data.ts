import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'celestia',
      chainId: 'celestia',
      clientId: '07-tendermint-105',
      connectionId: 'connection-72'
    },
    chain2: {
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-4',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-73',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1351',
      connectionId: 'connection-1089'
    },
    chain2: {
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1317',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-11',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'neutron',
      chainId: 'neutron-1',
      clientId: '07-tendermint-168',
      connectionId: 'connection-128'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7024',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-8',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-153',
      connectionId: 'connection-143'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-136',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-10',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'nyx',
      chainId: 'nyx',
      clientId: '07-tendermint-20',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3433',
      connectionId: 'connection-10590'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-98451',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-6',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'penumbra',
      chainId: 'penumbra-1',
      clientId: '07-tendermint-18',
      connectionId: 'connection-14'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-154',
      connectionId: 'connection-157'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-308',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;