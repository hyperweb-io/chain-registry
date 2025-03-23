import { IBCData } from '@chain-registry/v2-types';

import * as _ethereum from './ethereum';
import * as _solana from './solana';
import * as _aaronetwork from './aaronetwork';
import * as _acrechain from './acrechain';
import * as _agoric from './agoric';
import * as _aioz from './aioz';
import * as _akash from './akash';
import * as _andromeda from './andromeda';
import * as _archway from './archway';
import * as _arkh from './arkh';
import * as _assetmantle from './assetmantle';
import * as _atomone from './atomone';
import * as _aura from './aura';
import * as _axelar from './axelar';
import * as _bandchain from './bandchain';
import * as _beezee from './beezee';
import * as _bitcanna from './bitcanna';
import * as _bitsong from './bitsong';
import * as _bluzelle from './bluzelle';
import * as _bostrom from './bostrom';
import * as _canto from './canto';
import * as _carbon from './carbon';
import * as _celestia from './celestia';
import * as _chain4energy from './chain4energy';
import * as _cheqd from './cheqd';
import * as _chihuahua from './chihuahua';
import * as _cifer from './cifer';
import * as _comdex from './comdex';
import * as _composable from './composable';
import * as _conscious from './conscious';
import * as _coreum from './coreum';
import * as _cosmoshub from './cosmoshub';
import * as _crescent from './crescent';
import * as _cronos from './cronos';
import * as _cryptoorgchain from './cryptoorgchain';
import * as _decentr from './decentr';
import * as _desmos from './desmos';
import * as _dhealth from './dhealth';
import * as _doravota from './doravota';
import * as _dungeon from './dungeon';
import * as _dydx from './dydx';
import * as _dymension from './dymension';
import * as _dyson from './dyson';
import * as _echelon from './echelon';
import * as _elys from './elys';
import * as _emoney from './emoney';
import * as _empowerchain from './empowerchain';
import * as _evmos from './evmos';
import * as _fetchhub from './fetchhub';
import * as _firmachain from './firmachain';
import * as _furya from './furya';
import * as _fxcore from './fxcore';
import * as _galaxy from './galaxy';
import * as _gateway from './gateway';
import * as _genesisl1 from './genesisl1';
import * as _gitopia from './gitopia';
import * as _gravitybridge from './gravitybridge';
import * as _haqq from './haqq';
import * as _humans from './humans';
import * as _impacthub from './impacthub';
import * as _imversed from './imversed';
import * as _injective from './injective';
import * as _int3face from './int3face';
import * as _irisnet from './irisnet';
import * as _jackal from './jackal';
import * as _joltify from './joltify';
import * as _juno from './juno';
import * as _kava from './kava';
import * as _kichain from './kichain';
import * as _kimanetwork from './kimanetwork';
import * as _konstellation from './konstellation';
import * as _kopi from './kopi';
import * as _kujira from './kujira';
import * as _kyve from './kyve';
import * as _lambda from './lambda';
import * as _lava from './lava';
import * as _likecoin from './likecoin';
import * as _lorenzo from './lorenzo';
import * as _lumnetwork from './lumnetwork';
import * as _mande from './mande';
import * as _manifest from './manifest';
import * as _mantrachain from './mantrachain';
import * as _medasdigital from './medasdigital';
import * as _meme from './meme';
import * as _migaloo from './migaloo';
import * as _milkyway from './milkyway';
import * as _neutaro from './neutaro';
import * as _neutron from './neutron';
import * as _nibiru from './nibiru';
import * as _nim from './nim';
import * as _noble from './noble';
import * as _nolus from './nolus';
import * as _nomic from './nomic';
import * as _nyx from './nyx';
import * as _odin from './odin';
import * as _okexchain from './okexchain';
import * as _omniflixhub from './omniflixhub';
import * as _onex from './onex';
import * as _onomy from './onomy';
import * as _oraichain from './oraichain';
import * as _osmosis from './osmosis';
import * as _panacea from './panacea';
import * as _passage from './passage';
import * as _persistence from './persistence';
import * as _planq from './planq';
import * as _point from './point';
import * as _provenance from './provenance';
import * as _pryzm from './pryzm';
import * as _pundix from './pundix';
import * as _pylons from './pylons';
import * as _quasar from './quasar';
import * as _quicksilver from './quicksilver';
import * as _qwoyn from './qwoyn';
import * as _realio from './realio';
import * as _rebus from './rebus';
import * as _regen from './regen';
import * as _rizon from './rizon';
import * as _routerchain from './routerchain';
import * as _saga from './saga';
import * as _scorum from './scorum';
import * as _secretnetwork from './secretnetwork';
import * as _seda from './seda';
import * as _sei from './sei';
import * as _self from './self';
import * as _sentinel from './sentinel';
import * as _sge from './sge';
import * as _shareledger from './shareledger';
import * as _shentu from './shentu';
import * as _shido from './shido';
import * as _sidechain from './sidechain';
import * as _sifchain from './sifchain';
import * as _sommelier from './sommelier';
import * as _source from './source';
import * as _stafihub from './stafihub';
import * as _stargaze from './stargaze';
import * as _starname from './starname';
import * as _stratos from './stratos';
import * as _stride from './stride';
import * as _synternet from './synternet';
import * as _teritori from './teritori';
import * as _terra from './terra';
import * as _terra2 from './terra2';
import * as _tgrade from './tgrade';
import * as _titan from './titan';
import * as _umee from './umee';
import * as _unification from './unification';
import * as _uptick from './uptick';
import * as _xion from './xion';
import * as _xpla from './xpla';
import * as _zenrock from './zenrock';

