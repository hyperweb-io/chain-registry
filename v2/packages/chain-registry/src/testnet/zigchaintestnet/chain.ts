import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'zigchaintestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'ZIGChain Testnet',
  website: 'https://zigchain.com/',
  chainType: 'cosmos',
  chainId: 'zig-test-1',
  bech32Prefix: 'zig',
  daemonName: 'zigchaind',
  nodeHome: '$HOME/.zigchain',
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.svg'
  },
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uzig'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uzig'
      }]
  },
  apis: {
    rest: [{
        address: 'https://testnet-api.zigchain.com',
        provider: 'ZIGCHAIN'
      }],
    rpc: [{
        address: 'https://testnet-rpc.zigchain.com',
        provider: 'ZIGCHAIN'
      }]
  },
  keywords: [
    'wealth generation',
    'rwa',
    'staking',
    'wasm',
    'testnet'
  ],
  images: [{
      imageSync: {
        chainName: 'zigchaintestnet',
        baseDenom: 'uzig'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.svg'
    }]
};
export default info;