import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'manifestdevnet',
  assets: [{
      description: 'Manifest devnet native token',
      extendedDescription: 'MFX is the foundational utility token powering the Manifest Network ecosystem - a decentralized platform bridging Web2 reliability with Web3 freedom. As the primary medium of exchange, MFX facilitates transactions across Manifest\'s privacy-first AI infrastructure, providing access to decentralized compute resources, industry-leading GPUs, blockchain-secured storage, and comprehensive deployment tools.  MFX represents more than just currency; it embodies Manifest\'s mission to democratize access to sovereign technologies and ethical AI applications, empowering developers to build scalable solutions that prioritize individual autonomy and data privacy without sacrificing performance or reliability. By holding MFX, users gain privileged access to a global network spanning multiple continents, designed for visionaries building the next generation of self-sovereign, ethical technology.',
      denomUnits: [{
          denom: 'umfx',
          exponent: 0
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      base: 'umfx',
      name: 'Manifest Devnet Token',
      display: 'mfx',
      symbol: 'MFX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://manifestai.org/',
        x: 'https://x.com/ManifestAIs/'
      }
    }, {
      description: 'Proof of Authority token for the Manifest devnet',
      denomUnits: [{
          denom: 'upoa',
          exponent: 0
        }, {
          denom: 'poa',
          exponent: 6
        }],
      base: 'upoa',
      name: 'Manifest Devnet Authority Token',
      display: 'poa',
      symbol: 'POA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;