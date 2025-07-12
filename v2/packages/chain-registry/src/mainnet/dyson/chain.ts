import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dyson',
  website: 'https://dysonprotocol.com/',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Dyson Protocol',
  chainType: 'cosmos',
  chainId: 'dyson-mainnet-01',
  bech32Prefix: 'dys',
  nodeHome: '$HOME/.dyson',
  daemonName: 'dysond',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'dys',
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0002,
        highGasPrice: 0.0003
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'dys'
      }]
  },
  codebase: {
    gitRepo: 'https://gitlab.com/dysonproject/dyson',
    recommendedVersion: 'v0.0.2-bebf2e98',
    compatibleVersions: ['v0.0.2-bebf2e98'],
    genesis: {
      genesisUrl: 'https://gitlab.com/dysonproject/dyson-deploy/-/raw/develop/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
  },
  apis: {
    rpc: [{
        address: 'https://dys-tm.dysonprotocol.com:443',
        provider: 'dysonprotocol'
      }, {
        address: 'https://dyson-rpc.cogwheel.zone:443',
        provider: 'cogwheel'
      }],
    rest: [{
        address: 'https://dys-api.dysonprotocol.com:443',
        provider: 'dysonprotocol'
      }, {
        address: 'https://dyson-api.cogwheel.zone:443',
        provider: 'cogwheel'
      }],
    grpc: [{
        address: 'dys-grpc.dyson.lol:443',
        provider: 'lol'
      }, {
        address: 'https://dyson-grpc.cogwheel.zone:443',
        provider: 'cogwheel'
      }]
  },
  explorers: [{
      kind: 'dysonprotocol',
      url: 'https://explorer.dys.dysonprotocol.com/dyson/',
      txPage: 'https://explorer.dys.dysonprotocol.com/dyson/tx/${txHash}',
      accountPage: 'https://explorer.dys.dysonprotocol.com/dyson/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
    }]
};
export default info;