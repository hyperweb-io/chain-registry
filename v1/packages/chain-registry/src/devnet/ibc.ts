import { IBCInfo } from '@chain-registry/types';

import * as _outbedevnet from './outbedevnet';
import * as _prysmdevnet from './prysmdevnet';

const ibc: IBCInfo[] = [
  ..._outbedevnet.ibc,
  ..._prysmdevnet.ibc
];

export default ibc;
