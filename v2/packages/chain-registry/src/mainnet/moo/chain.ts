import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'moo',
  chainType: 'cosmos',
  chainId: 'moo-1',
  prettyName: 'MilkyWay',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.milkyway.zone',
  bech32Prefix: 'init',
  daemonName: 'miniwasm',
  nodeHome: '$HOME/.miniwasm',
  keyAlgos: ['ethsecp256k1', 'secp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50',
        fixedMinGasPrice: 0.015
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/initia-labs/miniwasm',
    recommendedVersion: 'v1.0.2',
    compatibleVersions: ['v1.0.2'],
    binaries: {
      "linux/amd64": 'https://github.com/initia-labs/miniwasm/releases/download/v1.0.2/miniwasm_v1.0.2_Linux_x86_64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://rpc-moo-1.anvil.asia-southeast.initia.xyz/genesis'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-moo-1.anvil.asia-southeast.initia.xyz'
      }],
    rest: [{
        address: 'https://rest-moo-1.anvil.asia-southeast.initia.xyz'
      }],
    grpc: [{
        address: 'grpc-moo-1.anvil.asia-southeast.initia.xyz:443'
      }]
  },
  explorers: [{
      kind: 'initia scan',
      url: 'https://scan.initia.xyz/moo-1',
      txPage: 'https://scan.initia.xyz/moo-1/txs/${txHash}',
      accountPage: 'https://scan.initia.xyz/moo-1/accounts/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/moo/images/milkyway.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/moo/images/milkyway.png'
    }],
  description: 'MilkyWay\'s moo-1 is an Initia L2 minitia focused on liquid staking solutions.'
};
export default info;