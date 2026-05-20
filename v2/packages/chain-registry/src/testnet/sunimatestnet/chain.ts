import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sunimatestnet',
  status: 'live',
  website: 'https://sunima.uk/',
  networkType: 'testnet',
  prettyName: 'Sunima Testnet',
  chainType: 'cosmos',
  chainId: 'sunima-testnet-1',
  bech32Prefix: 'sunima',
  daemonName: 'sunimad',
  nodeHome: '$HOME/.sunima',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'tsuna',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'tsuna'
      }]
  },
  codebase: {
    genesis: {
      genesisUrl: 'https://sunima.uk/chain/genesis.json'
    }
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sunimatestnet/images/sunima.svg'
  },
  apis: {
    rpc: [{
        address: 'https://sunima.uk/chain-rpc/',
        provider: 'Sunima Labs'
      }],
    rest: [{
        address: 'https://sunima.uk/chain-rest/',
        provider: 'Sunima Labs'
      }]
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sunimatestnet/images/sunima.svg'
    }]
};
export default info;