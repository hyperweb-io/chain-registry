import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'empowertestnet',
      chainId: 'circulus-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'stargazetestnet',
      chainId: 'elgafar-1',
      clientId: '07-tendermint-450',
      connectionId: 'connection-469'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-459',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'noistestnet',
      chainId: 'nois-testnet-005',
      clientId: '07-tendermint-39',
      connectionId: 'connection-23'
    },
    chain2: {
      chainName: 'stargazetestnet',
      chainId: 'elgafar-1',
      clientId: '07-tendermint-483',
      connectionId: 'connection-500'
    },
    channels: [{
        chain1: {
          channelId: 'channel-48',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-485',
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
          channelId: 'channel-49',
          portId: 'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        chain2: {
          channelId: 'channel-486',
          portId: 'wasm.stars1h99p7u2tvz79jppjwdddmkplvcpnsh0pmatl7dqkmdhnkgx59y2q6s0x9s'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      chainId: 'osmo-test-5',
      clientId: '07-tendermint-1274',
      connectionId: 'connection-1175'
    },
    chain2: {
      chainName: 'stargazetestnet',
      chainId: 'elgafar-1',
      clientId: '07-tendermint-621',
      connectionId: 'connection-633'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4175',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-638',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'prysmdevnet',
      chainId: 'prysm-devnet-1',
      clientId: '07-tendermint-29',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'stargazetestnet',
      chainId: 'elgafar-1',
      clientId: '07-tendermint-961',
      connectionId: 'connection-954'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1005',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'stargazetestnet',
      chainId: 'elgafar-1',
      clientId: '07-tendermint-962',
      connectionId: 'connection-955'
    },
    chain2: {
      chainName: 'symphonytestnet',
      chainId: 'symphony-testnet-4',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1006',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'stargazetestnet',
      chainId: 'elgafar-1',
      clientId: '07-tendermint-764',
      connectionId: 'connection-753'
    },
    chain2: {
      chainName: 'titantestnet',
      chainId: 'titan_18889-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-807',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  }
];
export default info;