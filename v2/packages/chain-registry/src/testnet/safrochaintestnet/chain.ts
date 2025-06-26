import { Chain } from '@chain-registry/types';
const info: Chain = {
  chainType: 'cosmos',
  $schema: '../../chain.schema.json',
  chainName: 'safrochaintestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://safrochain.com',
  prettyName: 'Safrochain Testnet',
  chainId: 'safrochain-testnet',
  bech32Prefix: 'addr_safro',
  daemonName: 'safrochaind',
  nodeHome: '.safrochaind',
  keyAlgos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'saf',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'saf'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Safrochain-Org/safrochain-node',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/Safrochain-Org/safrochain-node/releases/download/v1.0.0/v1.0.0_linux_amd64.tar.gz',
      "darwin/amd64": 'https://github.com/Safrochain-Org/safrochain-node/releases/download/v1.0.0/v1.0.0_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/Safrochain-Org/safrochain-node/releases/download/v1.0.0/v1.0.0_darwin_arm64.tar.gz'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.safrochain.com',
        provider: 'Safrochain'
      }],
    rest: [{
        address: 'https://rest.testnet.safrochain.com',
        provider: 'Safrochain'
      }],
    grpc: [{
        address: 'https://grpc.testnet.safrochain.com',
        provider: 'Safrochain'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.testnet.safrochain.com',
      txPage: 'https://explorer.testnet.safrochain.com/transactions/${txHash}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/safrochaintestnet/images/saf.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/safrochaintestnet/images/saf.svg'
  }
};
export default info;