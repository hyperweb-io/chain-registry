import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'agoric',
  assets: [
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      extendedDescription: 'Agoric leverages the popular JavaScript programming language to provide a secure and scalable platform for building decentralized applications (dApps). By using a familiar language, Agoric aims to lower the entry barriers for developers and promote the widespread adoption of blockchain technology. The platform\'s native token, BLD, is used for staking, securing the network, and governance. Agoric\'s innovative approach focuses on enabling rapid development and deployment of dApps, fostering a robust ecosystem of interoperable blockchain applications.',
      denomUnits: [{
          denom: 'ubld',
          exponent: 0
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ubld',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingeckoId: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }],
      socials: {
        website: 'https://agoric.com/',
        x: 'https://x.com/agoric'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denomUnits: [{
          denom: 'uist',
          exponent: 0
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'uist',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingeckoId: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'USD Coin issued natively on Injective by Circle',
      denomUnits: [{
          denom: 'ibc/A7BE5E1F50DE0393383EC287BDD0FDAA9B546736F7511F8E494ECB05533DAAE8',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A7BE5E1F50DE0393383EC287BDD0FDAA9B546736F7511F8E494ECB05533DAAE8',
      name: 'Injective USDC',
      display: 'usdc',
      symbol: 'USDC.inj',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a',
            channelId: 'channel-454'
          },
          chain: {
            channelId: 'channel-492',
            path: 'transfer/channel-492/erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a'
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
    },
    {
      description: 'Stride Staked TIA on Agoric',
      denomUnits: [{
          denom: 'ibc/4BFBA0996893D2049913D24060BE5936EF8AAF2C89E08B91BCCCA2B8DE3BA241',
          exponent: 0
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4BFBA0996893D2049913D24060BE5936EF8AAF2C89E08B91BCCCA2B8DE3BA241',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stutia',
            channelId: 'channel-148'
          },
          chain: {
            channelId: 'channel-59',
            path: 'transfer/channel-59/stutia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stutia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }]
    }
  ]
};
export default info;