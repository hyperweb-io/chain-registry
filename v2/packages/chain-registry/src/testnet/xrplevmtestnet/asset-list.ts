import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'xrplevmtestnet',
  assets: [{
      description: 'The native token of XRPL EVM Testnet',
      extendedDescription: 'XRP is the native token of XRPL EVM, used for gas and fees. Though originally bridged from XRPL via Axelar, this token is fully integrated into XRPL EVM as a Cosmos SDK coin and ERC-20 precompile, and is treated as the canonical native asset of the chain.',
      denomUnits: [{
          denom: 'axrp',
          exponent: 0
        }, {
          denom: 'XRP',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'axrp',
      name: 'XRP',
      display: 'XRP',
      symbol: 'XRP',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      keywords: [
        'xrpl',
        'evm',
        'testnet',
        'sidechain',
        'ripple',
        'peersyst',
        'cosmos',
        'evmos',
        'axelar',
        'xrp',
        'xrplevm'
      ],
      socials: {
        website: 'https://xrplevm.org',
        twitter: 'https://twitter.com/Peersyst'
      }
    }]
};
export default info;