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
      },
      {
        address: 'https://epix-rpc.linknode.org',
        provider: 'AstroStake'
      },
      {
        address: 'https://mainnet-epix-rpc.konsortech.xyz:443',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rpc.nodesafe-app.xyz/epix/',
        provider: 'NodeSafe'
      },
      {
        address: 'https://epix.rpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
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
      },
      {
        address: 'https://epix-api.linknode.org',
        provider: 'AstroStake'
      },
      {
        address: 'https://mainnet-epix-api.konsortech.xyz:443',
        provider: 'KonsorTech'
      },
      {
        address: 'https://api.nodesafe-app.xyz/epix/',
        provider: 'NodeSafe'
      },
      {
        address: 'https://epix.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      }
    ],
    grpc: [
      {
        address: 'grpc-epix.vinjan-inc.com:39990',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'grpc-epix.dnsarz.net:443',
        provider: 'dnsarz'
      },
      {
        address: 'grpc-epix.onenov.xyz:443',
        provider: 'OneNov'
      },
      {
        address: 'epix-grpc.linknode.org:443',
        provider: 'AstroStake'
      },
      {
        address: 'mainnet-epix.konsortech.xyz:37090',
        provider: 'KonsorTech'
      },
      {
        address: 'grpc-epix.nodesafe-app.xyz:443',
        provider: 'NodeSafe'
      },
      {
        address: 'epix.grpc.m.anode.team:443',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://evmrpc.epix.zone/',
        provider: 'Epix'
      },
      {
        address: 'https://evm-epix.onenov.xyz',
        provider: 'OneNov'
      },
      {
        address: 'https://evm-epix.vinjan-inc.com',
        provider: 'Vinjan.inc'
      },
      {
        address: 'https://evmrpc-epix.dnsarz.net',
        provider: 'dnsarz'
      },
      {
        address: 'https://epix-evmrpc.linknode.org',
        provider: 'AstroStake'
      },
      {
        address: 'https://mainnet-epix-evm.konsortech.xyz/',
        provider: 'KonsorTech'
      },
      {
        address: 'https://json-rpc.nodesafe-app.xyz/epix/',
        provider: 'NodeSafe'
      }
    ]
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
    },
    {
      kind: 'AstroStake',
      url: 'https://stake.astrostake.xyz',
      txPage: 'https://stake.astrostake.xyz/epix/tx/${txHash}',
      accountPage: 'https://stake.astrostake.xyz/epix/address/${accountAddress}',
      blockPage: 'https://stake.astrostake.xyz/epix/block/${blockHeight}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/epix/',
      txPage: 'https://explorer.konsortech.xyz/epix/tx/${txHash}',
      accountPage: 'https://explorer.konsortech.xyz/epix/account/${accountAddress}'
    },
    {
      kind: 'NodeSafe',
      url: 'https://explorer.nodesafe-app.xyz/epix/',
      txPage: 'https://explorer.nodesafe-app.xyz/epix/tx/${txHash}',
      accountPage: 'https://explorer.nodesafe-app.xyz/epix/account/${accountAddress}'
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM',
      url: 'https://explorer.anode.team/main/epix/',
      txPage: 'https://explorer.anode.team/main/epix/tx/${txHash}',
      accountPage: 'https://explorer.anode.team/main/epix/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg'
    }]
};
export default info;