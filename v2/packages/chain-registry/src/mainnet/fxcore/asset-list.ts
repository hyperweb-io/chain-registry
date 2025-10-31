import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'fxcore',
  assets: [
    {
      description: 'PUNDIAI is an ERC-20 utility and governance token of Pundi AI ecosystem, including Pundi AI Data Platform, Pundi AI Marketplace, Pundi AIFX Omni Layer and Pundi MM AI Agent Launcher.',
      extendedDescription: 'PundiAI is the token rebrand of Function X (FX token) to align with the project\'s evolving AI and data-driven focus, updating tokenomics to reflect current value, enhancing market perception, improving user adoption, and possibly supporting technical or ecosystem improvements.',
      denomUnits: [{
          denom: 'apundiai',
          exponent: 0
        }, {
          denom: 'pundiai',
          exponent: 18
        }],
      base: 'apundiai',
      name: 'Pundi AI',
      display: 'pundiai',
      symbol: 'PUNDIAI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
      },
      coingeckoId: 'pundi-aifx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native staking token of the Function X',
      extendedDescription: 'FX coin is the native token on the Function X ecosystem. It is currently utilized as a governance token as well as a gas token on f(x)Core and f(x)EVM. The subnets that are built on the Function X ecosystem can also choose to utilize FX as their gas token.',
      denomUnits: [{
          denom: 'FX',
          exponent: 0
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'FX',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingeckoId: 'fx-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The cross chain token of the Function X',
      extendedDescription: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS. PUNDIX has several core use cases, including:\n- Payment for goods and services from merchants through XPOS\n- Gas Fee on PundiX Chain\n- Listing tokens in the XPOS\n- Merchant payments for loyalty programs and ads',
      denomUnits: [{
          denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
          exponent: 0
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      base: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      display: 'PUNDIX',
      name: 'Pundi X Token',
      symbol: 'PUNDIX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            contract: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          provider: 'Function X'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
        }],
      socials: {
        website: 'https://pundix.com',
        x: 'https://x.com/PundiXLabs'
      },
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;