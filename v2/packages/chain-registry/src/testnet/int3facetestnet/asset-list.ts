import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'int3facetestnet',
  assets: [
    {
      description: 'Int3face Testnet blockchain native token',
      denomUnits: [{
          denom: 'uint3',
          exponent: 0
        }, {
          denom: 'int3',
          exponent: 6
        }],
      base: 'uint3',
      name: 'Int3face Testnet Token',
      display: 'int3',
      symbol: 'INT3',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
        }],
      socials: {
        website: 'https://testnet.app.int3face.zone/',
        x: 'https://x.com/_Bitfrost_'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Testnet Bitcoin on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
          exponent: 0
        }, {
          denom: 'btc',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
      name: 'Testnet Bitcoin',
      display: 'btc',
      symbol: 'BTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcointestnet',
            baseDenom: 'sat'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/btc.int3.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/btc.int3.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/btc.int3.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/btc.int3.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Testnet Bitcoin-Cash on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
          exponent: 0
        }, {
          denom: 'bch',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
      name: 'Testnet Bitcoin Cash',
      display: 'bch',
      symbol: 'BCH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoincashtestnet',
            baseDenom: 'sat'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/bch.int3.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/bch.int3.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/bch.int3.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/bch.int3.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Testnet Dogecoin on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
          exponent: 0
        }, {
          denom: 'doge',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
      name: 'Testnet Dogecoin',
      display: 'doge',
      symbol: 'DOGE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'dogecointestnet',
            baseDenom: 'shibe'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/doge.int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/doge.int3.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Testnet Litecoin on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
          exponent: 0
        }, {
          denom: 'ltc',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
      name: 'Testnet Litecoin',
      display: 'ltc',
      symbol: 'LTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'litecointestnet',
            baseDenom: 'litoshi'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/ltc.int3.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/ltc.int3.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/ltc.int3.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/ltc.int3.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Testnet TON on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton',
          exponent: 0
        }, {
          denom: 'ton',
          exponent: 9
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/ton-ton',
      name: 'Testnet TON',
      display: 'ton',
      symbol: 'TON',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'tontestnet',
            baseDenom: 'nanoton'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/ton.int3.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/ton.int3.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/ton.int3.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/ton.int3.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Testnet Solana on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/solana-sol',
          exponent: 0
        }, {
          denom: 'sol',
          exponent: 9
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/solana-sol',
      name: 'Testnet Solana',
      display: 'sol',
      symbol: 'SOL',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solanatestnet',
            baseDenom: 'Lamport'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/sol.int3.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/sol.int3.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/sol.int3.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/sol.int3.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Testnet XRP on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/xrpl-xrp',
          exponent: 0
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/xrpl-xrp',
      name: 'Testnet XRP',
      display: 'xrp',
      symbol: 'XRP',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'xrpltestnet',
            baseDenom: 'drop'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/xrp.int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/xrp.int3.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Testnet Zcash on Int3face',
      denomUnits: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/zcash-zec',
          exponent: 0
        }, {
          denom: 'zec',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/zcash-zec',
      name: 'Testnet Zcash',
      display: 'zec',
      symbol: 'ZEC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'zcashtestnet',
            baseDenom: 'zatoshi'
          },
          provider: 'Int3face'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/zec.int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/zec.int3.png'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;