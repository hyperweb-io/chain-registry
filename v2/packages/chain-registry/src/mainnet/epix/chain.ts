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
        fixedMinGasPrice: 20000000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 30000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aepix'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/EpixZone/EpixChain',
    recommendedVersion: 'v0.7.3',
    compatibleVersions: ['v0.7.3'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/EpixZone/EpixChain/v0.5.0-rc42/artifacts/genesis/mainnet/genesis.json'
    },
    language: {
      type: 'go',
      version: '1.25.9'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.54.3'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.39.3'
    },
    ibc: {
      type: 'go',
      version: 'v11.1.0'
    },
    cosmwasm: {
      enabled: false
    },
    tag: 'v0.7.3'
  },
  description: 'Epix is designed to power a completely decentralized internet, where websites are hosted by everyone and controlled by no one, making the web unstoppable.',
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
        address: 'https://rpc-epix.onenov.xyz',
        provider: 'OneNov'
      },
      {
        address: 'https://rpc-epix.vinjan-inc.com',
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
        address: 'https://api-epix.onenov.xyz',
        provider: 'OneNov'
      },
      {
        address: 'https://api-epix.vinjan-inc.com',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://api-epix.dnsarz.net',
        provider: 'dnsarz'
      }
    ],
    grpc: [{
        address: 'grpc-epix.vinjan-inc.com:39990',
        provider: 'Vinjan.Inc'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evmrpc.epix.zone/',
        provider: 'Epix'
      }]
  },
  explorers: [
    {
      kind: 'Epix',
      url: 'https://explorer.epix.zone/',
      txPage: 'https://explorer.epix.zone/#/tx/${txHash}',
      accountPage: 'https://explorer.epix.zone/#/account/${accountAddress}',
      blockPage: 'https://explorer.epix.zone/#/block/${blockHeight}',
      proposalPage: 'https://explorer.epix.zone/#/gov/${proposalId}'
    },
    {
      kind: 'OneNov',
      url: 'https://explorer.onenov.xyz/epix',
      txPage: 'https://explorer.onenov.xyz/epix/tx/${txHash}',
      accountPage: 'https://explorer.onenov.xyz/epix/account/${accountAddress}'
    },
    {
      kind: 'Blockscout',
      url: 'https://scan.epix.zone/',
      txPage: 'https://scan.epix.zone/tx/${txHash}',
      accountPage: 'https://scan.epix.zone/address/${accountAddress}',
      blockPage: 'https://scan.epix.zone/block/${blockHeight}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg'
    }]
};
export default info;