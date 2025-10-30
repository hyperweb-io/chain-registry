import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'ethereum',
  assets: [
    {
      description: 'Ethereum is a decentralized blockchain platform for running smart contracts and dApps, with Ether (ETH) as its native cryptocurrency, enabling a versatile ecosystem beyond just digital currency.',
      extendedDescription: 'Ethereum, symbolized as ETH, is a groundbreaking cryptocurrency and blockchain platform introduced in 2015 by a team led by Vitalik Buterin. Unlike Bitcoin, which primarily serves as a digital currency, Ethereum is designed to be a decentralized platform for running smart contracts and decentralized applications (dApps). These smart contracts are self-executing contracts with the terms directly written into code, enabling trustless and automated transactions without intermediaries. Ethereum\'s blockchain can host a wide variety of applications, from financial services to gaming, making it a versatile and powerful tool in the world of blockchain technology.\n\nOne of the most notable features of Ethereum is its native cryptocurrency, Ether (ETH), which is used to pay for transaction fees and computational services on the network. Ethereum has also been the backbone for the explosive growth of decentralized finance (DeFi), which seeks to recreate traditional financial systems with blockchain-based alternatives. Additionally, Ethereum is undergoing a significant upgrade known as Ethereum 2.0, which aims to improve scalability, security, and energy efficiency through a shift from proof-of-work (PoW) to proof-of-stake (PoS) consensus mechanisms. This transition is expected to enhance the network\'s performance and reduce its environmental impact, further solidifying Ethereum\'s position as a leading platform in the blockchain ecosystem.',
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
          denom: 'eth',
          exponent: 18,
          aliases: ['ether']
        }
      ],
      typeAsset: 'evm-base',
      base: 'wei',
      name: 'Ether',
      display: 'eth',
      symbol: 'ETH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      coingeckoId: 'ethereum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }]
    },
    {
      description: 'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      typeAsset: 'erc20',
      address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      denomUnits: [{
          denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
          exponent: 0,
          aliases: ['aave-wei']
        }, {
          denom: 'aave',
          exponent: 18
        }],
      base: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      coingeckoId: 'aave',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }]
    },
    {
      description: 'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      typeAsset: 'erc20',
      address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
      denomUnits: [{
          denom: '0x4d224452801aced8b2f0aebe155379bb5d594381',
          exponent: 0,
          aliases: ['ape-wei']
        }, {
          denom: 'ape',
          exponent: 18
        }],
      base: '0x4d224452801aced8b2f0aebe155379bb5d594381',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.png'
      },
      coingeckoId: 'apecoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.png'
        }]
    },
    {
      description: 'Axie Infinity is a Pokémon-inspired digital pet universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).',
      typeAsset: 'erc20',
      address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
      denomUnits: [{
          denom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
          exponent: 0,
          aliases: ['axs-wei']
        }, {
          denom: 'axs',
          exponent: 18
        }],
      base: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      coingeckoId: 'axie-infinity',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        }]
    },
    {
      description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      typeAsset: 'erc20',
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      denomUnits: [{
          denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      base: '0x6b175474e89094c44da98b954eedeac495271d0f',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'MakerDAO'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      coingeckoId: 'dai',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'sDAI is a liquid representation of DAI deposited in the Dai savings rate contract.',
      typeAsset: 'erc20',
      address: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
      denomUnits: [{
          denom: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
          exponent: 0,
          aliases: ['sdai-wei']
        }, {
          denom: 'sdai',
          exponent: 18
        }],
      base: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
      name: 'Savings Dai',
      display: 'sdai',
      symbol: 'sDAI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'MakerDAO'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
        }]
    },
    {
      description: 'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      typeAsset: 'erc20',
      address: '0x853d955acef822db058eb8505911ed77f175b99e',
      denomUnits: [{
          denom: '0x853d955acef822db058eb8505911ed77f175b99e',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      base: '0x853d955acef822db058eb8505911ed77f175b99e',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Frax Protocol'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      coingeckoId: 'frax',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      typeAsset: 'erc20',
      address: '0x514910771af9ca656af840dff83e8264ecf986ca',
      denomUnits: [{
          denom: '0x514910771af9ca656af840dff83e8264ecf986ca',
          exponent: 0,
          aliases: ['link-wei']
        }, {
          denom: 'link',
          exponent: 18
        }],
      base: '0x514910771af9ca656af840dff83e8264ecf986ca',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      coingeckoId: 'chainlink',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        }]
    },
    {
      description: 'Maker is a decentralized finance (DeFi) platform on the Ethereum blockchain that facilitates the creation of the stablecoin DAI, which is pegged to the US dollar.',
      extendedDescription: 'Maker is a leading DeFi platform on Ethereum, known for its stablecoin DAI, which is soft-pegged to the US dollar. Users can generate DAI by locking collateral such as ETH in Maker Vaults. The Maker Protocol, governed by the MKR token holders, ensures the stability and security of DAI through decentralized governance mechanisms. MKR tokens are used for voting on governance proposals and for recapitalizing the system if necessary. Maker has become a cornerstone of the DeFi ecosystem, providing a reliable and decentralized stablecoin for various financial applications.',
      typeAsset: 'erc20',
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      denomUnits: [{
          denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
          exponent: 0,
          aliases: ['mkr-wei']
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      base: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      coingeckoId: 'maker',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }]
    },
    {
      description: 'RAI is a non-pegged, ETH-backed stable asset. It is useful as more \'stable\' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.',
      typeAsset: 'erc20',
      address: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
      denomUnits: [{
          denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
          exponent: 0,
          aliases: ['rai-wei']
        }, {
          denom: 'rai',
          exponent: 18
        }],
      base: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'RAI Finance'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.png'
      },
      coingeckoId: 'rai',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.png'
        }]
    },
    {
      description: 'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      typeAsset: 'erc20',
      address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
      denomUnits: [{
          denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
          exponent: 0,
          aliases: ['shib-wei']
        }, {
          denom: 'shib',
          exponent: 18
        }],
      base: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      coingeckoId: 'shiba-inu',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        }]
    },
    {
      description: 'stETH is a token that represents staked ether in Lido, combining the value of initial deposit + staking rewards. stETH tokens are pegged 1:1 to the ETH staked with Lido and can be used as one would use ether, allowing users to earn Eth2 staking rewards whilst benefiting from Defi yields.',
      typeAsset: 'erc20',
      address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      denomUnits: [{
          denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
          exponent: 0,
          aliases: ['steth-wei']
        }, {
          denom: 'steth',
          exponent: 18
        }],
      base: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Lido'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      },
      coingeckoId: 'staked-ether',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        }]
    },
    {
      description: 'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      typeAsset: 'erc20',
      address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      denomUnits: [{
          denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          exponent: 0,
          aliases: ['wsteth-wei']
        }, {
          denom: 'wsteth',
          exponent: 18
        }],
      base: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      name: 'Wrapped Lido Staked Ether',
      display: 'wsteth',
      symbol: 'wstETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        }],
      coingeckoId: 'wrapped-steth',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }]
    },
    {
      description: 'Frax Ether is a liquid ETH staking derivative designed to uniquely leverage the Frax Finance ecosystem. frxETH acts as a stablecoin loosely pegged to ETH, leveraging Frax\'s winning playbook on stablecoins and onboarding ETH into the Frax ecosystem.',
      typeAsset: 'erc20',
      address: '0x5e8422345238f34275888049021821e8e08caa1f',
      denomUnits: [{
          denom: '0x5e8422345238f34275888049021821e8e08caa1f',
          exponent: 0,
          aliases: ['frxeth-wei']
        }, {
          denom: 'frxeth',
          exponent: 18
        }],
      base: '0x5e8422345238f34275888049021821e8e08caa1f',
      name: 'Frax Ether',
      display: 'frxeth',
      symbol: 'frxETH',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Frax'
        }],
      coingeckoId: 'frax-ether',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg'
      }
    },
    {
      description: 'sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one becomes eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.',
      typeAsset: 'erc20',
      address: '0xac3e018457b222d93114458476f3e3416abbe38f',
      denomUnits: [{
          denom: '0xac3e018457b222d93114458476f3e3416abbe38f',
          exponent: 0,
          aliases: ['sfrxeth-wei']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      base: '0xac3e018457b222d93114458476f3e3416abbe38f',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Frax'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      coingeckoId: 'staked-frax-ether',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      description: 'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      typeAsset: 'erc20',
      address: '0xae78736cd615f374d3085123a210448e74fc6393',
      denomUnits: [{
          denom: '0xae78736cd615f374d3085123a210448e74fc6393',
          exponent: 0,
          aliases: ['reth-wei']
        }, {
          denom: 'reth',
          exponent: 18
        }],
      base: '0xae78736cd615f374d3085123a210448e74fc6393',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Rocket Pool'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      coingeckoId: 'rocket-pool-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }]
    },
    {
      description: 'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      typeAsset: 'erc20',
      address: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
      denomUnits: [{
          denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
          exponent: 0,
          aliases: ['cbeth-wei']
        }, {
          denom: 'cbeth',
          exponent: 18
        }],
      base: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Coinbase'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      coingeckoId: 'coinbase-wrapped-staked-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }]
    },
    {
      description: 'UNI token served as governance token for Uniswap protocol with 1 billion UNI have been minted at genesis. 60% of the UNI genesis supply is allocated to Uniswap community members and remaining for team, investors and advisors.',
      typeAsset: 'erc20',
      address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      denomUnits: [{
          denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
          exponent: 0,
          aliases: ['uni-wei']
        }, {
          denom: 'uni',
          exponent: 18
        }],
      base: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      coingeckoId: 'uniswap',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }]
    },
    {
      description: 'USDC (USD Coin) is a stablecoin fully backed by US dollars, providing a transparent and regulated digital dollar solution.',
      extendedDescription: 'USD Coin (USDC) was launched in 2018 as a joint effort between Coinbase and Circle. USDC is a fully reserved stablecoin, meaning each token is backed 1:1 by US dollars held in reserve. This structure is designed to provide transparency and trust, reinforced by regular audits from reputable third-party firms. Initially built on the Ethereum blockchain, USDC has expanded to support multiple blockchain networks, including Algorand, Solana, and more. It is widely used in DeFi protocols, as collateral, and for international transactions, offering a stable and compliant digital dollar solution.',
      typeAsset: 'erc20',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      denomUnits: [{
          denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingeckoId: 'usd-coin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'USDT (Tether) is a stablecoin that is pegged to the US dollar, designed to provide stability and liquidity within the cryptocurrency market.',
      extendedDescription: 'Tether (USDT) is a pioneering stablecoin introduced in 2014 by Tether Limited. It aims to provide stability and liquidity by maintaining a 1:1 value ratio with the US dollar. USDT operates across multiple blockchain platforms, including Ethereum, Tron, and others, enhancing its accessibility and interoperability. It is widely used for trading, hedging against market volatility, and facilitating quick transfers between exchanges. Despite facing scrutiny over its transparency and backing reserves, USDT remains a cornerstone in the crypto market, offering a stable digital asset that bridges traditional finance and cryptocurrencies.',
      typeAsset: 'erc20',
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      denomUnits: [{
          denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        }],
      coingeckoId: 'tether',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.png',
          theme: {
            circle: false
          }
        }],
      socials: {
        website: 'https://tether.to/',
        twitter: 'https://x.com/Tether_to'
      }
    },
    {
      description: 'Wrapped Bitcoin (WBTC) is an ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
      typeAsset: 'erc20',
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      denomUnits: [{
          denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      base: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      coingeckoId: 'wrapped-bitcoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }]
    },
    {
      description: 'wETH is \'wrapped ETH\'',
      typeAsset: 'erc20',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      denomUnits: [{
          denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      coingeckoId: 'weth',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'Chain is a cloud blockchain protocol that enables organizations to build better financial services from the ground up powered by Sequence and Chain Core.',
      typeAsset: 'erc20',
      address: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
      denomUnits: [{
          denom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
          exponent: 0,
          aliases: ['xcn-wei']
        }, {
          denom: 'xcn',
          exponent: 18
        }],
      base: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.png'
      },
      coingeckoId: 'chain-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.png'
        }]
    },
    {
      description: 'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      typeAsset: 'erc20',
      address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      denomUnits: [{
          denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
          exponent: 0,
          aliases: ['busd-wei']
        }, {
          denom: 'busd',
          exponent: 18
        }],
      base: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Binance'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      coingeckoId: 'binance-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
        }]
    },
    {
      description: 'Pepe is a community based memecoin with one mission: to make memecoins great again. Made to honor the iconic meme we all know and love, Pepe is here to take reign as the most memeable memecoin in existence, fueled purely by memetic power. Pepe is for the people.',
      typeAsset: 'erc20',
      address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
      denomUnits: [{
          denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
          exponent: 0,
          aliases: ['pepe-wei']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      base: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      coingeckoId: 'pepe',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }],
      keywords: ['meme']
    },
    {
      description: 'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      typeAsset: 'erc20',
      address: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
      denomUnits: [{
          denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
          exponent: 0
        }, {
          denom: 'YieldETH',
          exponent: 18
        }],
      base: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Seven Seas & DeFine Logic Labs'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      coingeckoId: 'yieldeth-sommelier',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }]
    },
    {
      description: 'TBTC replaces centralized intermediaries with a randomly selected group of nodes on the Threshold Network. This group of independent nodes works together to secure your deposited Bitcoin through threshold cryptography. TBTC allows anyone to use Bitcoin in the expanding DeFi and Web3 universe.',
      denomUnits: [{
          denom: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
          exponent: 0,
          aliases: []
        }, {
          denom: 'tBTC',
          exponent: 18,
          aliases: []
        }],
      typeAsset: 'erc20',
      address: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
      base: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
      display: 'tBTC',
      name: 'tBTC v2',
      symbol: 'tBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Threshold Network'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
      },
      coingeckoId: 'tbtc',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
        }]
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denomUnits: [{
          denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
          exponent: 0,
          aliases: []
        }, {
          denom: 'pstake',
          exponent: 18,
          aliases: []
        }],
      typeAsset: 'erc20',
      address: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
      base: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
      display: 'pstake',
      name: 'pSTAKE Finance',
      symbol: 'PSTAKE',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'uxprt'
          },
          provider: 'Persistence'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      coingeckoId: 'pstake-finance',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }]
    },
    {
      description: 'The OCC token acts as the fuel for the OccamRazer launchpad and it is indirectly used as well on the DAO governance layer.',
      typeAsset: 'erc20',
      address: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      denomUnits: [{
          denom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
          exponent: 0,
          aliases: []
        }, {
          denom: 'occ',
          exponent: 18
        }],
      base: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      name: 'OccamFi',
      display: 'occ',
      symbol: 'OCC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
      },
      coingeckoId: 'occamfi',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
        }]
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      typeAsset: 'erc20',
      address: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      denomUnits: [{
          denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
          exponent: 0,
          aliases: []
        }, {
          denom: 'page',
          exponent: 8
        }],
      base: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      coingeckoId: 'page',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }]
    },
    {
      description: 'Gelotto blends gaming, DEFI, and fun Dapps in a unique Web3 ecosystem. Join us to become part of the house, earning from all Gelotto products. Our main goal? To bring the masses into Web3 with open, accessible, and enjoyable Dapps.',
      typeAsset: 'erc20',
      address: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      denomUnits: [{
          denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
          exponent: 0,
          aliases: []
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
      denomUnits: [{
          denom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
          exponent: 0,
          aliases: []
        }, {
          denom: 'ox',
          exponent: 18
        }],
      base: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
      name: 'Open Exchange Token',
      display: 'ox',
      symbol: 'OX',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
        }]
    },
    {
      description: 'BEAST: Battle, Breed, and Customize unique creatures powered by Ethereum & Cosmos',
      extendedDescription: 'A monster breeding & battling game with a twist. Each game interaction burns $BEAST tokens, adding a strategic depth to breeding, battling, and customization. Dive into a world where every move counts!',
      typeAsset: 'erc20',
      address: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
      denomUnits: [{
          denom: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
          exponent: 0,
          aliases: []
        }, {
          denom: 'beast',
          exponent: 6
        }],
      base: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
      name: 'Gelotto BEAST',
      display: 'beast',
      symbol: 'BEAST',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
        }]
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      extendedDescription: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS. PUNDIX has several core use cases, including:\n- Payment for goods and services from merchants through XPOS\n- Gas Fee on PundiX Chain\n- Listing tokens in the XPOS\n- Merchant payments for loyalty programs and ads',
      typeAsset: 'erc20',
      address: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      denomUnits: [{
          denom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
          exponent: 0
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      base: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      coingeckoId: 'pundi-x-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
        }],
      socials: {
        website: 'https://pundix.com',
        twitter: 'https://x.com/PundiXLabs'
      }
    },
    {
      description: 'Staked FRAX (sFRAX) is an ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins.',
      typeAsset: 'erc20',
      address: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
      denomUnits: [{
          denom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
          exponent: 0,
          aliases: ['sfrax-wei']
        }, {
          denom: 'sfrax',
          exponent: 18
        }],
      base: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
      name: 'Staked FRAX',
      display: 'sfrax',
      symbol: 'sFRAX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Frax'
        }],
      coingeckoId: 'staked-frax',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg'
      }
    },
    {
      description: 'FXS is the value accrual and governance token of the entire Frax ecosystem. Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC.',
      typeAsset: 'erc20',
      address: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      denomUnits: [{
          denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
          exponent: 0,
          aliases: ['fxs-wei']
        }, {
          denom: 'fxs',
          exponent: 18
        }],
      base: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      name: 'Frax Share',
      display: 'fxs',
      symbol: 'FXS',
      coingeckoId: 'frax-share',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
      }
    },
    {
      description: 'PAX Gold (PAXG) tokens each represent one fine troy ounce of an LBMA-certified, London Good Delivery physical gold bar, secured in Brink’s vaults.',
      typeAsset: 'erc20',
      address: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      denomUnits: [{
          denom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
          exponent: 0,
          aliases: ['paxg-wei']
        }, {
          denom: 'paxg',
          exponent: 18
        }],
      base: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      name: 'Paxos Gold',
      display: 'paxg',
      symbol: 'PAXG',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'comex',
            baseDenom: 'XAU'
          },
          provider: 'Paxos'
        }],
      coingeckoId: 'pax-gold',
      socials: {
        website: 'https://www.paxos.com/paxgold/',
        twitter: 'https://twitter.com/paxosglobal'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
      }
    },
    {
      description: 'CRV is the governance token for Curve Finance.',
      typeAsset: 'erc20',
      address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      denomUnits: [{
          denom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
          exponent: 0,
          aliases: ['crv-wei']
        }, {
          denom: 'crv',
          exponent: 18
        }],
      base: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      name: 'Curve DAO',
      display: 'crv',
      symbol: 'CRV',
      coingeckoId: 'curve-dao-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png'
      }
    },
    {
      description: 'A collateralized-debt-position (CDP) stablecoin by Curve DAO.',
      typeAsset: 'erc20',
      address: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
      denomUnits: [{
          denom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
          exponent: 0,
          aliases: ['crvusd-wei']
        }, {
          denom: 'crvusd',
          exponent: 18
        }],
      base: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
      name: 'crvUSD',
      display: 'crvusd',
      symbol: 'crvUSD',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Curve Finance'
        }],
      coingeckoId: 'crvusd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png'
      }
    },
    {
      description: 'pxETH is built on top of the Pirex platform and forms the foundation of the Dinero protocol.',
      typeAsset: 'erc20',
      address: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
      denomUnits: [{
          denom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
          exponent: 0,
          aliases: ['pxeth-wei']
        }, {
          denom: 'pxeth',
          exponent: 18
        }],
      base: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
      name: 'Dinero Staked ETH',
      display: 'pxeth',
      symbol: 'pxETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Dinero'
        }],
      coingeckoId: 'dinero-staked-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png'
      }
    },
    {
      description: 'eETH is a natively restaked liquid staking token on Ethereum.',
      typeAsset: 'erc20',
      address: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      denomUnits: [{
          denom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
          exponent: 0,
          aliases: ['eeth-wei']
        }, {
          denom: 'eeth',
          exponent: 18
        }],
      base: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      name: 'ether.fi Staked ETH',
      display: 'eeth',
      symbol: 'eETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'EtherFi'
        }],
      coingeckoId: 'ether-fi-staked-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png'
      }
    },
    {
      description: 'The native governance token of Ethena.',
      typeAsset: 'erc20',
      address: '0x57e114b691db790c35207b2e685d4a43181e6061',
      denomUnits: [{
          denom: '0x57e114b691db790c35207b2e685d4a43181e6061',
          exponent: 0,
          aliases: ['ena-wei']
        }, {
          denom: 'ena',
          exponent: 18
        }],
      base: '0x57e114b691db790c35207b2e685d4a43181e6061',
      name: 'Ethena',
      display: 'ena',
      symbol: 'ENA',
      coingeckoId: 'ethena',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png'
      }
    },
    {
      description: 'Ethena USDe is a synthetic dollar protocol built on Ethereum.',
      typeAsset: 'erc20',
      address: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      denomUnits: [{
          denom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
          exponent: 0,
          aliases: ['usde-wei']
        }, {
          denom: 'usde',
          exponent: 18
        }],
      base: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      name: 'Ethena USDe',
      display: 'usde',
      symbol: 'USDe',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Ethena'
        }],
      coingeckoId: 'ethena-usde',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png'
      }
    },
    {
      description: 'A Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer.',
      typeAsset: 'erc20',
      address: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
      denomUnits: [{
          denom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
          exponent: 0,
          aliases: ['ezeth-wei']
        }, {
          denom: 'ezeth',
          exponent: 18
        }],
      base: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
      name: 'Renzo Restaked ETH',
      display: 'ezeth',
      symbol: 'ezETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Renzo'
        }],
      coingeckoId: 'renzo-restaked-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png'
      }
    },
    {
      description: 'Ankr is a Web3 decentralized infrastructure provider that helps developers, dapps, and stakers easily interact with multiple blockchains. It allows you to create DApps using API and RPC, staking on Ankr Earn, and use customized blockchain solutions for businesses.',
      typeAsset: 'erc20',
      address: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
      denomUnits: [{
          denom: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
          exponent: 0,
          aliases: ['ankr-wei']
        }, {
          denom: 'ankr',
          exponent: 18
        }],
      base: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
      name: 'Ankr Network',
      display: 'ankr',
      symbol: 'ANKR',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ankr.svg'
        }],
      coingeckoId: 'ankr',
      socials: {
        website: 'https://www.ankr.com',
        twitter: 'https://x.com/ankr'
      }
    },
    {
      description: 'YUM is the Cacao Swap token, powering decentralised rails.',
      typeAsset: 'erc20',
      address: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
      denomUnits: [{
          denom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
          exponent: 0,
          aliases: ['yum-wei']
        }, {
          denom: 'yum',
          exponent: 18
        }],
      base: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
      name: 'Yum',
      display: 'yum',
      symbol: 'YUM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png'
        }],
      socials: {
        website: 'https://cacaoswap.app',
        twitter: 'https://x.com/CacaoSwap'
      }
    },
    {
      description: 'Avail is a web3 infrastructure layer that allows modular execution layers to scale and interoperate in a trust minimized way.',
      typeAsset: 'erc20',
      address: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
      denomUnits: [{
          denom: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
          exponent: 0,
          aliases: ['avail-wei', 'avail']
        }, {
          denom: 'AVAIL',
          exponent: 18
        }],
      base: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
      name: 'Avail',
      display: 'AVAIL',
      symbol: 'AVAIL',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'avail',
            baseDenom: 'avail'
          },
          provider: 'Avail Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'avail',
            baseDenom: 'avail'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.png',
          theme: {
            circle: false
          }
        }]
    },
    {
      description: 'EURe is a Euro-backed stablecoin issued by Monerium.',
      extendedDescription: 'EURe is the first authorized and regulated stablecoin in Europe. It is collateralized by Euro-denominated deposits held in segregated accounts. EURe is issued by Monerium, the first Electronic Money Institution (EMI) to become compliant under the EU\'s MiCA regulations.',
      typeAsset: 'erc20',
      address: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f',
      denomUnits: [{
          denom: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f',
          exponent: 0,
          aliases: ['eure-wei', 'ueure']
        }, {
          denom: 'eure',
          exponent: 18
        }],
      base: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f',
      name: 'Monerium EUR emoney',
      display: 'eure',
      symbol: 'EURe',
      coingeckoId: 'monerium-eur-money',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'EUR'
          },
          provider: 'Monerium'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://monerium.com/',
        twitter: 'https://x.com/monerium'
      }
    },
    {
      description: 'LBTC is liquid, yield-bearing, natively cross-chain, and 1:1 backed by bitcoin.',
      extendedDescription: 'Lombard is dedicated to expanding the digital economy by transforming Bitcoin’s utility from a mere store of value into a productive financial tool. While Bitcoin remains the world’s largest crypto asset, with over $1 trillion worth of Bitcoin often sitting idle, its utility is limited compared to other digital assets. Lombard sees a significant opportunity to change this by connecting Bitcoin to decentralized finance (DeFi).\n\nLombard is driven by the fact that if just 10% of Bitcoin\'s $1.5 trillion market cap flows into DeFi, the total value locked (TVL) in the ecosystem could more than double, catalyzing unprecedented growth and enabling sustainable market dynamics over time. Lombard believes this potential can be unlocked through a security-first liquid Bitcoin primitive—LBTC.\n\nOur flagship product, LBTC, is a secure Bitcoin liquid staked token (LST), designed to empower anyone—from individual holders to large institutions—to amplify the utility of their Bitcoin. It allows users to earn a native yield from providing economic security to networks via Babylon and participate in DeFi, all while maintaining the value of the original asset.\n\nBy building LBTC on top of Babylon, Lombard’s LBTC bridges the gap between Bitcoin’s immense economic value, security capabilities, and the dynamic opportunities within PoS and DeFi ecosystems, marking a transformative phase for Bitcoin in the decentralized economy.',
      typeAsset: 'erc20',
      address: '0x8236a87084f8B84306f72007F36F2618A5634494',
      denomUnits: [{
          denom: '0x8236a87084f8B84306f72007F36F2618A5634494',
          exponent: 0
        }, {
          denom: 'lbtc',
          exponent: 8
        }],
      base: '0x8236a87084f8B84306f72007F36F2618A5634494',
      name: 'Lombard Staked Bitcoin',
      display: 'lbtc',
      symbol: 'LBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Lombard'
        }],
      coingeckoId: 'lombard-staked-btc',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://lombard.finance',
        twitter: 'https://x.com/Lombard_Finance'
      }
    },
    {
      description: 'The Ethereum ERC20 issuance of Movement ($MOVE).',
      typeAsset: 'erc20',
      address: '0x3073f7aaa4db83f95e9fff17424f71d4751a3073',
      denomUnits: [{
          denom: '0x3073f7aaa4db83f95e9fff17424f71d4751a3073',
          exponent: 0,
          aliases: ['0xa', 'octa']
        }, {
          denom: 'move',
          exponent: 8
        }],
      base: '0x3073f7aaa4db83f95e9fff17424f71d4751a3073',
      name: 'Movement',
      display: 'move',
      symbol: 'MOVE',
      coingeckoId: 'movement',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'movement',
            baseDenom: '0xa'
          },
          provider: 'Movement Foundation'
        }],
      images: [{
          imageSync: {
            chainName: 'movement',
            baseDenom: '0xa'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/movement/images/move.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/movement/images/move.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.movementnetwork.xyz/',
        twitter: 'https://twitter.com/movementfdn'
      }
    },
    {
      typeAsset: 'erc20',
      address: '0x657e8c867d8b37dcc18fa4caead9c45eb088c642',
      denomUnits: [{
          denom: '0x657e8c867d8b37dcc18fa4caead9c45eb088c642',
          exponent: 0
        }, {
          denom: 'ebtc',
          exponent: 8
        }],
      base: '0x657e8c867d8b37dcc18fa4caead9c45eb088c642',
      name: 'ether.fi BTC',
      display: 'ebtc',
      symbol: 'eBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eBTC.png'
      },
      coingeckoId: 'ether-fi-staked-btc',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eBTC.png'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3',
      denomUnits: [{
          denom: '0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3',
          exponent: 0
        }, {
          denom: 'stbtc',
          exponent: 18
        }],
      base: '0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3',
      name: 'Lorenzo stBTC',
      display: 'stbtc',
      symbol: 'stBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Lorenzo'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
      },
      coingeckoId: 'lorenzo-stbtc',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x9356f6d95b8e109f4b7ce3e49d672967d3b48383',
      denomUnits: [{
          denom: '0x9356f6d95b8e109f4b7ce3e49d672967d3b48383',
          exponent: 0
        }, {
          denom: 'kbtc',
          exponent: 18
        }],
      base: '0x9356f6d95b8e109f4b7ce3e49d672967d3b48383',
      name: 'Kinza Babylon Staked BTC',
      display: 'kbtc',
      symbol: 'kBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/kBTC.svg'
      },
      coingeckoId: 'kintsugi-btc',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/kBTC.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x004e9c3ef86bc1ca1f0bb5c7662861ee93350568',
      denomUnits: [{
          denom: '0x004e9c3ef86bc1ca1f0bb5c7662861ee93350568',
          exponent: 0
        }, {
          denom: 'unibtc',
          exponent: 8
        }],
      base: '0x004e9c3ef86bc1ca1f0bb5c7662861ee93350568',
      name: 'Universal BTC',
      display: 'unibtc',
      symbol: 'uniBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Bedrock'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC_200px.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC_200px.png',
          theme: {
            circle: false
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC.svg',
          theme: {
            circle: true
          }
        }],
      coingeckoId: 'universal-btc'
    },
    {
      typeAsset: 'erc20',
      address: '0xbdf245957992bfbc62b07e344128a1eec7b7ee3f',
      denomUnits: [{
          denom: '0xbdf245957992bfbc62b07e344128a1eec7b7ee3f',
          exponent: 0
        }, {
          denom: 'mbtc',
          exponent: 8
        }],
      base: '0xbdf245957992bfbc62b07e344128a1eec7b7ee3f',
      name: 'mBTC',
      display: 'mbtc',
      symbol: 'mBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mbtc.png'
      },
      coingeckoId: 'babypie-wrapped-btc',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mbtc.png'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0xf469fbd2abcd6b9de8e169d128226c0fc90a012e',
      denomUnits: [{
          denom: '0xf469fbd2abcd6b9de8e169d128226c0fc90a012e',
          exponent: 0
        }, {
          denom: 'pumpbtc',
          exponent: 8
        }],
      base: '0xf469fbd2abcd6b9de8e169d128226c0fc90a012e',
      name: 'pumpBTC',
      display: 'pumpbtc',
      symbol: 'pumpBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'pumpBTC'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
      },
      coingeckoId: 'pumpbtc',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x7a56e1c57c7475ccf742a1832b028f0456652f97',
      denomUnits: [{
          denom: '0x7a56e1c57c7475ccf742a1832b028f0456652f97',
          exponent: 0
        }, {
          denom: 'solvbtc',
          exponent: 18
        }],
      base: '0x7a56e1c57c7475ccf742a1832b028f0456652f97',
      name: 'SolvBTC',
      display: 'solvbtc',
      symbol: 'solvBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Solv Protocol'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.svg'
      },
      coingeckoId: 'solv-btc',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0xd9d920aa40f578ab794426f5c90f6c731d159def',
      denomUnits: [{
          denom: '0xd9d920aa40f578ab794426f5c90f6c731d159def',
          exponent: 0
        }, {
          denom: 'xsolvbtc',
          exponent: 18
        }],
      base: '0xd9d920aa40f578ab794426f5c90f6c731d159def',
      name: 'xSolvBTC',
      display: 'xsolvbtc',
      symbol: 'xsolvBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xSolvBTC.png'
      },
      coingeckoId: 'solv-protocol-solvbtc-bbn',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xSolvBTC.png'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x6a9a65b84843f5fd4ac9a0471c4fc11afffbce4a',
      denomUnits: [{
          denom: '0x6a9a65b84843f5fd4ac9a0471c4fc11afffbce4a',
          exponent: 0
        }, {
          denom: 'enzobtc',
          exponent: 8
        }],
      base: '0x6a9a65b84843f5fd4ac9a0471c4fc11afffbce4a',
      name: 'lorenzo Wrapped Bitcoin',
      display: 'enzobtc',
      symbol: 'enzoBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Lorenzo Protocol'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lorenzo-wrapped-bitcoin.png'
        }],
      coingeckoId: 'lorenzo-wrapped-bitcoin'
    },
    {
      typeAsset: 'erc20',
      address: '0xF7De2B7afdb07AA5dD143180Ed758165821E076e',
      denomUnits: [{
          denom: '0xF7De2B7afdb07AA5dD143180Ed758165821E076e',
          exponent: 0
        }, {
          denom: 'satunibtc',
          exponent: 8
        }],
      base: '0xF7De2B7afdb07AA5dD143180Ed758165821E076e',
      name: 'Satlayer uniBTC',
      display: 'satunibtc',
      symbol: 'satUniBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x004e9c3ef86bc1ca1f0bb5c7662861ee93350568'
          },
          provider: 'SatLayer'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x17140b69FfaDfF9e87BF1D86D99119ee10AD24ff',
      denomUnits: [{
          denom: '0x17140b69FfaDfF9e87BF1D86D99119ee10AD24ff',
          exponent: 0
        }, {
          denom: 'satsolvbtc',
          exponent: 18
        }],
      base: '0x17140b69FfaDfF9e87BF1D86D99119ee10AD24ff',
      name: 'Satlayer SolvBTC.BBN',
      display: 'satsolvbtc',
      symbol: 'satSolvBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xd9d920aa40f578ab794426f5c90f6c731d159def'
          },
          provider: 'SatLayer'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x067e11Ac5471C853aea205B3C1933a5f6367152F',
      denomUnits: [{
          denom: '0x067e11Ac5471C853aea205B3C1933a5f6367152F',
          exponent: 0
        }, {
          denom: 'satlbtc',
          exponent: 8
        }],
      base: '0x067e11Ac5471C853aea205B3C1933a5f6367152F',
      name: 'Satlayer LBTC',
      display: 'satlbtc',
      symbol: 'satLBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x8236a87084f8B84306f72007F36F2618A5634494'
          },
          provider: 'SatLayer'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x8236a87084f8B84306f72007F36F2618A5634494'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0xC96dE26018A54D51c097160568752c4E3BD6C364',
      denomUnits: [{
          denom: '0xC96dE26018A54D51c097160568752c4E3BD6C364',
          exponent: 0
        }, {
          denom: 'fbtc',
          exponent: 8
        }],
      base: '0xC96dE26018A54D51c097160568752c4E3BD6C364',
      name: 'Fire Bitcoin',
      display: 'fbtc',
      symbol: 'FBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/FBTC.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/FBTC.png'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0xe2C6755C10d0B61D8B11Dd2851AE8266Cea912DC',
      denomUnits: [{
          denom: '0xe2C6755C10d0B61D8B11Dd2851AE8266Cea912DC',
          exponent: 0
        }, {
          denom: 'satfbtc',
          exponent: 8
        }],
      base: '0xe2C6755C10d0B61D8B11Dd2851AE8266Cea912DC',
      name: 'Satlayer FBTC',
      display: 'satfbtc',
      symbol: 'satFBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xC96dE26018A54D51c097160568752c4E3BD6C364'
          },
          provider: 'SatLayer'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/FBTC.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xC96dE26018A54D51c097160568752c4E3BD6C364'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/FBTC.png'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x69223B5B36a785Ec08e5f685fd7961399982C566',
      denomUnits: [{
          denom: '0x69223B5B36a785Ec08e5f685fd7961399982C566',
          exponent: 0
        }, {
          denom: 'satwbtc',
          exponent: 8
        }],
      base: '0x69223B5B36a785Ec08e5f685fd7961399982C566',
      name: 'Satlayer WBTC',
      display: 'satwbtc',
      symbol: 'satWBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'SatLayer'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x0c4dd69705D16d91bC9C0534Cc926966f23430c7',
      denomUnits: [{
          denom: '0x0c4dd69705D16d91bC9C0534Cc926966f23430c7',
          exponent: 0
        }, {
          denom: 'satpumpbtc',
          exponent: 8
        }],
      base: '0x0c4dd69705D16d91bC9C0534Cc926966f23430c7',
      name: 'Satlayer pumpBTC',
      display: 'satpumpbtc',
      symbol: 'satPumpBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xf469fbd2abcd6b9de8e169d128226c0fc90a012e'
          },
          provider: 'SatLayer'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xf469fbd2abcd6b9de8e169d128226c0fc90a012e'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0xFF2858Cc8227aA45a51c8961598Edc2d44B5ee5b',
      denomUnits: [{
          denom: '0xFF2858Cc8227aA45a51c8961598Edc2d44B5ee5b',
          exponent: 0
        }, {
          denom: 'satstbtc',
          exponent: 18
        }],
      base: '0xFF2858Cc8227aA45a51c8961598Edc2d44B5ee5b',
      name: 'Satlayer stBTC',
      display: 'satstbtc',
      symbol: 'satStBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3'
          },
          provider: 'SatLayer'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD',
      denomUnits: [{
          denom: '0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD',
          exponent: 0
        }, {
          denom: 'susds',
          exponent: 18
        }],
      base: '0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD',
      name: 'Savings USDS',
      display: 'susds',
      symbol: 'sUSDS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/susds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/susds.svg'
      },
      coingeckoId: 'susds',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/susds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/susds.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0x007115416ab6c266329a03b09a8aa39ac2ef7d9d',
      denomUnits: [{
          denom: '0x007115416ab6c266329a03b09a8aa39ac2ef7d9d',
          exponent: 0
        }, {
          denom: 'mBTC',
          exponent: 18
        }],
      base: '0x007115416ab6c266329a03b09a8aa39ac2ef7d9d',
      name: 'Midas BTC Yield Token',
      display: 'mBTC',
      symbol: 'mBTC.midas',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/midas-mbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/midas-mbtc.svg'
      },
      coingeckoId: 'midas-btc-yield-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/midas-mbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/midas-mbtc.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0xb2617246d0c6c0087f18703d576831899ca94f01',
      denomUnits: [{
          denom: '0xb2617246d0c6c0087f18703d576831899ca94f01',
          exponent: 0
        }, {
          denom: 'ZIG',
          exponent: 18
        }],
      base: '0xb2617246d0c6c0087f18703d576831899ca94f01',
      name: 'ZigCoin',
      display: 'ZIG',
      symbol: 'ZIG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
      },
      coingeckoId: 'zignaly',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
        }]
    },
    {
      description: 'Tether Gold(XAUT)',
      typeAsset: 'erc20',
      address: '0x68749665ff8d2d112fa859aa293f07a622782f38',
      denomUnits: [{
          denom: '0x68749665ff8d2d112fa859aa293f07a622782f38',
          exponent: 0
        }, {
          denom: 'xaut',
          exponent: 6
        }],
      base: '0x68749665ff8d2d112fa859aa293f07a622782f38',
      name: 'Tether Gold',
      display: 'xaut',
      symbol: 'XAUt',
      coingeckoId: 'tether-gold',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xaut.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xaut.png'
      }
    }
  ]
};
export default info;