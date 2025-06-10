import { Asset, AssetList, Chain } from '@chain-registry/types';
import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfo, Currency, FeeCurrency } from '@keplr-wallet/types';
import semver from 'semver';

const getRpc = (chain: Chain): string => chain.apis?.rpc?.[0]?.address ?? '';
const getRest = (chain: Chain): string => chain.apis?.rest?.[0]?.address ?? '';
const getExplr = (chain: Chain): string => chain.explorers?.[0]?.url ?? '';

const versionPatterns = {
  fullSemver: /v?(\d+\.\d+\.\d+)(?=-[\w.-]+|$)/, // Matches complete semver patterns like '0.47.20' or 'v0.47.20'
  partialSemver: /v?(\d+\.\d+)(?=(?:\.\d+)?(?=-[\w.-]+|$))/, // Matches partial semver patterns like '0.47' or 'v0.47'
  basicVersion: /v?(\d+)(?=(?:\.\d+)?(?:\.\d+)?(?=-[\w.-]+|$))/, // Matches basic versions like '0' or 'v0'
  tagged: /@v(\d+\.\d+)(?:\.x)?(?=-[\w.-]+|$)/, // Specific for tagged formats
  embedded: /\/v(\d+\.\d+\.\d+)(?=-[\w.-]+|$)/, // For versions embedded in paths
  simple: /v?(\d+)(?:\.(\d+))?(?:\.(\d+))?$/, // General simple versions
  complexEmbedded: /[\w-]+\/[\w-]+ v(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-\d+[\w.-]*)/, // Complex formats with namespaces
  taggedVersion: /[\w-]+\/[\w-]+ v(\d+)(?:\.(\d+))?(?:\.(\d+))?(?=-[\w.-]+|$)/ // Versions with descriptive tags
};

export function extractVersion(input: string): string | null {
  let version = null;

  // Check each pattern in turn
  if (versionPatterns.fullSemver.test(input)) {
    version = input.match(versionPatterns.fullSemver)?.[1];
  } else if (versionPatterns.partialSemver.test(input)) {
    version = input.match(versionPatterns.partialSemver)?.[1];
  } else if (versionPatterns.basicVersion.test(input)) {
    version = input.match(versionPatterns.basicVersion)?.[1];
  } else if (versionPatterns.taggedVersion.test(input)) {
    version = input.match(versionPatterns.taggedVersion)?.[1];
  } else if (versionPatterns.complexEmbedded.test(input)) {
    version = input.match(versionPatterns.complexEmbedded)?.[1];
  } else if (versionPatterns.simple.test(input)) {
    version = input.match(versionPatterns.simple)?.[1];
  } else if (versionPatterns.tagged.test(input)) {
    version = input.match(versionPatterns.tagged)?.[1];
  } else if (versionPatterns.embedded.test(input)) {
    version = input.match(versionPatterns.embedded)?.[1];
  }

  return version ? normalizeVersion(version) : null;
}

function normalizeVersion(version: string): string {
  // Ensures the version is normalized to the 'x.y.z' format, if applicable
  const parts = version.split('.');
  while (parts.length < 3) {
    parts.push('0');
  }
  return parts.join('.');
}



