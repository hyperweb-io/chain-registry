import { AssetList } from '@chain-registry/types';

import _bitwaydevnet from './bitwaydevnet';
import _outbedevnet from './outbedevnet';
import _prysmdevnet from './prysmdevnet'

const assets: AssetList[] = [_bitwaydevnet,_outbedevnet,_prysmdevnet];

export default assets;
