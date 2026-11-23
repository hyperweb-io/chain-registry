import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'wpd',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.peaceism.io/',
  prettyName: 'WPD Mainnet',
  chainType: 'cosmos',
  chainId: 'wpd-mainnet-1',
  bech32Prefix: 'wpd',
  bech32Config: {
    bech32PrefixAccAddr: 'wpd',
    bech32PrefixAccPub: 'wpdpub',
    bech32PrefixValAddr: 'wpdvaloper',
    bech32PrefixValPub: 'wpdvaloperpub',
    bech32PrefixConsAddr: 'wpdvalcons',
    bech32PrefixConsPub: 'wpdvalconspub'
  },
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'pcsm'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'pcsm'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wpd/images/wpd.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wpd/images/wpd.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.peaceism.io',
        provider: 'Peaceism'
      }],
    rest: [{
        address: 'https://api.peaceism.io',
        provider: 'Peaceism'
      }]
  },
  explorers: [{
      kind: 'WPD Explorer',
      url: 'https://explorer.peaceism.io'
    }]
};
export default info;