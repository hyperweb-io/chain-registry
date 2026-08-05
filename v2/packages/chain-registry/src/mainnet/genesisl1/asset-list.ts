import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'genesisl1',
  assets: [{
      description: 'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denomUnits: [{
          denom: 'el1',
          exponent: 0
        }, {
          denom: 'l1',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'el1',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
        }],
      coingeckoId: 'genesisl1',
      socials: {
        website: 'https://genesisl1.com',
        x: 'https://x.com/genesis_L1',
        telegram: 'https://t.me/Genesis_L1'
      }
    }]
};
export default info;