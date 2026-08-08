import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'axiome',
  assets: [
    {
      description: 'The native token of Axiome Chain',
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'uaxm',
          exponent: 0
        }, {
          denom: 'axm',
          exponent: 6
        }],
      base: 'uaxm',
      name: 'Axiome',
      display: 'axm',
      symbol: 'AXM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/axiome.png'
      },
      coingeckoId: 'axiome',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/axiome.png'
        }]
    },
    {
      description: 'Referral Energy Token of Axiome Chain. RET is minted one to one to the referral upline when a delegation is made, grants a discount on network fees, and determines the holder\'s share of the Community Pool.',
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'uret',
          exponent: 0
        }, {
          denom: 'ret',
          exponent: 6
        }],
      base: 'uret',
      name: 'Referral Energy Token',
      display: 'ret',
      symbol: 'RET',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/ret.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/ret.png'
        }]
    },
    {
      description: 'RIP, a cw20 token on Axiome Chain',
      typeAsset: 'cw20',
      address: 'axm1sj7zrll8n6rh07hgzqtjemeeane53a68fzqzsmnyntw95w4h7z6s24683a',
      denomUnits: [{
          denom: 'cw20:axm1sj7zrll8n6rh07hgzqtjemeeane53a68fzqzsmnyntw95w4h7z6s24683a',
          exponent: 0
        }, {
          denom: 'rip',
          exponent: 6
        }],
      base: 'cw20:axm1sj7zrll8n6rh07hgzqtjemeeane53a68fzqzsmnyntw95w4h7z6s24683a',
      name: 'RIP',
      display: 'rip',
      symbol: 'RIP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/rip.png'
      },
      coingeckoId: 'rip',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/rip.png'
        }]
    },
    {
      description: 'HUNT, a cw20 token on Axiome Chain',
      typeAsset: 'cw20',
      address: 'axm1cdup3cyz9c39c3gujmf02zkp2krr7ysxs2t6ev04kt2rw80vjf5s6l4ut7',
      denomUnits: [{
          denom: 'cw20:axm1cdup3cyz9c39c3gujmf02zkp2krr7ysxs2t6ev04kt2rw80vjf5s6l4ut7',
          exponent: 0
        }, {
          denom: 'hunt',
          exponent: 6
        }],
      base: 'cw20:axm1cdup3cyz9c39c3gujmf02zkp2krr7ysxs2t6ev04kt2rw80vjf5s6l4ut7',
      name: 'HUNT',
      display: 'hunt',
      symbol: 'HUNT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/hunt.png'
      },
      coingeckoId: 'hunt-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/hunt.png'
        }]
    },
    {
      description: 'Collexium, the utility token of the Collexium NFT marketplace on Axiome Chain',
      typeAsset: 'cw20',
      address: 'axm1hfaf96lt2y2dx2cr04svej0s0srqydhncxga5lh6zlrzw77d8qzqxday46',
      denomUnits: [{
          denom: 'cw20:axm1hfaf96lt2y2dx2cr04svej0s0srqydhncxga5lh6zlrzw77d8qzqxday46',
          exponent: 0
        }, {
          denom: 'clx',
          exponent: 6
        }],
      base: 'cw20:axm1hfaf96lt2y2dx2cr04svej0s0srqydhncxga5lh6zlrzw77d8qzqxday46',
      name: 'Collexium',
      display: 'clx',
      symbol: 'CLX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/clx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axiome/images/clx.png'
        }]
    }
  ]
};
export default info;