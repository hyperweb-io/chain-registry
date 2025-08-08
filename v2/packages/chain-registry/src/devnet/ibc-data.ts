import { IBCData } from '@chain-registry/types';

import * as _outbedevnet from './outbedevnet';
import * as _prysmdevnet from './prysmdevnet';

const ibcData: IBCData[] = [
  ..._outbedevnet.ibcData,
  ..._prysmdevnet.ibcData
];

export default ibcData;
