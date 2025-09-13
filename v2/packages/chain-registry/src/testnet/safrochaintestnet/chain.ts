import { Chain } from '@chain-registry/types';
const info: Chain = {
  chainType: 'cosmos',
  $schema: '../../chain.schema.json',
  chainName: 'safrochaintestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://safrochain.com',
  prettyName: 'Safrochain Testnet',
  chainId: 'safro-testnet-1',
  bech32Prefix: 'addr_safro',
  daemonName: 'safrochaind',
  nodeHome: '.safrochain',
  keyAlgos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usaf',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usaf'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Safrochain-Org/safrochain-node',
    recommendedVersion: 'v0.1.0',
    compatibleVersions: ['v0.1.0']
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
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/safrochaintestnet/images/saf.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/safrochaintestnet/images/saf.svg'
    }]
};
export default info;