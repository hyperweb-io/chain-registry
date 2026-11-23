import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'zetaphy',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://app.sawasdeecoin.com',
  prettyName: 'ZETAPHY',
  chainType: 'cosmos',
  chainId: 'zetaphy_3659-1',
  bech32Prefix: 'zetaphy',
  nodeHome: '$HOME/.evmd',
  daemonName: 'zetaphyd',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'azetaphy',
        fixedMinGasPrice: 1000000000,
        lowGasPrice: 1000000000,
        averageGasPrice: 1000000000,
        highGasPrice: 2000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'azetaphy'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/pospos191-alt/zetaphy',
    recommendedVersion: 'zetaphyd-a5698832d273',
    compatibleVersions: [
      'zetaphyd-a5698832d273',
      'zetaphyd-493f142343d6',
      'zetaphyd-d9844796c709'
    ],
    binaries: {
      "linux/amd64": 'https://github.com/pospos191-alt/zetaphy/releases/download/zetaphyd-a5698832d273/zetaphyd-linux-amd64?checksum=sha256:a94193abe331c261cab2fd93fbec9d7616a161e2df7bee101d51f43b63869ded',
      "linux/arm64": 'https://github.com/pospos191-alt/zetaphy/releases/download/zetaphyd-a5698832d273/zetaphyd-linux-arm64?checksum=sha256:4eabd2aeb9b2d6f6f42a35c813c9d94e3e50ca1d045ac6495c18a85963ee4b81'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/pospos191-alt/zetaphy/main/zetaphy-chain/mainnet/zetaphy_3659-1/genesis.json'
    },
    consensus: {
      type: 'cometbft'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetaphy/images/zetaphy.png'
  },
  description: 'ZETAPHY: a post-quantum Cosmos EVM chain with Neuro scam protection. Coin: ZTPHY.',
  apis: {
    rpc: [{
        address: 'https://rpc.sawasdeecoin.com/rpc',
        provider: 'ZETAPHY'
      }],
    rest: [{
        address: 'https://rpc.sawasdeecoin.com/rest',
        provider: 'ZETAPHY'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.sawasdeecoin.com',
        provider: 'ZETAPHY'
      }]
  },
  explorers: [{
      kind: 'ZETAPHY Explorer',
      url: 'https://explorer.sawasdeecoin.com/?network=mainnet',
      txPage: 'https://explorer.sawasdeecoin.com/?network=mainnet#/tx/${txHash}',
      accountPage: 'https://explorer.sawasdeecoin.com/?network=mainnet#/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetaphy/images/zetaphy.png'
    }]
};
export default info;