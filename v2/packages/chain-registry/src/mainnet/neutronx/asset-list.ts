import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'neutronx',
  assets: [{
      description: 'NTX staking and governance token',
      denomUnits: [{
          denom: 'untx',
          exponent: 0
        }, {
          denom: 'ntx',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'untx',
      name: 'NeutronX',
      display: 'ntx',
      symbol: 'NTX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutronx/images/ntx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutronx/images/ntx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutronx/images/ntx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutronx/images/ntx.svg'
        }]
    }, {
      description: 'Injective USDC on NeutronX.',
      denomUnits: [{
          denom: 'ibc/ED4C195406CEFBAC6CF3AA64BBF84292910D27B51C78D81374101F9424BC1EC1',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/ED4C195406CEFBAC6CF3AA64BBF84292910D27B51C78D81374101F9424BC1EC1',
      name: 'Injective USDC',
      display: 'usdc',
      symbol: 'USDC.inj',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a',
            channelId: 'channel-503'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingeckoId: 'usd-coin'
    }]
};
export default info;