import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'wpdl2a',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.peaceism.io/',
  prettyName: 'wpd-l2a-mainnet-1',
  chainType: 'cosmos',
  chainId: 'wpd-l2a-mainnet-1',
  bech32Prefix: 'poa',
  bech32Config: {
    bech32PrefixAccAddr: 'poa',
    bech32PrefixAccPub: 'poapub',
    bech32PrefixValAddr: 'poavaloper',
    bech32PrefixValPub: 'poavaloperpub',
    bech32PrefixConsAddr: 'poavalcons',
    bech32PrefixConsPub: 'poavalconspub'
  },
  slip44: 118,
  description: 'Community and social development. Basic needs, services, and governance.',
  fees: {
    feeTokens: [{
        denom: 'poatoken'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'poatoken'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wpdl2a/images/leea.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wpdl2a/images/leea.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-l2a.peaceism.io',
        provider: 'Peaceism'
      }],
    rest: [{
        address: 'https://api-l2a.peaceism.io',
        provider: 'Peaceism'
      }]
  }
};
export default info;