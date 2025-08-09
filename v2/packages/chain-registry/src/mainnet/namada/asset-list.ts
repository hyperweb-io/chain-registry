import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'namada',
  assets: [
    {
      description: 'The native token of Namada.',
      extendedDescription: 'Namada is the Composable Privacy Layer of the Multichain. It is a proof-of-stake layer-1 blockchain that protects users’ personal data by providing a shielded asset hub and enabling shielded cross-chain transactions. Namada is capable of supporting any asset and can be used to retrofit data protection to existing chains, dapps, tokens, and NFTs.\nPrimarily built in Rust, Namada uses CometBFT consensus and the IBC (Inter-Blockchain Communication) protocol for multichain interoperability, but can be upgraded to support additional ecosystems beyond IBC. By leveraging advanced cryptographic standards like zk-SNARKs and its potential for interoperability, Namada positions itself as a useful cryptographic primitive for users to protect their on-chain data while interoperating with a wide variety of other blockchains and protocols.',
      denomUnits: [{
          denom: 'unam',
          exponent: 0
        }, {
          denom: 'nam',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'unam',
      name: 'Namada',
      display: 'nam',
      symbol: 'NAM',
      address: 'tnam1q9gr66cvu4hrzm0sd5kmlnjje82gs3xlfg3v6nu7',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
      },
      socials: {
        website: 'https://namada.net/',
        twitter: 'https://x.com/namada'
      },
      coingeckoId: 'namada'
    },
    {
      description: 'Stride\'s liquid staked OSMO',
      denomUnits: [{
          denom: 'ibc/4263C1D1EEEA066572F679EF212BDD522ADF0E57C86819AF260C8BC82BD87602',
          exponent: 0,
          aliases: ['stuosmo']
        }, {
          denom: 'stosmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4263C1D1EEEA066572F679EF212BDD522ADF0E57C86819AF260C8BC82BD87602',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      address: 'tnam1p4px8sw3am4qvetj7eu77gftm4fz4hcw2ulpldc7',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuosmo',
            channelId: 'channel-308'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/stuosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked ATOM',
      denomUnits: [{
          denom: 'ibc/054A44EC8D9B68B9A6F0D5708375E00A5569A28F21E0064FF12CADC3FEF1D04F',
          exponent: 0,
          aliases: ['stuatom']
        }, {
          denom: 'statom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/054A44EC8D9B68B9A6F0D5708375E00A5569A28F21E0064FF12CADC3FEF1D04F',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      address: 'tnam1p5z5538v3kdk3wdx7r2hpqm4uq9926dz3ughcp7n',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuatom',
            channelId: 'channel-308'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/stuatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denomUnits: [{
          denom: 'ibc/F46BA5EDCA6DAA5F7EFD3838430E03647CDC786BB1B89BC9FDD1CBE16B099645',
          exponent: 0,
          aliases: ['stutia']
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F46BA5EDCA6DAA5F7EFD3838430E03647CDC786BB1B89BC9FDD1CBE16B099645',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      address: 'tnam1ph6xhf0defk65hm7l5ursscwqdj8ehrcdv300u4g',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stutia',
            channelId: 'channel-308'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/stutia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stutia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }]
    },
    {
      description: 'The native token of Osmosis',
      denomUnits: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      address: 'tnam1p5z8ruwyu7ha8urhq2l0dhpk2f5dv3ts7uyf2n75',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-98451'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denomUnits: [{
          denom: 'ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      address: 'tnam1pkg30gnt4q0zn7j00r6hms4ajrxn6f5ysyyl7w9m',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-1317'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }]
    },
    {
      description: 'The native token of the Celestia blockchain.',
      denomUnits: [{
          denom: 'ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      address: 'tnam1pklj3kwp0cpsdvv56584rsajty974527qsp8n0nm',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia',
            channelId: 'channel-73'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/utia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }]
    },
    {
      description: 'The native token of Penumbra.',
      denomUnits: [{
          denom: 'ibc/9473AE955A0A5E6EFDDB8C529E777814DBE3D0FE2FD2ECB9D7208920E0FD62D3',
          exponent: 0,
          aliases: ['upenumbra']
        }, {
          denom: 'penumbra',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9473AE955A0A5E6EFDDB8C529E777814DBE3D0FE2FD2ECB9D7208920E0FD62D3',
      name: 'Penumbra',
      display: 'penumbra',
      symbol: 'UM',
      address: 'tnam1pk288t54tg99umhamwx998nh0q2dhc7slch45sqy',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'penumbra',
            baseDenom: 'upenumbra',
            channelId: 'channel-13'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/upenumbra'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg'
      },
      images: [{
          imageSync: {
            chainName: 'penumbra',
            baseDenom: 'upenumbra'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'USD Coin',
      denomUnits: [{
          denom: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      address: 'tnam1pkl64du8p2d240my5umxm24qhrjsvh42ruc98f97',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-136'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/uusdc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denomUnits: [{
          denom: 'ibc/D956638E52570976F762354757863F60F2AFE4879E849CB1C77B163F0BF11C64',
          exponent: 0,
          aliases: ['unym']
        }, {
          denom: 'nym',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D956638E52570976F762354757863F60F2AFE4879E849CB1C77B163F0BF11C64',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      address: 'tnam1phv4vcuw2ftsjahhvg65w4ux8as09tlysuhvzqje',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nyx',
            baseDenom: 'unym',
            channelId: 'channel-13'
          },
          chain: {
            channelId: 'channel-6',
            path: 'transfer/channel-6/unym'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
      },
      images: [
        {
          imageSync: {
            chainName: 'nyx',
            baseDenom: 'unym'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
          theme: {
            darkMode: false,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
          theme: {
            darkMode: true,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
        }
      ]
    },
    {
      description: 'The native token of Neutron chain.',
      denomUnits: [{
          denom: 'ibc/B41472B80833CADC12B2F50F2AB9E279AAC181022BA9581813EE804D7DAB11F6',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B41472B80833CADC12B2F50F2AB9E279AAC181022BA9581813EE804D7DAB11F6',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      address: 'tnam1pk6pgu4cpqeu4hqjkt6s724eufu64svpqgu52m3g',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'untrn',
            channelId: 'channel-7024'
          },
          chain: {
            channelId: 'channel-7',
            path: 'transfer/channel-7/untrn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'untrn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            circle: true
          }
        }]
    }
  ]
};
export default info;