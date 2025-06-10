import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xarchaintestnet',
  chainType: 'cosmos',
  chainId: 'xardev',
  website: 'https://arcana.network/',
  prettyName: 'XarChain Ceries Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'arcana',
  daemonName: 'xarchaind',
  nodeHome: '$HOME/.xarchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'stake',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'stake'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/arcana/xarchain',
    recommendedVersion: 'v0.0.4-alpha.3',
    compatibleVersions: ['v0.0.4-alpha.3'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15'
    },
    binaries: {
      "linux/amd64": 'https://github.com/arcana-network/xarchain/releases/download/v0.0.4-alpha.3/v0.0.4-alpha.3_linux_amd64.tar.gz:checksum=sha256:22b129d75c3824f8cefe58feeec559441952b78bda8c92addc3f55c82cfc88ce'
    },
    genesis: {
      genesisUrl: 'https://cosmos01-dev.arcana.network:26650/genesis'
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
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xarchaintestnet/images/arcana_logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xarchaintestnet/images/arcana_logo.svg'
  },
  description: 'Arcana\'s Chain Abstraction provides a unified balance on apps to spend on any chain, without swapping, bridging, or refuelling gas',
  apis: {
    rpc: [{
        address: 'https://cosmos01-dev.arcana.network',
        provider: 'arcana'
      }],
    rest: [{
        address: 'https://cosmos01-dev.arcana.network:26650',
        provider: 'arcana'
      }],
    grpc: [{
        address: 'https://cosmos01-dev.arcana.network:9091',
        provider: 'arcana'
      }]
  },
  explorers: [{
      kind: 'arcana ceries intent explorer',
      url: 'https://explorer.dev.arcana.network'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xarchaintestnet/images/arcana_logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xarchaintestnet/images/arcana_logo.svg',
      theme: {
        primaryColorHex: '#FF4E9F'
      }
    }]
};
export default info;