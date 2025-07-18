import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'stratos',
  assets: [{
      description: 'STOS coin is the native token for the Stratos Blockchain. Stratos is a pioneering decentralized infrastructure service provider, revolutionizing AI and DePIN with advanced decentralized solutions in storage, computing, databases, and blockchain services. We empower Web 3.0 developers and dApps through our scalable, reliable, and high-performance networks.',
      extendedDescription: 'By spearheading the next generation of decentralized data mesh, Stratos enhances blockchain scalability while upholding the core benefits of a distributed protocol—data ownership, traceability, verifiability, and privacy. Embrace the future of Web 3.0 with Stratos, where cutting-edge innovation meets seamless decentralization. The Stratos Decentralized Storage Network enables projects to break free from centralized dependencies, offering robust storage solutions that enhance performance and decentralization. Surpassing centralized cloud services like Google Drive, our Proof-of-Traffic consensus mechanism rewards network node providers based on real-time file usage. Since launching the Stratos blockchain and decentralized storage mainnet in September 2023, over 800 active storage resource nodes worldwide have contributed to a total capacity nearing 14 PB. Additionally, our videostreaming API service allows your platform to stream live events and content smoothly and securely.',
      denomUnits: [
        {
          denom: 'wei',
          exponent: 0
        },
        {
          denom: 'gwei',
          exponent: 9
        },
        {
          denom: 'stos',
          exponent: 18
        }
      ],
      base: 'wei',
      name: 'Stratos',
      display: 'stos',
      symbol: 'STOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg'
      },
      coingeckoId: 'stratos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stratos/images/stratos.svg',
          theme: {
            primaryColorHex: '#04847c'
          }
        }],
      socials: {
        website: 'https://www.thestratos.org/',
        twitter: 'https://x.com/Stratos_Network',
        discord: 'https://discord.gg/tpQGpC2nMh',
        telegram: 'https://t.me/StratosOfficial',
        reddit: 'https://www.reddit.com/r/stratoscommunity/',
        github: 'https://github.com/stratosnet',
        medium: 'https://stratos-network.medium.com/'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;