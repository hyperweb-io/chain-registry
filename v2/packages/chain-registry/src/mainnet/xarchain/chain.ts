import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'xarchain',
  chainType: 'cosmos',
  chainId: 'xarchain',
  website: 'https://arcana.network/',
  prettyName: 'XarChain Coral',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'arcana',
  daemonName: 'xarchaind',
  nodeHome: '$HOME/.xarchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'stxar',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'stxar'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/arcana/xarchain',
    recommendedVersion: 'v0.0.4-rc.2',
    compatibleVersions: ['v0.0.4-rc.2'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15'
    },
    binaries: {
      "linux/amd64": 'https://github.com/arcana-network/xarchain/releases/download/v0.0.4-rc.2/v0.0.4-rc.2_linux_amd64.tar.gz:checksum=sha256:9d141b09ddfe9cbb8c5ccbb5c5e38f5bbd381444efecc96166af8419f5a48465'
    },
    genesis: {
      genesisUrl: 'https://cosmos01-testnet.arcana.network:26650/genesis'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.10',
      tag: 'v0.50.10'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.2'
    },
    cosmwasm: {
      version: 'v0.53.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.53.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xarchain/images/arcana_logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xarchain/images/arcana_logo.svg'
  },
  description: 'Arcana\'s Chain Abstraction provides a unified balance on apps to spend on any chain, without swapping, bridging, or refuelling gas',
  apis: {
    rpc: [{
        address: 'https://cosmos01-testnet.arcana.network:26650',
        provider: 'arcana'
      }],
    rest: [{
        address: 'https://cosmos01-testnet.arcana.network',
        provider: 'arcana'
      }],
    grpc: [{
        address: 'https://cosmos01-testnet.arcana.network:9091',
        provider: 'arcana'
      }]
  },
  explorers: [{
      kind: 'arcana ceries intent explorer',
      url: 'https://explorer.arcana.network'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xarchain/images/arcana_logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xarchain/images/arcana_logo.svg',
      theme: {
        primaryColorHex: '#FF4E9F'
      }
    }]
};
export default info;