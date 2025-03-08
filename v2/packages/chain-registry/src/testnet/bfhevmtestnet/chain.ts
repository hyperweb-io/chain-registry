import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'bfhevmtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://bfhaltruistic.com',
  prettyName: 'BFH-EVM',
  chainType: 'cosmos',
  chainId: 'bfhevm_777-1',
  bech32Prefix: 'bfh',
  daemonName: 'bfhevmd',
  nodeHome: '$HOME/.bfhevm',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'abfh'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/monk07-01/bfhevm',
    recommendedVersion: 'v1.0.0-tokenfactory-evm',
    compatibleVersions: ['v1.0.0-tokenfactory-evm'],
    binaries: {
      "linux/amd64": 'https://github.com/monk07-01/bfhevm/releases/download/v1.0.0-tokenfactory-evm/bfhevm-linux-amd64',
      "darwin/arm64": 'https://github.com/monk07-01/bfhevm/releases/download/v1.0.0-tokenfactory-evm/bfhevm-darwin-arm64'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/monk07-01/bfhevm-testnets/master/bfhevm_777-1/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bfhevmtestnet/images/bfhevm.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-bfhevm.xyz:8443',
        provider: 'bfhlabs'
      }],
    rest: [{
        address: 'https://rest-testnet-bfhevm.xyz:443',
        provider: 'bfhlabs'
      }],
    grpc: [{
        address: 'https://grpc-testnet-bfhevm.xyz:4430',
        provider: 'bfhlabs'
      }],
    evmHttpJsonrpc: [{
        address: '_',
        provider: 'bfhlabs'
      }]
  },
  explorers: [{
      kind: 'BFH-DEXplorer',
      url: 'https://bfhaltruistic.com',
      txPage: 'https://bfhaltruistic.com/blocks'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bfhevmtestnet/images/bfhevm.png'
    }]
};
export default info;