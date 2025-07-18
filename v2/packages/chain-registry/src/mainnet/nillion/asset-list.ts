import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'nillion',
  assets: [{
      description: 'NIL - the native token of Nillion',
      extendedDescription: 'Nillion is the first Blind Computer – a private computation and storage network. The network uses PETs (Privacy-Enhancing Technologies) to enable computation and storage on data while maintaining privacy, making possible use cases like private personalized AI, encrypted databases, data marketplace, and privacy-preserving applications.\n\n$NIL is the native utility token of the network that is used for:\n-Network fees for blind computation and payments across the Coordination Layer and Petnet\n-Staking to secure the network\n-Governance participation the onchain governance module\n\n$NIL enables access to Nillion modules and services such as:\n-DB: an encrypted database with data split up across multiple nodes. Calculations can still be performed on data while in encrypted form\n-AI: AI-focused privacy technologies that include:\n--AI Virtual Machine (AIVM) – a secure AI inference platform co-developed with Meta for private inference\n--Nada-AI – a library for nilVM, offering an interface for running small AI models\n--nilTEE – uses Trusted Execution Environments (TEEs) to run faster private inference where speed is important\n-nilVM: VM with libraries that simplify program development for AI devs by letting them use Python and Javascript to write web3 programs.',
      denomUnits: [{
          denom: 'unil',
          exponent: 0
        }, {
          denom: 'nil',
          exponent: 6
        }],
      base: 'unil',
      name: 'Nillion',
      display: 'nil',
      symbol: 'NIL',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://nillion.com',
        twitter: 'https://x.com/nillionnetwork'
      },
      coingeckoId: 'nillion'
    }]
};
export default info;