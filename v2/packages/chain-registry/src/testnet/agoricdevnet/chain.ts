import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'agoricdevnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Agoric',
  chainType: 'cosmos',
  chainId: 'agoricdev-25',
  bech32Prefix: 'agoric',
  daemonName: 'agd',
  nodeHome: '$HOME/.agoric',
  slip44: 564,
  alternativeSlip44s: [118],
  staking: {
    stakingTokens: [{
        denom: 'ubld'
      }]
  },
  fees: {
    feeTokens: [{
        denom: 'ubld',
        lowGasPrice: 0.03,
        averageGasPrice: 0.05,
        highGasPrice: 0.07
      }, {
        denom: 'uist',
        lowGasPrice: 0.0034,
        averageGasPrice: 0.007,
        highGasPrice: 0.02
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Agoric/agoric-sdk/',
    genesis: {
      genesisUrl: 'https://main.agoric.net/genesis.json'
    },
    recommendedVersion: 'agoric-upgrade-20-rc0',
    compatibleVersions: ['agoric-upgrade-20-rc0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.34.35',
      repo: 'https://github.com/agoric-labs/cometbft',
      tag: 'v0.34.35-alpha.agoric.3'
    },
    cosmwasm: {
      enabled: false
    },
    language: {
      type: 'go',
      version: '1.22.12'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/agoric-labs/cosmos-sdk',
      version: 'v0.46.16',
      tag: 'v0.46.16-alpha.agoric.2.5'
    },
    ibc: {
      type: 'go',
      version: 'v6.3.1',
      repo: 'https://github.com/agoric-labs/ibc-go',
      tag: 'v6.3.1-alpha.agoric.4',
      icsEnabled: ['ics20-1']
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.svg'
  },
  description: 'The Agoric platform makes it safe and seamless to build decentralized apps using your existing JavaScript knowledge.',
  apis: {
    rpc: [{
        address: 'https://devnet.rpc.agoric.net:443'
      }],
    rest: [{
        address: 'https://devnet.api.agoric.net:443'
      }],
    grpc: [{
        address: 'devnet.grpc.agoric.net:443'
      }]
  },
  explorers: []
};
export default info;