const ibcData: IBCData[] = [
  ..._ethereum.ibcData,
  ..._solana.ibcData,
  ..._aaronetwork.ibcData,
  ..._acrechain.ibcData,
  ..._agoric.ibcData,
  ..._aioz.ibcData,
  ..._akash.ibcData,
  ..._andromeda.ibcData,
  ..._archway.ibcData,
  ..._arkh.ibcData,
  ..._assetmantle.ibcData,
  ..._atomone.ibcData,
  ..._aura.ibcData,
  ..._axelar.ibcData,
  ..._bandchain.ibcData,
  ..._beezee.ibcData,
  ..._bitcanna.ibcData,
  ..._bitsong.ibcData,
  ..._bluzelle.ibcData,
  ..._bostrom.ibcData,
  ..._canto.ibcData,
  ..._carbon.ibcData,
  ..._celestia.ibcData,
  ..._chain4energy.ibcData,
  ..._cheqd.ibcData,
  ..._chihuahua.ibcData,
  ..._cifer.ibcData,
  ..._comdex.ibcData,
  ..._composable.ibcData,
  ..._conscious.ibcData,
  ..._coreum.ibcData,
  ..._cosmoshub.ibcData,
  ..._crescent.ibcData,
  ..._cronos.ibcData,
  ..._cryptoorgchain.ibcData,
  ..._decentr.ibcData,
  ..._desmos.ibcData,
  ..._dhealth.ibcData,
  ..._doravota.ibcData,
  ..._dungeon.ibcData,
  ..._dydx.ibcData,
  ..._dymension.ibcData,
  ..._dyson.ibcData,
  ..._echelon.ibcData,
  ..._elys.ibcData,
  ..._emoney.ibcData,
  ..._empowerchain.ibcData,
  ..._evmos.ibcData,
  ..._fetchhub.ibcData,
  ..._firmachain.ibcData,
  ..._furya.ibcData,
  ..._fxcore.ibcData,
  ..._galaxy.ibcData,
  ..._gateway.ibcData,
  ..._genesisl1.ibcData,
  ..._gitopia.ibcData,
  ..._gravitybridge.ibcData,
  ..._haqq.ibcData,
  ..._humans.ibcData,
  ..._impacthub.ibcData,
  ..._imversed.ibcData,
  ..._injective.ibcData,
  ..._int3face.ibcData,
  ..._irisnet.ibcData,
  ..._jackal.ibcData,
  ..._joltify.ibcData,
  ..._juno.ibcData,
  ..._kava.ibcData,
  ..._kichain.ibcData,
  ..._kimanetwork.ibcData,
  ..._konstellation.ibcData,
  ..._kopi.ibcData,
  ..._kujira.ibcData,
  ..._kyve.ibcData,
  ..._lambda.ibcData,
  ..._lava.ibcData,
  ..._likecoin.ibcData,
  ..._lorenzo.ibcData,
  ..._lumnetwork.ibcData,
  ..._mande.ibcData,
  ..._manifest.ibcData,
  ..._mantrachain.ibcData,
  ..._medasdigital.ibcData,
  ..._meme.ibcData,
  ..._migaloo.ibcData,
  ..._milkyway.ibcData,
  ..._neutaro.ibcData,
  ..._neutron.ibcData,
  ..._nibiru.ibcData,
  ..._nim.ibcData,
  ..._noble.ibcData,
  ..._nolus.ibcData,
  ..._nomic.ibcData,
  ..._nyx.ibcData,
  ..._odin.ibcData,
  ..._okexchain.ibcData,
  ..._omniflixhub.ibcData,
  ..._onex.ibcData,
  ..._onomy.ibcData,
  ..._oraichain.ibcData,
  ..._osmosis.ibcData,
  ..._panacea.ibcData,
  ..._passage.ibcData,
  ..._persistence.ibcData,
  ..._planq.ibcData,
  ..._point.ibcData,
  ..._provenance.ibcData,
  ..._pryzm.ibcData,
  ..._pundix.ibcData,
  ..._pylons.ibcData,
  ..._quasar.ibcData,
  ..._quicksilver.ibcData,
  ..._qwoyn.ibcData,
  ..._realio.ibcData,
  ..._rebus.ibcData,
  ..._regen.ibcData,
  ..._rizon.ibcData,
  ..._routerchain.ibcData,
  ..._saga.ibcData,
  ..._scorum.ibcData,
  ..._secretnetwork.ibcData,
  ..._seda.ibcData,
  ..._sei.ibcData,
  ..._self.ibcData,
  ..._sentinel.ibcData,
  ..._sge.ibcData,
  ..._shareledger.ibcData,
  ..._shentu.ibcData,
  ..._shido.ibcData,
  ..._sidechain.ibcData,
  ..._sifchain.ibcData,
  ..._sommelier.ibcData,
  ..._source.ibcData,
  ..._stafihub.ibcData,
  ..._stargaze.ibcData,
  ..._starname.ibcData,
  ..._stratos.ibcData,
  ..._stride.ibcData,
  ..._synternet.ibcData,
  ..._teritori.ibcData,
  ..._terra.ibcData,
  ..._terra2.ibcData,
  ..._tgrade.ibcData,
  ..._titan.ibcData,
  ..._umee.ibcData,
  ..._unification.ibcData,
  ..._uptick.ibcData,
  ..._xion.ibcData,
  ..._xpla.ibcData,
  ..._zenrock.ibcData
];

export default ibcData;
