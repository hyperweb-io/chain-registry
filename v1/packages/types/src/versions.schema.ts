export type Repo = string;
export type Version = string;
export type Tag = string;
export interface Sdk {
  type: "cosmos" | "penumbra" | "other";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
}
export interface Ibc {
  type: "go" | "rust" | "other";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
  ics_enabled?: ("ics20-1" | "ics27-1" | "mauth")[];
}
export interface Cosmwasm {
  version?: Version;
  repo?: Repo;
  tag?: Tag;
  enabled?: boolean;
  path?: string;
}
export interface Consensus {
  type: "tendermint" | "cometbft" | "sei-tendermint" | "cometbls";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
}
export interface Language {
  type: "go" | "rust" | "solidity" | "other";
  version?: Version;
  repo?: Repo;
  tag?: Tag;
}
export interface Binaries {
  "linux/amd64"?: string;
  "linux/arm64"?: string;
  "darwin/amd64"?: string;
  "darwin/arm64"?: string;
  "windows/amd64"?: string;
  "windows/arm64"?: string;
}
export interface Versions {
  $schema?: string;
  chain_name: string;
  versions: {
    name: string;
    tag?: string;
    height?: number;
    proposal?: number;
    previous_version_name?: string;
    next_version_name?: string;
    recommended_version?: string;
    compatible_versions?: string[];
    sdk?: Sdk;
    consensus?: Consensus;
    cosmwasm?: Cosmwasm;
    ibc?: Ibc;
    language?: Language;
    binaries?: Binaries;
  }[];
}