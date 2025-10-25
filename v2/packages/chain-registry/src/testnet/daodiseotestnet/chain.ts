import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'daodiseotestnet',
  chainType: 'cosmos',
  chainId: 'ithaca-1',
  prettyName: 'DAODISEO Testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://daodiseo.money',
  bech32Prefix: 'odiseo',
  daemonName: 'achillesd',
  nodeHome: '.achillesd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uodis',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uodis'
      }]
  },
  apis: {
    rpc: [
      {
        address: 'https://odiseo-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-testnet-daodiseo.nodeist.net:443',
        provider: 'Nodeist'
      },
      {
        address: 'https://daodiseo-testnet-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://odiseo-testnet-rpc.bonynode.online',
        provider: 'BonyNode'
      },
      {
        address: 'https://odiseo_testnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://odiseo-testnet.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://rpc.odiseo-testnet.irynamcc.co.uk:443 ',
        provider: 'Iryna'
      },
      {
        address: 'https://daodiseo-testnet.rpc.mrsml.fun:443',
        provider: 'Mrs_ml'
      },
      {
        address: 'https://odiseo-testnet.rpc.sbgid.com:443',
        provider: 'SbGid'
      },
      {
        address: 'https://rpc-daodiseo.dnsarz.xyz',
        provider: 'dnsarz'
      },
      {
        address: 'https://rpc-test.odiseo.vinjan.xyz',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://rpc.odiseo-testnet.liora.fun:443',
        provider: 'Monika'
      },
      {
        address: 'https://odiseo-rpctest.codeblocklabs.com',
        provider: 'CodeBlockLabs'
      },
      {
        address: 'https://testnet-rpc.daodiseo.chaintools.tech:443',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc.odiseo-t.nodevism.com',
        provider: 'Nodevism'
      },
      {
        address: 'https://odiseo.blocksync.me/rpc',
        provider: 'BlockSync'
      }
    ],
    rest: [
      {
        address: 'https://odiseo-testnet-api.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://daodiseo-testnet-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://odiseo-testnet-api.bonynode.online',
        provider: 'BonyNode'
      },
      {
        address: 'https://odiseo_testnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://odiseo-testnet.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://api.odiseo-testnet.irynamcc.co.uk',
        provider: 'Iryna'
      },
      {
        address: 'https://daodiseo-testnet.api.mrsml.fun',
        provider: 'Mrs_ml'
      },
      {
        address: 'https://odiseo-testnet.api.sbgid.com',
        provider: 'SbGid'
      },
      {
        address: 'https://api-daodiseo.dnsarz.xyz',
        provider: 'dnsarz'
      },
      {
        address: 'https://api-test.odiseo.vinjan.xyz',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://api.odiseo-testnet.liora.fun',
        provider: 'Monika'
      },
      {
        address: 'https://api.odiseo-t.nodevism.com',
        provider: 'Nodevism'
      },
      {
        address: 'https://odiseo-apitest.codeblocklabs.com',
        provider: 'CodeBlockLabs'
      },
      {
        address: 'https://testnet-api.daodiseo.chaintools.tech:443',
        provider: 'ChainTools'
      },
      {
        address: 'https://odiseo.blocksync.me/api',
        provider: 'BlockSync'
      }
    ],
    grpc: [
      {
        address: 'odiseo-testnet-grpc.polkachu.com:31390',
        provider: 'Polkachu'
      },
      {
        address: 'daodiseo-testnet-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: ' grpc.odiseo-testnet.irynamcc.co.uk:443',
        provider: 'Iryna'
      },
      {
        address: 'odiseo-testnet.grpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'daodiseo-testnet.grpc.mrsml.fun:443',
        provider: 'Mrs_ml'
      },
      {
        address: 'odiseo-testnet.grpc.sbgid.com:443',
        provider: 'SbGid'
      },
      {
        address: 'https://grpc.odiseo-testnet.liora.fun:443',
        provider: 'Monika'
      },
      {
        address: 'grpc-test.odiseo.vinjan.xyz:28090',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://testnet-grpc.daodiseo.chaintools.tech:443',
        provider: 'ChainTools'
      },
      {
        address: 'https://odiseo.blocksync.me:24090',
        provider: 'BlockSync'
      }
    ]
  },
  explorers: [
    {
      kind: 'cosmotracker',
      url: 'https://testnet.cosmotracker.com/daodiseo',
      txPage: 'https://testnet.cosmotracker.com/daodiseo/tx/${txHash}',
      accountPage: 'https://testnet.cosmotracker.com/daodiseo/account/${accountAddress}'
    },
    {
      kind: 'bony-explorer',
      url: 'https://explorer.bonynode.online/odiseo/staking',
      txPage: 'https://explorer.bonynode.online/odiseo/tx/${txHash}',
      accountPage: 'https://explorer.bonynode.online/odiseo/account/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/odiseo-testnet',
      txPage: 'https://exp.stakevillage.net/odiseo-testnet/txs/${txHash}',
      accountPage: 'https://exp.stakevillage.net/odiseo-testnet/account/${accountAddress}'
    },
    {
      kind: 'SbGid',
      url: 'https://exp.sbgid.com/odiseo-testnet',
      txPage: 'https://exp.sbgid.com/odiseo-testnet/txs/${txHash}',
      accountPage: 'https://exp.sbgid.com/odiseo-testnet/account/${accountAddress}'
    },
    {
      kind: 'dnsarz',
      url: 'https://ping.dnsarz.xyz/daodiseo-testnet',
      txPage: 'https://ping.dnsarz.xyz/daodiseo-testnet/txs/${txHash}',
      accountPage: 'https://ping.dnsarz.xyz/daodiseo-testnet/account/${accountAddress}'
    },
    {
      kind: 'CodeBlockLabs',
      url: 'https://explorer.codeblocklabs.com/odiseo-testnet',
      txPage: 'https://explorer.codeblocklabs.com/odiseo-testnet/txs/${txHash}',
      accountPage: 'https://explorer.codeblocklabs.com/odiseo-testnet/account/${accountAddress}'
    },
    {
      kind: 'Vinjan.Inc',
      url: 'https://xplorer.vinjan.xyz/odiseo-testnet',
      txPage: 'https://xplorer.vinjan.xyz/odiseo-testnet/txs/${txHash}',
      accountPage: 'https://xplorer.vinjan.xyz/odiseo-testnet/account/${accountAddress}'
    },
    {
      kind: 'ChainTools',
      url: 'https://testnet.explorer.chaintools.tech/odiseo',
      txPage: 'https://testnet.explorer.chaintools.tech/odiseo/txs/${txHash}',
      accountPage: 'https://testnet.explorer.chaintools.tech/odiseo/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/odiseo-testnet',
      txPage: 'https://explorer.whenmoonwhenlambo.money/odiseo-testnet/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/odiseo-testnet/account/${accountAddress}'
    },
    {
      kind: 'BlockSync Dashboard',
      url: 'https://dashboard.blocksync.me/odiseo',
      txPage: 'https://dashboard.blocksync.me/odiseo/tx/${txHash}',
      accountPage: 'https://dashboard.blocksync.me/odiseo/account/${accountAddress}'
    }
  ],
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/daodiseotestnet/images/odiseo.svg'
  }
};
export default info;