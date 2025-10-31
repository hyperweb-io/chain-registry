import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bitbadges',
  status: 'live',
  chainType: 'cosmos',
  networkType: 'mainnet',
  website: 'https://bitbadges.io/',
  prettyName: 'BitBadges',
  chainId: 'bitbadges-1',
  daemonName: 'bitbadgeschaind',
  bech32Prefix: 'bb',
  nodeHome: '$HOME/.bitbadgeschaind',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubadge',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00025,
        averageGasPrice: 0.0025,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubadge'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/bitbadges/bitbadgeschain/',
    recommendedVersion: 'v6',
    compatibleVersions: ['v6'],
    binaries: {
      "linux/amd64": 'https://github.com/BitBadges/bitbadgeschain/releases/download/v6/bitbadgeschain-linux-amd64',
      "linux/arm64": 'https://github.com/BitBadges/bitbadgeschain/releases/download/v6/bitbadgeschain-linux-arm64'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11'
    },
    ibc: {
      type: 'go',
      version: 'v8.3.2'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12',
      repo: 'https://github.com/cometbft/cometbft'
    },
    genesis: {
      genesisUrl: 'https://github.com/BitBadges/bitbadgeschain/blob/master/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
  },
  description: 'BitBadges is the all-in-one, multi-chain platform for building your digital identity.',
  apis: {
    rpc: [{
        address: 'https://rpc.bitbadges.io',
        provider: 'bitbadges'
      }, {
        address: 'https://bitbadges_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    rest: [{
        address: 'https://lcd.bitbadges.io',
        provider: 'bitbadges'
      }, {
        address: 'https://bitbadges_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }],
    grpc: [{
        address: 'https://grpc.bitbadges.io',
        provider: 'bitbadges'
      }]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitbadges',
      txPage: 'https://www.mintscan.io/bitbadges/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/bitbadges/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.bitbadges.io/BitBadges%20Mainnet',
      txPage: 'https://explorer.bitbadges.io/BitBadges%20Mainnet/txs/${txHash}',
      accountPage: 'https://explorer.bitbadges.io/BitBadBitBadges%20Mainnetges/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/bitbadges',
      txPage: 'https://explorer.whenmoonwhenlambo.money/bitbadges/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/bitbadges/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
    }]
};
export default info;