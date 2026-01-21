import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'epix',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://epix.zone/',
  prettyName: 'Epix',
  chainType: 'cosmos',
  chainId: 'epix_1916-1',
  bech32Prefix: 'epix',
  daemonName: 'epixd',
  nodeHome: '$HOME/.epixd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aepix',
        fixedMinGasPrice: 1000000000000,
        lowGasPrice: 1000000000000,
        averageGasPrice: 2000000000000,
        highGasPrice: 3000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aepix'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/EpixZone/Epix',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/EpixZone/Epix/refs/heads/main/Networks/Mainnet/epix_1916-0/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    ibc: {
      type: 'go',
      version: 'v6.1.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.epix.zone',
        provider: 'Epix'
      },
      {
        address: 'https://rpc-m.epix.vinjan-inc.com',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://rpc-epix.dnsarz.net:443',
        provider: 'dnsarz'
      }
    ],
    rest: [
      {
        address: 'https://api.epix.zone',
        provider: 'Epix'
      },
      {
        address: 'https://api-m.epix.vinjan-inc.com',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://api-epix.dnsarz.net',
        provider: 'dnsarz'
      }
    ],
    grpc: [
      {
        address: 'grpc.epix.zone:15067',
        provider: 'Epix'
      },
      {
        address: 'grpc-m.epix.vinjan-inc.com:39990',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'grpc-epix.dnsarz.net:443',
        provider: 'dnsarz'
      }
    ],
    evmHttpJsonrpc: [{
        address: 'https://evmrpc.epix.zone/',
        provider: 'Epix'
      }]
  },
  explorers: [{
      kind: 'L1',
      url: 'https://explorer.epix.zone/',
      txPage: 'https://explorer.epix.zone/epix/tx/${txHash}'
    }, {
      kind: 'EVM',
      url: 'https://scan.epix.zone/',
      txPage: 'https://scan.epix.zone/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg'
    }]
};
export default info;