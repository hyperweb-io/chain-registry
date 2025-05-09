import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chain_name: 'polygontestnet',
  assets: [
    {
      description: 'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
      denom_units: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'matic',
          exponent: 18,
          aliases: ['polygon']
        }],
      type_asset: 'evm-base',
      base: 'wei',
      name: 'Matic',
      display: 'matic',
      symbol: 'MATIC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'polygon',
            base_denom: 'wei'
          },
          provider: 'Polygon'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.svg'
      },
      coingecko_id: 'matic-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic.svg'
        }]
    },
    {
      description: 'Polygon combines the best of Ethereum and sovereign blockchains into a full-fledged multi-chain system.',
      type_asset: 'erc20',
      address: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      denom_units: [{
          denom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
          exponent: 0,
          aliases: ['wmatic-wei']
        }, {
          denom: 'wmatic',
          exponent: 18,
          aliases: ['polygon']
        }],
      base: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'polygontestnet',
            base_denom: 'wei'
          },
          provider: 'Polygon'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      coingecko_id: 'wmatic',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      type_asset: 'erc20',
      address: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
      denom_units: [{
          denom: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
          exponent: 0,
          aliases: ['uausdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      base: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
      name: 'Axelar Wrapped USD Coin',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'axelartestnet',
            base_denom: 'uausdc'
          },
          provider: 'Axelar'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'axelartestnet',
            base_denom: 'uausdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    }
  ]
};
export default info;