import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'ggezchain',
  chain_type: 'cosmos',
  chain_id: 'ggezchain',
  website: 'https://ggez.one/',
  pretty_name: 'GGEZ1 Chain',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'ggez',
  daemon_name: 'ggezchaind',
  node_home: '$HOME/.ggezchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uggez1',
        fixed_min_gas_price: 0.2,
        low_gas_price: 0.4,
        average_gas_price: 0.5,
        high_gas_price: 0.75
      }, {
        denom: 'uggz',
        fixed_min_gas_price: 0.25,
        low_gas_price: 0.5,
        average_gas_price: 0.75,
        high_gas_price: 1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uggez1'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/GGEZLabs/ggezchain',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    binaries: {
      "linux/amd64": 'https://github.com/GGEZLabs/ggezchain/releases/download/v1.0.0/ggezchaind'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/GGEZLabs/ggez-mainnet/refs/heads/main/genesis/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.10',
      tag: 'v0.50.10-lsm'
    },
    ibc: {
      type: 'go',
      version: 'v8.2.0'
    },
    cosmwasm: {
      version: 'v0.51.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.51.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/chain.svg'
  },
  description: 'The GGEZ1 Foundation is a non-profit organization dedicated to supporting the GGEZ1 blockchain ecosystem. The ecosystem focuses on the tokenization of Real-World Assets (RWA) and integrates the principles of Regenerative Finance (ReFi) to promote a sustainable and equitable economic future.',
  apis: {
    rpc: [{
        address: 'https://bc.ggez.one:8443',
        provider: 'GGEZ1 Chain'
      }],
    rest: [{
        address: 'https://rest.ggez.one',
        provider: 'GGEZ1 Chain'
      }],
    grpc: [{
        address: '108.163.148.96:9090',
        provider: 'GGEZ1 Chain'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.ggez.one/ggezchain',
      tx_page: 'https://explorer.ggez.one/ggezchain/transactions/${txHash}',
      account_page: 'https://explorer.ggez.one/ggezchain/accounts/${accountAddress}',
      validator_page: 'https://explorer.ggez.one/ggezchain/validators/${validatorAddress}',
      proposal_page: 'https://explorer.ggez.one/ggezchain/proposals/${proposalId}',
      block_page: 'https://explorer.ggez.one/ggezchain/blocks/${blockHeight}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/chain.svg',
      theme: {
        primary_color_hex: '#8400cd'
      }
    }]
};
export default info;