import { IBCInfo } from '@chain-registry/types';

import * as _mainnet from './mainnet/index';
import * as _testnet from './testnet/index';
import * as _devnet from './devnet/index';

const ibc: IBCInfo[] = [
  ..._mainnet.ibc,
  ..._testnet.ibc,
  ..._devnet.ibc
];

export default ibc;
