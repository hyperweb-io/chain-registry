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
  nodeHome: '$HOME/.local/share/namada',
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
    gitRepo: 'https://github.com/namada-net/namada',
    language: {
      type: 'rust'
    },
    consensus: {
      type: 'cometbft'
    },
    genesis: {
      genesisUrl: 'https://github.com/namada-net/namada-mainnet-genesis/tree/main/genesis'
    },
    ibc: {
      type: 'go'
    }
  },
  description: 'Namada is a composable privacy layer for the multichain ecosystem. It\'s a proof-of-stake Layer 1 designed to protect user data through a shielded asset hub and shielded cross-chain transactions. Namada can support any asset and helps bring data protection to existing chains, dapps, tokens, and NFTs. Built primarily in Rust, Namada uses CometBFT consensus and the IBC (Inter-Blockchain Communication) protocol for multichain interoperability, with the ability to expand to additional ecosystems beyond IBC. By leveraging advanced cryptography such as zk-SNARKs and a strong interoperability model, Namada serves as a privacy-preserving building block for users interacting across many blockchains and protocols.',
  apis: {
    rpc: [
      {
        provider: 'Heliax',
        address: 'https://rpc.namada.net'
      },
      {
        provider: 'TuDudes',
        address: 'https://rpc.namada.tududes.com'
      },
      {
        provider: 'Mandragora',
        address: 'https://namada-rpc.mandragora.io'
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
        provider: 'Papadritta',
        address: 'https://rpc.papadritta.com'
      },
      {
        provider: 'Decentrio',
        address: 'https://namada.rpc.decentrio.ventures'
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
        address: 'https://namada-mainnet.rpc.l0vd.com'
      },
      {
        provider: 'Loser',
        address: 'https://namada.loserboy.xyz'
      },
      {
        provider: 'Validatus',
        address: 'https://rpc.namada.validatus.com'
      },
      {
        provider: 'anodeofzen',
        address: 'https://namada-rpc.zenode.app'
      },
      {
        provider: 'max-02',
        address: 'https://rpc.namada.max-02.xyz'
      },
      {
        provider: 'Grand Valley',
        address: 'https://lightnode-rpc-mainnet-namada.grandvalleys.com'
      },
      {
        provider: 'deNodes',
        address: 'https://namada-mainnet-rpc.denodes.xyz'
      },
      {
        provider: 'shield-crypto',
        address: 'https://namada-public-rpc.shield-crypto.com'
      },
      {
        provider: 'EmberStake',
        address: 'https://namada-rpc.emberstake.xyz'
      },
      {
        provider: 'NODERS',
        address: 'https://namada-rpc.noders.services'
      },
      {
        provider: 'Wavefive',
        address: 'https://namada-rpc.wavefive.xyz'
      },
      {
        provider: 'Architect Nodes',
        address: 'https://rpc-namada.architectnodes.com'
      },
      {
        provider: 'Citizen Web3',
        address: 'https://rpc.namada-archive.citizenweb3.com'
      },
      {
        provider: 'Coverlet',
        address: 'https://rpc.namada.coverlet.io'
      },
      {
        provider: 'CroutonDigital',
        address: 'https://namada-mainnet-rpc.crouton.digital'
      },
      {
        provider: '0xWave',
        address: 'https://namada-rpc.0xwave.com'
      },
      {
        provider: 'Cosmic Validator',
        address: 'https://namada-rpc.cosmicvalidator.com'
      },
      {
        provider: 'Hadesguard',
        address: 'https://namada-rpc.hadesguard.tech'
      },
      {
        provider: 'LiveRaveN',
        address: 'https://namada.rpc.liveraven.net'
      },
      {
        provider: 'TdrSys',
        address: 'https://namada.tdrsys.com'
      },
      {
        provider: 'Nodes.Guru',
        address: 'https://rpc-1.namada.nodes.guru'
      },
      {
        provider: 'StakeUp',
        address: 'https://rpc.namada.stakeup.tech'
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