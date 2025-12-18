import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'namada',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://namada.net',
  prettyName: 'Namada',
  chainType: 'unknown',
  chainId: 'namada.5f5de2dd1b88cba30586420',
  slip44: 877,
  bech32Prefix: 'tnam',
  daemonName: 'unam',
  keyAlgos: ['ed25519'],
  fees: {
    feeTokens: [{
        denom: 'unam',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unam'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/namada-net/namada'
  },
  apis: {
    rpc: [
      {
        provider: 'TuDudes',
        address: 'https://rpc.namada.tududes.com'
      },
      {
        provider: 'Mandragora',
        address: 'https://namada-rpc.mandragora.io'
      },
      {
        provider: 'PowerStaking',
        address: 'https://namadam.powerstaking.tech'
      },
      {
        provider: 'stake.systems',
        address: 'https://namada-main.stakesystems.io'
      },
      {
        provider: '5ElementsNodes',
        address: 'https://rpc-namada.5elementsnodes.com'
      },
      {
        provider: 'itrocket-team',
        address: 'https://namada-mainnet-rpc.itrocket.net'
      },
      {
        provider: 'Sproutstake',
        address: 'https://namada-rpc.sproutstake.space'
      },
      {
        provider: 'Papadritta',
        address: 'https://rpc.papadritta.com'
      },
      {
        provider: 'Decentrio',
        address: 'https://namada.rpc.decentrio.ventures'
      },
      {
        provider: 'StakePool',
        address: 'https://rpc.namada.stakepool.dev.br'
      },
      {
        provider: 'TNSO',
        address: 'https://rpc.namadascan.io'
      },
      {
        provider: 'Synergy',
        address: 'https://namada-rpc.synergynodes.com'
      },
      {
        provider: 'L0vd',
        address: 'https://namada-mainnet.rpc.l0vd.com:443'
      },
      {
        provider: 'Loser',
        address: 'https://namada.loserboy.xyz'
      },
      {
        provider: 'jacky1988',
        address: 'https://namada.itudou.xyz'
      },
      {
        provider: 'Validatus',
        address: 'https://rpc.namada.validatus.com'
      },
      {
        provider: 'anodeofzen',
        address: 'https://namada-rpc.zenode.app'
      }
    ]
  },
  explorers: [
    {
      kind: 'Namada Explorer',
      url: 'https://namada.world/',
      txPage: 'https://namada.world/transactions/${txHash}',
      accountPage: 'https://namada.world/account/${accountAddress}'
    },
    {
      kind: 'Explorer75',
      url: 'https://explorer75.org/namada',
      txPage: 'https://explorer75.org/namada/tx/${txHash}',
      accountPage: 'https://explorer75.org/namada/accounts/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://namada.valopers.com/',
      txPage: 'https://namada.valopers.com/transactions/${txHash}',
      accountPage: 'https://namada.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'Shielded.Live',
      url: 'https://shielded.live',
      txPage: 'https://shielded.live/txs/${txHash}',
      accountPage: 'https://shielded.live/address/${accountAddress}'
    },
    {
      kind: 'Sproutstake',
      url: 'https://namada-explorer.sproutstake.space',
      txPage: 'https://namada-explorer.sproutstake.space/main/transactions/${txHash}',
      accountPage: 'https://namada-explorer.sproutstake.space/main/accounts/${accountAddress}'
    },
    {
      kind: 'Coverlet',
      url: 'https://namada.coverlet.io/',
      txPage: 'https://namada.coverlet.io/tx/${txHash}',
      accountPage: 'https://namada.coverlet.io/address/${accountAddress}'
    }
  ],
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
    }]
};
export default info;