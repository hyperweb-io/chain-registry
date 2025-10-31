import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'synternet',
  assets: [{
      description: 'Synternet is a blockchain that powers modular, interoperable data infrastructure across all major chains.',
      extendedDescription: 'The Data Layer is a decentralized, permissionless protocol built on Synternet that serves as the customizable execution layer between all blockchains, enabling developers instant access to any cross-chain data. It uses a pub-sub (publish-subscribe) framework where data providers can stream live data to applications and smart contracts',
      denomUnits: [{
          denom: 'usynt',
          exponent: 0
        }, {
          denom: 'SYNT',
          exponent: 6
        }],
      base: 'usynt',
      name: 'Synternet',
      display: 'SYNT',
      symbol: 'SYNT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg'
        }],
      socials: {
        website: 'https://www.synternet.com/',
        x: 'https://x.com/synternet_com'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;