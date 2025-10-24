import { IBCData } from '@chain-registry/types';

import * as _mainnet from './mainnet/index';
import * as _testnet from './testnet/index';
import * as _devnet from './devnet/index';

const ibcData: IBCData[] = [
  ..._mainnet.ibcData,
  ..._testnet.ibcData,
  ..._devnet.ibcData
];

export default ibcData;
