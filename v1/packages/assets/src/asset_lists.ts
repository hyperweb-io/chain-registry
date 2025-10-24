import { AssetList } from '@chain-registry/types';

import _mainnet from './mainnet/assets';
import _testnet from './testnet/assets';
import _devnet from './devnet/assets'

const asset_lists: AssetList[] = [..._mainnet,..._testnet,..._devnet];

export default asset_lists;
