import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nillion',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Nillion',
  chainType: 'cosmos',
  chainId: 'nillion-1',
  bech32Prefix: 'nillion',
  daemonName: 'nilchaind',
  nodeHome: '$HOME/.nillionapp',
  keyAlgos: ['ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unil',
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unil'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/NillionNetwork/nilchain',
    recommendedVersion: 'v0.2.5',
    compatibleVersions: ['v0.2.5'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/NillionNetwork/networks/main/nillion-1/genesis.json.xz'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11'
    },
    ibc: {
      type: 'go',
      version: '8.2.1'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://nillion-rpc.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://rpc.nillion.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://nillion-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://nillion-mainnet-rpc.shazoes.xyz',
        provider: 'Shazoes'
      },
      {
        address: 'https://rpc.nillion.validatus.com',
        provider: 'Validatus'
      }
    ],
    rest: [
      {
        address: 'https://nillion-api.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://api.nillion.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://nillion-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://nillion-mainnet-api.shazoes.xyz',
        provider: 'Shazoes'
      },
      {
        address: 'https://api.nillion.validatus.com',
        provider: 'Validatus'
      }
    ],
    grpc: [
      {
        address: 'https://nillion-grpc.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://grpc.nillion.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'nillion-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'nillion-mainnet-grpc.shazoes.xyz:30890',
        provider: 'Shazoes'
      },
      {
        address: 'grpc.nillion.validatus.com:443',
        provider: 'Validatus'
      }
    ]
  },
  explorers: [
    {
      kind: 'Nillionhub [Noders]',
      url: 'https://nillionhub.org/explorer/dashboard',
      txPage: 'https://nillionhub.org/explorer/transactions/${txHash}',
      accountPage: 'https://nillionhub.org/explorer/accounts/${accountAddress}'
    },
    {
      url: 'https://nillion.explorers.guru',
      txPage: 'https://nillion.explorers.guru/transaction/${txHash}',
      accountPage: 'https://nillion.explorers.guru/account/${accountAddress}'
    },
    {
      url: 'https://www.mintscan.io/nillion',
      txPage: 'https://www.mintscan.io/nillion/tx/${txHash}',
      accountPage: 'https://www.mintscan.io/nillion/address/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/nillion/',
      txPage: 'https://explorer.nodestake.org/nillion/txs/${txHash}',
      accountPage: 'https://explorer.nodestake.org/nillion/account/${accountAddress}'
    },
    {
      kind: 'Validatorinfo',
      url: 'https://validatorinfo.com/networks/nillion/overview',
      validatorPage: 'https://validatorinfo.com/networks/nillion/validators',
      proposalPage: 'https://validatorinfo.com/networks/nillion/governance'
    }
  ],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.png'
    }],
  description: 'Nillion is the first Blind Computer – a private computation and storage network. The network uses PETs (Privacy-Enhancing Technologies) to enable computation and storage on data while maintaining privacy, making possible use cases like private personalized AI, encrypted databases, data marketplace, and privacy-preserving applications.\n\n$NIL is the native utility token of the network that is used for:\n-Network fees for blind computation and payments across the Coordination Layer and Petnet\n-Staking to secure the network\n-Governance participation the onchain governance module\n\n$NIL enables access to Nillion modules and services such as:\n-DB: an encrypted database with data split up across multiple nodes. Calculations can still be performed on data while in encrypted form\n-AI: AI-focused privacy technologies that include:\n--AI Virtual Machine (AIVM) – a secure AI inference platform co-developed with Meta for private inference\n--Nada-AI – a library for nilVM, offering an interface for running small AI models\n--nilTEE – uses Trusted Execution Environments (TEEs) to run faster private inference where speed is important\n-nilVM: VM with libraries that simplify program development for AI devs by letting them use Python and Javascript to write web3 programs.'
};
export default info;