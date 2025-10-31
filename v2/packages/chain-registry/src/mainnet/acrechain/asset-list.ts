import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'acrechain',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denomUnits: [{
          denom: 'aacre',
          exponent: 0
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'aacre',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }],
      socials: {
        website: 'https://arable.finance/',
        x: 'https://x.com/ArableProtocol'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denomUnits: [{
          denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
          exponent: 0
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }],
      socials: {
        website: 'https://arable.finance/',
        x: 'https://x.com/ArableProtocol'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Ciento Exchange Token',
      denomUnits: [{
          denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
          exponent: 0
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;