import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'encryptlock',
  chainType: 'cosmos',
  status: 'live',
  website: 'https://encryptlock.pages.dev',
  networkType: 'mainnet',
  prettyName: 'EncryptLock',
  chainId: 'encryptlock-1',
  bech32Prefix: 'lock',
  daemonName: 'lockkeeper',
  nodeHome: '%LOCALAPPDATA%/EncryptLock/lockkeeper',
  keyAlgos: ['ed25519'],
  slip44: 4041,
  fees: {
    feeTokens: [{
        denom: 'lockunit',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'lockunit'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/filipejardim/encryptlock-downloads',
    recommendedVersion: 'v1.0.31',
    compatibleVersions: [
      'v1.0.29',
      'v1.0.30',
      'v1.0.31'
    ],
    binaries: {
      "windows/amd64": 'https://github.com/filipejardim/encryptlock-downloads/releases/download/v1.0.31/EncryptLock-Windows.exe'
    },
    sdk: {
      type: 'cosmos',
      version: '0.55.0'
    },
    genesis: {
      genesisUrl: 'https://encryptlock-rede.pages.dev/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://encryptlock-rpc.ncrypt-ock.workers.dev',
        provider: 'EncryptLock'
      }],
    rest: [{
        address: 'https://encryptlock-rest.ncrypt-ock.workers.dev',
        provider: 'EncryptLock'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/encryptlock/images/encryptlock.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/encryptlock/images/encryptlock.png'
  },
  description: 'EncryptLock is an independent Layer-1 blockchain built with Cosmos SDK, live since 18 October 2026. It is run by LockKeepers: ordinary Windows computers that run the blockchain, create the blocks and earn LOCK; each proves it is a real, separate computer with its TPM 2.0 chip (one computer, one vote). Every account signs every transaction with Ed25519 and ML-DSA-65 (NIST post-quantum, FIPS 204), and blocks are signed with ML-DSA-65; blocks are made by its own engine (the heaviest chain wins, the TPM chip in the place of mining), which answers the standard CometBFT RPC. Transfers must be accepted by the receiver within 1 hour or they return by themselves, and the chain has a freeze button, second-device approval, daily limits, a Sovereign Vault with 7 to 365 day withdrawal delays, inheritance and recovery by trusted people. Its built-in order-book market trades LOCK for USDC on Polygon through atomic swaps. Fees are a percentage of the amount (0.1% for transfers, 0.25% on the market), not gas prices. Maximum supply: 40,000,000 LOCK.',
  explorers: [{
      kind: 'EncryptLock Explorer',
      url: 'https://encryptlock.pages.dev/explorador/'
    }],
  keywords: [
    'post-quantum',
    'ml-dsa',
    'tpm',
    'layer-1'
  ]
};
export default info;