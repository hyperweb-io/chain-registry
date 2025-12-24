import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kyvedevnet',
  chainType: 'cosmos',
  chainId: 'korellia-2',
  prettyName: 'KYVE Korellia',
  status: 'live',
  networkType: 'devnet',
  bech32Prefix: 'kyve',
  daemonName: 'kyved',
  nodeHome: '$HOME/.kyve',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'tkyve',
        fixedMinGasPrice: 62.5,
        lowGasPrice: 62.5,
        averageGasPrice: 80,
        highGasPrice: 125
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/KYVENetwork/chain',
    recommendedVersion: 'v2.2.0',
    compatibleVersions: ['v2.2.0'],
    binaries: {
      "linux/amd64": 'https://github.com/KYVENetwork/chain/releases/download/v2.2.0/kyved_kaon_linux_amd64',
      "linux/arm64": 'https://github.com/KYVENetwork/chain/releases/download/v2.2.0/kyved_kaon_linux_arm64',
      "darwin/amd64": 'https://github.com/KYVENetwork/chain/releases/download/v2.2.0/kyved_kaon_darwin_amd64',
      "darwin/arm64": 'https://github.com/KYVENetwork/chain/releases/download/v2.2.0/kyved_kaon_darwin_arm64'
    },
    genesis: {
      genesisUrl: 'https://files.kyve.network/korellia-2/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.korellia.kyve.network',
        provider: 'kyve'
      }],
    rest: [{
        address: 'https://api.korellia.kyve.network',
        provider: 'kyve'
      }]
  },
  explorers: [{
      kind: 'KYVE Explorer',
      url: 'https://explorer.kyve.network/korellia',
      txPage: 'https://explorer.kyve.network/korellia/tx/${txHash}',
      accountPage: 'https://explorer.kyve.network/korellia/account/${accountAddress}'
    }]
};
export default info;