import { IBCData } from '@chain-registry/types';

import * as _prysmdevnet from './prysmdevnet';

const ibcData: IBCData[] = [
  ..._prysmdevnet.ibcData
];

export default ibcData;
