import { IBCData } from '@chain-registry/v2-types';

import * as _picasso from './picasso';
import * as _composablepolkadot from './composablepolkadot';
import * as _penumbra from './penumbra';
import * as _cosmoshubicstestnet from './cosmoshubicstestnet';

const ibcData: IBCData[] = [
  ..._picasso.ibcData,
  ..._composablepolkadot.ibcData,
  ..._penumbra.ibcData,
  ..._cosmoshubicstestnet.ibcData
];

export default ibcData;
