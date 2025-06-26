import { IBCData } from '@chain-registry/types';

import * as _picasso from './picasso';
import * as _composablepolkadot from './composablepolkadot';
import * as _penumbra from './penumbra';
import * as _symphonytestnet3 from './symphonytestnet3';
import * as _cosmoshubicstestnet from './cosmoshubicstestnet';

const ibcData: IBCData[] = [
  ..._picasso.ibcData,
  ..._composablepolkadot.ibcData,
  ..._penumbra.ibcData,
  ..._symphonytestnet3.ibcData,
  ..._cosmoshubicstestnet.ibcData
];

export default ibcData;