export const chainRegistryChainToKeplr = (
  chain: Chain,
  assets: AssetList[],
  options: {
    getRpcEndpoint?: (chain: Chain) => string;
    getRestEndpoint?: (chain: Chain) => string;
    getExplorer?: (chain: Chain) => string;
  } = {
    getRpcEndpoint: getRpc,
    getRestEndpoint: getRest,
    getExplorer: getExplr
  }
): ChainInfo => {
  if (!options.getRestEndpoint) options.getRestEndpoint = getRest;
  if (!options.getRpcEndpoint) options.getRpcEndpoint = getRpc;
  if (!options.getExplorer) options.getExplorer = getExplr;

  const features = [];

  // check if it's a Cosmos SDK chain (either new or old format)
  const isCosmosSDKChain = chain.codebase?.sdk?.type === 'cosmos' || !!chain.codebase?.cosmosSdkVersion;

  if (isCosmosSDKChain) {
    // determine SDK version
    let sdkVer;
    if (chain.codebase?.sdk?.type === 'cosmos' && chain.codebase.sdk.version) {
      sdkVer = extractVersion(chain.codebase.sdk.version);
    } else if (chain.codebase?.cosmosSdkVersion) {
      sdkVer = extractVersion(chain.codebase.cosmosSdkVersion);
    } else {
      // if NOT specified, we assume stargate, sorry not sorry
      sdkVer = '0.40.0'; 
    }

    // stargate
    if (semver.satisfies(sdkVer, '>=0.40')) features.push('stargate');
    // no-legacy-stdTx
    if (semver.satisfies(sdkVer, '>=0.43')) features.push('no-legacy-stdTx');
    // until further notice, assume 'ibc-transfer'
    features.push('ibc-transfer');

    // ibc-go
    if (semver.satisfies(sdkVer, '>=0.45')) features.push('ibc-go');

    // CosmWasm feature detection
    const cosmwasmEnabled = chain.codebase?.cosmwasm?.enabled ?? chain.codebase?.cosmwasmEnabled ?? false;
    if (cosmwasmEnabled) {
      features.push('cosmwasm');
      const wasmVer = extractVersion(
        chain.codebase?.cosmwasm?.version ?? chain.codebase?.cosmwasmVersion ?? '0.24.0'
      );
      if (semver.satisfies(wasmVer, '>=0.24.0')) features.push('wasmd_0.24+');
    }
  }

  const chainAssets =
    assets.find((asset) => asset.chainName === chain.chainName)?.assets || [];

  const feeDenoms =
    chain.fees?.feeTokens.map<string>((feeToken) => feeToken.denom) || [];

  /**
   * FROM KEPLR chain-info.d.ts:
   * This is used to set the fee of the transaction.
   * If this field is empty, it just use the default gas price step (low: 0.01, average: 0.025, high: 0.04).
   * And, set field's type as primitive number because it is hard to restore the prototype after deserialzing if field's type is `Dec`.
   */
  interface GasPriceStep {
    low: number;
    average: number;
    high: number;
  }

  const gasPriceSteps: Record<string, GasPriceStep> = chain.fees?.feeTokens?.reduce((m, feeToken) => {
    m[feeToken.denom] = {
      low: feeToken.lowGasPrice ?? 0.01,
      average: feeToken.averageGasPrice ?? 0.025,
      high: feeToken.highGasPrice ?? 0.04
    };
    return m;
  }, {} as Record<string, GasPriceStep>);

  const stakingDenoms =
    chain.staking?.stakingTokens.map<string>(
      (stakingToken) => stakingToken.denom
    ) || [];

  const currencies: Currency[] = chainAssets.map((currency: Asset) => {
    return {
      coinDenom: currency.symbol,
      coinMinimalDenom: currency.base,
      coinDecimals: currency.denomUnits.filter(
        (denomUnit: { denom: string }) => denomUnit.denom === currency.display
      )[0]?.exponent,
      coinGeckoId: currency.coingeckoId || undefined,
      coinImageUrl: currency.logoURIs?.svg ?? currency.logoURIs?.png
    };
  });

  const stakeCurrency: Currency =
    currencies.find((currency) => stakingDenoms.includes(currency.coinDenom)) ??
    currencies[0];

  const feeCurrencies: FeeCurrency[] = currencies
    // USE THE FEE DENOMS
    .filter((currency) => feeDenoms.includes(currency.coinMinimalDenom))
    .map((feeCurrency) => {
      if (!(feeCurrency.coinMinimalDenom in gasPriceSteps)) {
        return feeCurrency;
      }

      // has gas
      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];
      return {
        ...feeCurrency,
        gasPriceStep
      };
    });

  const feeCurrenciesDefault: FeeCurrency[] = currencies
    // USE THE STAKE CURRENCY
    .filter((currency) => stakeCurrency.coinDenom === currency.coinDenom)
    .map((feeCurrency) => {
      if (!(feeCurrency.coinMinimalDenom in gasPriceSteps)) {
        return feeCurrency;
      }

      // has gas
      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];
      return {
        ...feeCurrency,
        gasPriceStep
      };
    });

  const chainInfo: ChainInfo = {
    rpc: options.getRpcEndpoint(chain),
    rest: options.getRestEndpoint(chain),
    chainId: chain.chainId,
    chainName: chain.prettyName,
    bip44: {
      coinType: chain.slip44
    },
    bech32Config: Bech32Address.defaultBech32Config(chain.bech32Prefix),
    currencies: currencies,
    stakeCurrency: stakeCurrency || currencies[0],
    feeCurrencies:
      feeCurrencies.length !== 0 ? feeCurrencies : feeCurrenciesDefault,
    features
  };

  return chainInfo;
};
