import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'ton',
  assets: [{
      description: 'Toncoin ($TON) is the native cryptocurrency of the TON (The Open Network) blockchain.',
      extendedDescription: 'TON (The Open Network) is a decentralized layer-1 blockchain designed for scalability, speed, and efficiency. It was originally conceived by the creators of Telegram but was later handed over to an open-source community to maintain and expand.',
      denomUnits: [{
          denom: 'nanoton',
          exponent: 0,
          aliases: ['nanoTon']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      typeAsset: 'unknown',
      base: 'nanoton',
      name: 'Toncoin',
      display: 'ton',
      symbol: 'TON',
      coingeckoId: 'the-open-network',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://ton.tg/',
        twitter: 'https://x.com/ton_blockchain'
      }
    }, {
      description: 'The Hamster Kombat ($HMSTR) is the cryptocurrency of the TON (The Open Network) blockchain.',
      extendedDescription: 'HMSTR (The Hamster Kombat) is a cryptocurrency-based clicker game that has garnered attention for its engaging gameplay and integration with the digital currency ecosystem.',
      denomUnits: [{
          denom: 'nanohmstr',
          exponent: 0,
          aliases: ['nanoHmstr']
        }, {
          denom: 'hmstr',
          exponent: 9
        }],
      typeAsset: 'unknown',
      base: 'nanohmstr',
      name: 'Hamster',
      display: 'hmstr',
      symbol: 'HMSTR',
      coingeckoId: 'hamster-kombat',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/hmstr.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://hamsterkombatgame.io/',
        twitter: 'https://x.com/hamster_kombat'
      }
    }]
};
export default info;