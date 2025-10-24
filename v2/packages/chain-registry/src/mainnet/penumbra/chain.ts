import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'penumbra',
  chainType: 'unknown',
  networkType: 'mainnet',
  status: 'live',
  prettyName: 'Penumbra',
  chainId: 'penumbra-1',
  description: 'A fully private, cross-chain proof-of-stake network and decentralized exchange for the Cosmos and beyond.',
  images: [{
      imageSync: {
        chainName: 'penumbra',
        baseDenom: 'upenumbra'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg'
    }],
  slip44: 118
};
export default info;