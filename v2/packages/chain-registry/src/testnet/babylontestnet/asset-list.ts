import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'babylontestnet',
  assets: [
    {
      description: 'The native staking token of Babylon.',
      denomUnits: [{
          denom: 'ubbn',
          exponent: 0
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ubbn',
      name: 'Babylon Testnet',
      display: 'BABY',
      symbol: 'BABY',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'IBC Test Token 6',
      denomUnits: [{
          denom: 'ibc/2278567FFA6D754BDD8C159CE1770D8AF27649BFB58E5132CF530460591E479D',
          exponent: 0
        }, {
          denom: 'IBC6',
          exponent: 18
        }],
      base: 'ibc/2278567FFA6D754BDD8C159CE1770D8AF27649BFB58E5132CF530460591E479D',
      name: 'IBC Test Token 6',
      display: 'IBC6',
      symbol: 'IBC6',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutrontestnet',
            baseDenom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-6',
            channelId: 'channel-1651'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-6'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'ics20'
    },
    {
      description: 'IBC Test Token 1',
      denomUnits: [{
          denom: 'ibc/241F1FFE4117C31D7DFC2A91C026F083FCEB6868C169BA5002FF0B3E17B88EDF',
          exponent: 0
        }, {
          denom: 'IBC1',
          exponent: 6
        }],
      base: 'ibc/241F1FFE4117C31D7DFC2A91C026F083FCEB6868C169BA5002FF0B3E17B88EDF',
      name: 'IBC Test Token 1',
      display: 'IBC1',
      symbol: 'IBC1',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutrontestnet',
            baseDenom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-1',
            channelId: 'channel-1651'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-1'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'ics20'
    },
    {
      description: 'IBC Test Token 5',
      denomUnits: [{
          denom: 'ibc/3AA6631D204C192DDB757935A4C49A0E83EEEE14AC045E8A180CCB4EE08B6196',
          exponent: 0
        }, {
          denom: 'IBC5',
          exponent: 18
        }],
      base: 'ibc/3AA6631D204C192DDB757935A4C49A0E83EEEE14AC045E8A180CCB4EE08B6196',
      name: 'IBC Test Token 5',
      display: 'IBC5',
      symbol: 'IBC5',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutrontestnet',
            baseDenom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-5',
            channelId: 'channel-1651'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-5'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'ics20'
    },
    {
      description: 'IBC Test Token 4',
      denomUnits: [{
          denom: 'ibc/4BF4FFBF2B84A71627E009ABFD6A870AA6424D6BA9B419D81F446FA80D3AE655',
          exponent: 0
        }, {
          denom: 'IBC4',
          exponent: 18
        }],
      base: 'ibc/4BF4FFBF2B84A71627E009ABFD6A870AA6424D6BA9B419D81F446FA80D3AE655',
      name: 'IBC Test Token 4',
      display: 'IBC4',
      symbol: 'IBC4',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutrontestnet',
            baseDenom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-4',
            channelId: 'channel-1651'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-4'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'ics20'
    },
    {
      description: 'IBC Test Token 3',
      denomUnits: [{
          denom: 'ibc/53BE513F8FEA2E000E8522CD60383AFA431F0F655EC05A1D56B7428836F3F314',
          exponent: 0
        }, {
          denom: 'IBC3',
          exponent: 6
        }],
      base: 'ibc/53BE513F8FEA2E000E8522CD60383AFA431F0F655EC05A1D56B7428836F3F314',
      name: 'IBC Test Token 3',
      display: 'IBC3',
      symbol: 'IBC3',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutrontestnet',
            baseDenom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-3',
            channelId: 'channel-1651'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-3'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'ics20'
    },
    {
      description: 'IBC Test Token 2',
      denomUnits: [{
          denom: 'ibc/DC9A0BC30A89A4C767CA2DA3BA1A4B1AB40F6666E720BB4F14213545216C86D8',
          exponent: 0
        }, {
          denom: 'IBC2',
          exponent: 6
        }],
      base: 'ibc/DC9A0BC30A89A4C767CA2DA3BA1A4B1AB40F6666E720BB4F14213545216C86D8',
      name: 'IBC Test Token 2',
      display: 'IBC2',
      symbol: 'IBC2',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutrontestnet',
            baseDenom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-2',
            channelId: 'channel-1651'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-2'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'ics20'
    },
    {
      base: 'cw20:bbn1cnx34p82zngq0uuaendsne0x4s5gsm7gpwk2es8zk8rz8tnj938qqyq8f9',
      name: 'Babylon Testnet Escher LST',
      address: 'bbn1cnx34p82zngq0uuaendsne0x4s5gsm7gpwk2es8zk8rz8tnj938qqyq8f9',
      symbol: 'eBABY',
      display: 'eBABY',
      typeAsset: 'cw20',
      denomUnits: [{
          denom: 'cw20:bbn1cnx34p82zngq0uuaendsne0x4s5gsm7gpwk2es8zk8rz8tnj938qqyq8f9',
          exponent: 0
        }, {
          denom: 'eBABY',
          exponent: 6
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/eBABY.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/eBABY.svg'
        }],
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'babylontestnet',
            baseDenom: 'ubbn'
          },
          provider: 'Escher'
        }]
    }
  ]
};
export default info;