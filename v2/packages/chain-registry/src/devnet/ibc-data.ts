import { IBCData } from '@chain-registry/types';

import * as _bitwaydevnet from './bitwaydevnet';
import * as _outbedevnet from './outbedevnet';
import * as _prysmdevnet from './prysmdevnet';

const ibcData: IBCData[] = [
  ..._bitwaydevnet.ibcData,
  ..._outbedevnet.ibcData,
  ..._prysmdevnet.ibcData
];

export default ibcData;
