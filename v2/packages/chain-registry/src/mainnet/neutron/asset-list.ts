import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'neutron',
  assets: [
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      extendedDescription: 'Neutron is a blockchain network designed to bring smart contracts to the Cosmos ecosystem using CosmWasm. It leverages Interchain Security to rely on the Cosmos Hub\'s validator set, enhancing its security without needing its own validators. This allows Neutron to provide robust, cross-chain smart contract applications across more than 50 interconnected blockchains. Neutron\'s focus on interchain queries and transactions enables secure data retrieval and transaction execution across multiple chains, fostering the development of complex and decentralized applications within the Cosmos network.',
      denomUnits: [{
          denom: 'untrn',
          exponent: 0
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'untrn',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingeckoId: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            primaryColorHex: '#040404',
            backgroundColorHex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'IBC uatom through cosmoshub-4 transfer/channel-1',
      denomUnits: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'IBC atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-569'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingeckoId: 'cosmos'
    },
    {
      description: 'IBC Axelar uusdc through axelar-dojo-1 transfer/channel-2',
      denomUnits: [{
          denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      name: 'USD Coin (Axelar)',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdc',
            channelId: 'channel-78'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      coingeckoId: 'axlusdc'
    },
    {
      description: 'Tia on Neutron',
      denomUnits: [{
          denom: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-35',
            path: 'transfer/channel-35/utia'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primaryColorHex: '#7c2cfb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      coingeckoId: 'celestia'
    },
    {
      description: 'Astropepe meme coin',
      denomUnits: [{
          denom: 'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
          exponent: 0
        }, {
          denom: 'ASTROPEPE',
          exponent: 6
        }],
      base: 'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
      name: 'AstroPepe',
      display: 'ASTROPEPE',
      symbol: 'ASTROPEPE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png',
          theme: {
            primaryColorHex: '#47391d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'wstETH on Neutron',
      denomUnits: [{
          denom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
          exponent: 0
        }, {
          denom: 'wstETH',
          exponent: 18
        }],
      base: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
      name: 'wstETH',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Lido wstETH Cosmos Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'DYDX on Neutron',
      denomUnits: [{
          denom: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
      name: 'DYDX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'adydx',
            channelId: 'channel-11'
          },
          chain: {
            channelId: 'channel-48',
            path: 'transfer/channel-48/adydx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primaryColorHex: '#21212f'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingeckoId: 'dydx-chain'
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denomUnits: [{
          denom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
          exponent: 0,
          aliases: ['unewt']
        }, {
          denom: 'newt',
          exponent: 6
        }],
      base: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      coingeckoId: 'newt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png',
          theme: {
            primaryColorHex: '#16233d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      base: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      coingeckoId: 'astroport-fi',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primaryColorHex: '#4056e9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      },
      socials: {
        website: 'https://astroport.fi/',
        twitter: 'https://twitter.com/astroport_fi'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO',
          exponent: 0,
          aliases: ['uxastro']
        }, {
          denom: 'xASTRO',
          exponent: 6
        }],
      base: 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO',
      name: 'Staked Astroport Token',
      display: 'xASTRO',
      symbol: 'xASTRO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          provider: 'Astroport'
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg'
      },
      socials: {
        website: 'https://astroport.fi/',
        twitter: 'https://twitter.com/astroport_fi'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ASTRO.cw20 on Neutron',
      denomUnits: [{
          denom: 'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
      name: 'Astroport CW20 token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            channelId: 'channel-167',
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            port: 'transfer'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      coingeckoId: 'astroport-fi'
    },
    {
      description: 'Baby Corgi is the real doggo of Neutron!',
      denomUnits: [{
          denom: 'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi',
          exponent: 0,
          aliases: ['ucorgi']
        }, {
          denom: 'corgi',
          exponent: 6
        }],
      base: 'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi',
      name: 'Baby Corgi',
      display: 'corgi',
      symbol: 'CORGI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png',
          theme: {
            primaryColorHex: '#fab442'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'clownmaxxed store of value',
      denomUnits: [{
          denom: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
          exponent: 0,
          aliases: ['ucircus']
        }, {
          denom: 'circus',
          exponent: 6
        }],
      base: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png',
          theme: {
            primaryColorHex: '#242033'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Jimmy Neutron Finance',
      denomUnits: [{
          denom: 'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY',
          exponent: 0,
          aliases: ['ujimmy']
        }, {
          denom: 'jimmy',
          exponent: 6
        }],
      base: 'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY',
      name: 'jimmy',
      display: 'jimmy',
      symbol: 'JIMMY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png',
          theme: {
            primaryColorHex: '#7d3c20'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Baddest coin on Cosmos',
      denomUnits: [{
          denom: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
          exponent: 0,
          aliases: ['ubad']
        }, {
          denom: 'bad',
          exponent: 6
        }],
      base: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png',
          theme: {
            primaryColorHex: '#211a0d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'BITCOSMOS',
      denomUnits: [{
          denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
          exponent: 0,
          aliases: ['ubitcosmos']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
          theme: {
            primaryColorHex: '#1b0847'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'What the Fuck',
      denomUnits: [{
          denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
          exponent: 0,
          aliases: ['uwtf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
          theme: {
            primaryColorHex: '#dcd5ab'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'NLS on Neutron',
      denomUnits: [{
          denom: 'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
      name: 'Nolus NLS',
      display: 'nls',
      symbol: 'NLS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nolus',
            baseDenom: 'unls',
            channelId: 'channel-3839'
          },
          chain: {
            channelId: 'channel-44',
            path: 'transfer/channel-44/unls'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'nolus',
            baseDenom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
          theme: {
            primaryColorHex: '#fc542c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      coingeckoId: 'nolus'
    },
    {
      description: 'A Mechanical Canine',
      denomUnits: [{
          denom: 'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
          exponent: 0,
          aliases: ['ugoddard']
        }, {
          denom: 'goddard',
          exponent: 6
        }],
      base: 'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODRD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png',
          theme: {
            primaryColorHex: '#516b80'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denomUnits: [{
          denom: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
          exponent: 0,
          aliases: ['uapollo']
        }, {
          denom: 'apollo',
          exponent: 6
        }],
      base: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }],
      socials: {
        website: 'https://apollo.farm/',
        twitter: 'https://twitter.com/ApolloDAO'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'NEWTROLL',
      denomUnits: [{
          denom: 'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
          exponent: 0,
          aliases: ['unewtroll']
        }, {
          denom: 'newtroll',
          exponent: 6
        }],
      base: 'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
      name: 'Newtroll',
      display: 'newtroll',
      symbol: 'NTRL',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Retro Game',
      denomUnits: [{
          denom: 'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
          exponent: 0,
          aliases: ['uretro']
        }, {
          denom: 'retro',
          exponent: 6
        }],
      base: 'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
      name: 'Retro',
      display: 'retro',
      symbol: 'RETRO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'THE FIRST NATIVE GODDARD MEMECOIN ON NEUTRON',
      denomUnits: [{
          denom: 'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD',
          exponent: 0,
          aliases: ['ugoddard']
        }, {
          denom: 'goddard',
          exponent: 6
        }],
      base: 'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODDARD',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddard.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddard.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The first memecoin on osmosis.',
      denomUnits: [{
          denom: 'ibc/7DA39F5140741177846FCF3CFAB14450EE7F57B7794E5A94BEF73825D3741958',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7DA39F5140741177846FCF3CFAB14450EE7F57B7794E5A94BEF73825D3741958',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channelId: 'channel-874'
          },
          chain: {
            channelId: 'channel-10',
            path: 'transfer/channel-10/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
          theme: {
            primaryColorHex: '#edd5ee'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'Astro BOY',
      denomUnits: [{
          denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
          exponent: 0,
          aliases: ['uboy']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
          theme: {
            primaryColorHex: '#333333'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It\'s so bad, your wallet\'s throwing a tantrum for it.',
      denomUnits: [{
          denom: 'ibc/9F8417FBA11E5E01F7F85DDD48C400EB746E95084C11706041663845B4A700A8',
          exponent: 0
        }, {
          denom: 'BADKID',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9F8417FBA11E5E01F7F85DDD48C400EB746E95084C11706041663845B4A700A8',
      name: 'Badkid',
      display: 'BADKID',
      symbol: 'BADKID',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
            channelId: 'channel-874'
          },
          chain: {
            channelId: 'channel-10',
            path: 'transfer/channel-10/factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png',
          theme: {
            primaryColorHex: '#57443f'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      }
    },
    {
      description: 'Reflections of cartel activity on Cosmos.',
      denomUnits: [{
          denom: 'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel',
          exponent: 0,
          aliases: ['ucartel']
        }, {
          denom: 'cartel',
          exponent: 6
        }],
      base: 'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel',
      name: 'cartel',
      display: 'cartel',
      symbol: 'CARTEL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/cartel.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/cartel.png',
          theme: {
            primaryColorHex: '#8c9098'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: '$ATOM to $1,000 LFG!!',
      denomUnits: [{
          denom: 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG',
          exponent: 0,
          aliases: ['uatom1klfg']
        }, {
          denom: 'ATOM1KLFG',
          exponent: 6
        }],
      base: 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG',
      name: 'ATOM1KLFG',
      display: 'ATOM1KLFG',
      symbol: 'ATOM1KLFG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      typeAsset: 'ics20',
      description: 'USD Coin on Neutron',
      denomUnits: [{
          denom: 'ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81',
          exponent: 0,
          aliases: ['uusdc', 'microusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      coingeckoId: 'usd-coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channelId: 'channel-18',
            baseDenom: 'uusdc',
            chainName: 'noble'
          },
          chain: {
            channelId: 'channel-30',
            path: 'transfer/channel-30/uusdc'
          }
        }]
    },
    {
      description: 'WEIRD FRIENDS token',
      denomUnits: [{
          denom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD',
          exponent: 0,
          aliases: ['uWEIRD']
        }, {
          denom: 'WEIRD',
          exponent: 6
        }],
      base: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD',
      name: 'WEIRD',
      display: 'WEIRD',
      symbol: 'WEIRD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WEIRD.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WEIRD.png',
          theme: {
            primaryColorHex: '#ebf0f4'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'factory/neutron19tynwawkm2rgefqxy7weupu4hdamyhg890zep2/TAKUMI',
          exponent: 0,
          aliases: ['utakumi']
        }, {
          denom: 'takumi',
          exponent: 6
        }],
      base: 'factory/neutron19tynwawkm2rgefqxy7weupu4hdamyhg890zep2/TAKUMI',
      name: 'Takumi Asano',
      display: 'takumi',
      symbol: 'TAKUMI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/TAKUMI.png',
          theme: {
            primaryColorHex: '#556867'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Ninja Blaze is a decentralized multi-chain gaming platform powered by Injective Blockchain.',
      extendedDescription: 'The only truly decentralized gaming platform. Shape the future of gaming by owning Ninja Blaze tokens.',
      denomUnits: [{
          denom: 'ibc/A79E35F2418EB26FA8D72B9AA5EDF28C0C2CF475E8CF4CAEBB25FA5C858D4D22',
          exponent: 0,
          aliases: ['uNBZ']
        }, {
          denom: 'NBZ',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A79E35F2418EB26FA8D72B9AA5EDF28C0C2CF475E8CF4CAEBB25FA5C858D4D22',
      name: 'Ninja Blaze',
      display: 'NBZ',
      symbol: 'NBZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1llr45x92t7jrqtxvc02gpkcqhqr82dvyzkr4mz/NBZ',
            channelId: 'channel-177'
          },
          chain: {
            channelId: 'channel-60',
            path: 'transfer/channel-60/factory/inj1llr45x92t7jrqtxvc02gpkcqhqr82dvyzkr4mz/NBZ'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj1llr45x92t7jrqtxvc02gpkcqhqr82dvyzkr4mz/NBZ'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/NBZ.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/NBZ.svg',
          theme: {
            primaryColorHex: '#9890f9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/NBZ.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/NBZ.svg'
      },
      socials: {
        website: 'https://blaze.ninja',
        twitter: 'https://x.com/NinjaBlazeApp'
      }
    },
    {
      description: 'Mars Protocol is a cross-collateralized Money Market Protocol on Neutron and Osmosis.',
      extendedDescription: 'Lend, borrow and earn with an autonomous credit protocol in the Cosmos universe. Open to all, closed to none.',
      denomUnits: [{
          denom: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'MARS',
          exponent: 6
        }],
      base: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS',
      name: 'Mars Protocol token',
      display: 'MARS',
      symbol: 'MARS',
      coingeckoId: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg',
          theme: {
            primaryColorHex: '#ef4136'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
      },
      socials: {
        website: 'https://marsprotocol.io/',
        twitter: 'https://x.com/mars_protocol'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Drop staked ATOM',
      extendedDescription: 'Drop protocol token for the interchain liquidity',
      denomUnits: [{
          denom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom',
          exponent: 0
        }, {
          denom: 'dATOM',
          exponent: 6
        }],
      base: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom',
      name: 'dATOM',
      display: 'dATOM',
      symbol: 'dATOM',
      coingeckoId: 'drop-staked-atom',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'Drop Protocol'
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
      },
      socials: {
        website: 'https://www.drop.money/',
        twitter: 'https://x.com/Dropdotmoney'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'SinGarden token',
      denomUnits: [{
          denom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin',
          exponent: 0,
          aliases: ['uSIN']
        }, {
          denom: 'SIN',
          exponent: 6
        }],
      base: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin',
      name: 'SIN',
      display: 'SIN',
      symbol: 'SIN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/sin.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/sin.png',
          theme: {
            primaryColorHex: '#ebf0f4'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'CryptoGopniks token',
      denomUnits: [{
          denom: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/GOP',
          exponent: 0,
          aliases: ['uGOP']
        }, {
          denom: 'GOP',
          exponent: 6
        }],
      base: 'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/GOP',
      name: 'GOP',
      display: 'GOP',
      symbol: 'GOP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/gop.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/gop.png',
          theme: {
            primaryColorHex: '#000000'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'factory/neutron129ukd5cwahcjkccujz87rjemjukff7jf6sau72qrhva677xgz9gs4m4jeq/uarena',
          exponent: 0,
          aliases: ['uarena']
        }, {
          denom: 'arena',
          exponent: 6
        }],
      base: 'factory/neutron129ukd5cwahcjkccujz87rjemjukff7jf6sau72qrhva677xgz9gs4m4jeq/uarena',
      name: 'Arena Token',
      display: 'arena',
      symbol: 'ARENA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.svg',
          theme: {
            circle: true,
            primaryColorHex: '#FF8000'
          }
        }],
      description: 'The governance token of the Arena DAO',
      socials: {
        twitter: 'https://x.com/ArenaDAO',
        website: 'https://arenadao.org/'
      }
    },
    {
      description: 'Astrovault AXV',
      denomUnits: [{
          denom: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
          exponent: 0
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
      base: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af',
      name: 'Astrovault AXV (Neutron)',
      display: 'AXV',
      symbol: 'AXV',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
        }],
      socials: {
        website: 'https://astrovault.io/',
        twitter: 'https://x.com/axvdex'
      },
      coingeckoId: 'astrovault'
    },
    {
      description: 'IBC Axelar wbtc-satoshi through axelar-dojo-1 transfer/channel-2',
      denomUnits: [{
          denom: 'ibc/DF8722298D192AAB85D86D0462E8166234A6A9A572DD4A2EA7996029DF4DB363',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'axlwbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/DF8722298D192AAB85D86D0462E8166234A6A9A572DD4A2EA7996029DF4DB363',
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'axlwbtc',
      symbol: 'axlWBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wbtc-satoshi',
            channelId: 'channel-78'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/wbtc-satoshi'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
      },
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'wbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png',
          theme: {
            primaryColorHex: '#41394d'
          }
        }],
      coingeckoId: 'axlwbtc'
    },
    {
      description: 'Astrovault xATOM on Neutron Chain',
      denomUnits: [{
          denom: 'cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
          exponent: 0
        }, {
          denom: 'xATOM',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
      base: 'cw20:neutron1vjl4ze7gr32lar5s4fj776v70j4ml7mlt4aqln2hwgfhqjck8xwqfhx8vj',
      name: 'Astrovault xATOM (Neutron)',
      display: 'xATOM',
      symbol: 'xATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9'
          },
          provider: 'Astrovault'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xatom.svg'
        }],
      coingeckoId: 'astrovault-xatom'
    },
    {
      description: 'The advance token for ATOM denominated vaults on Amulet Protocol',
      denomUnits: [{
          denom: 'factory/neutron1shwxlkpdjd8h5wdtrykypwd2v62z5glr95yp0etdcspkkjwm5meq82ndxs/amatom',
          exponent: 0
        }, {
          denom: 'amATOM',
          exponent: 6
        }],
      base: 'factory/neutron1shwxlkpdjd8h5wdtrykypwd2v62z5glr95yp0etdcspkkjwm5meq82ndxs/amatom',
      name: 'amATOM',
      display: 'amATOM',
      symbol: 'amATOM',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
            contract: 'neutron16d4a7q3wfkkawj4jwyzz6g97xtmj0crkyn06ev74fu4xsgkwnreswzfpcy'
          },
          provider: 'Amulet'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/amATOM.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/amATOM.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/amATOM.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/amATOM.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Liquid Staked USDC',
      denomUnits: [{
          denom: 'factory/neutron1mdy5fhtwdjagp5eallsdhlx6gxylm8rxqk72wjzg6y5d5kt44ysqprkduw/JSD',
          exponent: 0
        }, {
          denom: 'JSD',
          exponent: 6
        }],
      base: 'factory/neutron1mdy5fhtwdjagp5eallsdhlx6gxylm8rxqk72wjzg6y5d5kt44ysqprkduw/JSD',
      name: 'Jade',
      display: 'JSD',
      symbol: 'JSD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jsd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jsd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jsd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jsd.svg'
        }],
      socials: {
        website: 'https://Jade.Money',
        twitter: 'https://x.com/jadedotmoney'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Boost DAO FUEL',
      denomUnits: [{
          denom: 'factory/neutron1zl2htquajn50vxu5ltz0y5hf2qzvkgnjaaza2rssef268xplq6vsjuruxm/fuel',
          exponent: 0
        }, {
          denom: 'FUEL',
          exponent: 6
        }],
      base: 'factory/neutron1zl2htquajn50vxu5ltz0y5hf2qzvkgnjaaza2rssef268xplq6vsjuruxm/fuel',
      name: 'FUEL',
      display: 'FUEL',
      symbol: 'FUEL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/fuel.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/fuel.png'
        }],
      socials: {
        website: 'https://www.boostdao.io',
        twitter: 'https://x.com/boost_dao'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Bonded GopLend USDC',
      extendedDescription: 'bglUSDC (Bonded GopLend USDC) is issued in exchange for USDC for the deposit period. These tokens are liquid and generate income in the amount of the set APR on the platform',
      denomUnits: [{
          denom: 'factory/neutron16ue9kysgneyqktmjxdfshajgvlrcx9rehxz8x9th7g8fgtnlxwuqvg9mgp/bglUSDC',
          exponent: 0
        }, {
          denom: 'bglUSDC',
          exponent: 6
        }],
      base: 'factory/neutron16ue9kysgneyqktmjxdfshajgvlrcx9rehxz8x9th7g8fgtnlxwuqvg9mgp/bglUSDC',
      name: 'bglUSDC',
      display: 'bglUSDC',
      symbol: 'bglUSDC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bglUSDC.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bglUSDC.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Drop staked TIA',
      extendedDescription: 'Drop protocol token for the interchain liquidity',
      denomUnits: [{
          denom: 'factory/neutron1ut4c6pv4u6vyu97yw48y8g7mle0cat54848v6m97k977022lzxtsaqsgmq/udtia',
          exponent: 0
        }, {
          denom: 'dTIA',
          exponent: 6
        }],
      base: 'factory/neutron1ut4c6pv4u6vyu97yw48y8g7mle0cat54848v6m97k977022lzxtsaqsgmq/udtia',
      name: 'dTIA',
      display: 'dTIA',
      symbol: 'dTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          provider: 'Drop Protocol'
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dTIA.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dTIA.svg'
      },
      socials: {
        website: 'https://www.drop.money/',
        twitter: 'https://x.com/Dropdotmoney'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'IBC NEPT, Neptune Protocol token, on Neutron chain',
      denomUnits: [{
          denom: 'ibc/C084B31AB4906CD6CC65CB779B1527A66B6C98629259E3548B2F20D2753D5837',
          exponent: 0
        }, {
          denom: 'NEPT',
          exponent: 6
        }],
      base: 'ibc/C084B31AB4906CD6CC65CB779B1527A66B6C98629259E3548B2F20D2753D5837',
      name: 'Neptune Finance',
      display: 'NEPT',
      symbol: 'NEPT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1v3a4zznudwpukpr8y987pu5gnh4xuf7v36jhva/nept',
            channelId: 'channel-177'
          },
          chain: {
            channelId: 'channel-60',
            path: 'transfer/channel-60/factory/inj1v3a4zznudwpukpr8y987pu5gnh4xuf7v36jhva/nept'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj1v3a4zznudwpukpr8y987pu5gnh4xuf7v36jhva/nept'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nept.png',
          theme: {
            primaryColorHex: '#21549f'
          }
        }],
      socials: {
        website: 'https://nept.finance/',
        twitter: 'https://x.com/neptune_finance'
      },
      typeAsset: 'ics20'
    }
  ]
};
export default info;