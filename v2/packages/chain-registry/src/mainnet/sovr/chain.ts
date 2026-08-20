import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sovr',
  chainType: 'cosmos',
  chainId: 'sovr-1',
  prettyName: 'Sovren',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'sovr',
  daemonName: 'sovrd',
  nodeHome: '$HOME/.sovr',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usovr',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usovr'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/sovrn-tech/sovr-networks',
    recommendedVersion: 'v0.23.0',
    compatibleVersions: ['v0.23.0'],
    sdk: {
      type: 'cosmos',
      version: 'v0.53.8'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.23'
    },
    ibc: {
      type: 'go',
      version: 'v10.5.0'
    },
    cosmwasm: {
      version: 'v0.60.7',
      enabled: true
    },
    genesis: {
      name: 'sovr-1',
      genesisUrl: 'https://github.com/sovrn-tech/sovr-networks/raw/main/mainnet/genesis.json?checksum=sha256:04529695e7ccfe32fcf3bc8031c343056d27cbe4aa3b3046027e27065bb9a855'
    },
    tag: 'v0.23.0',
    binaries: {
      "linux/amd64": 'https://github.com/sovrn-tech/sovr-networks/releases/download/v0.23.0/sovrd-v0.23.0-linux-amd64'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.sovrchain.net',
        provider: 'sovren'
      }],
    rest: [{
        address: 'https://api.sovrchain.net',
        provider: 'sovren'
      }],
    grpc: [{
        address: 'grpc.sovrchain.net:443',
        provider: 'sovren'
      }]
  },
  explorers: [{
      kind: 'sovrscan',
      url: 'https://sovrscan.com',
      txPage: 'https://sovrscan.com/transactions/${txHash}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.svg'
    }],
  website: 'https://sovrentech.io'
};
export default info;