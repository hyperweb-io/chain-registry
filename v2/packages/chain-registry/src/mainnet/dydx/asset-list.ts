import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dydx',
  assets: [
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      extendedDescription: 'DYDX is a leading decentralized trading platform specializing in derivatives and perpetual contracts. It enables users to trade with leverage, providing a sophisticated and efficient trading environment without intermediaries. Built on the Ethereum blockchain, DYDX uses smart contracts to ensure transaction security and transparency, giving users full control over their funds and trades.\n\nThe DYDX platform\'s native token, DYDX, is integral to its ecosystem, used for governance, staking, and fee discounts, incentivizing active participation. DYDX offers a wide range of trading pairs and supports advanced trading features like margin trading and lending. Combining the benefits of decentralized finance with traditional trading platform functionality, DYDX is paving the way for a more open and inclusive financial system.',
      denomUnits: [{
          denom: 'adydx',
          exponent: 0
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'adydx',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingeckoId: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        x: 'https://x.com/dYdX'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Noble USDC on dYdX Protocol.',
      denomUnits: [{
          denom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-33'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
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
    },
    {
      description: 'USD Coin issued natively on Injective by Circle',
      denomUnits: [{
          denom: 'ibc/BDC8EC8C66D3D784B2DC7E8F7DAE93A49961AE747CEEBBC7DC4BAFF564E40BD3',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BDC8EC8C66D3D784B2DC7E8F7DAE93A49961AE747CEEBBC7DC4BAFF564E40BD3',
      name: 'Injective USDC',
      display: 'usdc',
      symbol: 'USDC.inj',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a',
            channelId: 'channel-258'
          },
          chain: {
            channelId: 'channel-62',
            path: 'transfer/channel-62/erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a'
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
    }
  ]
};
export default info;