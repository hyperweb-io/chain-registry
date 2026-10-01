export interface ChainOperatorInfo {
  address?: string;
}
export interface ChainInfo {
  chain_name: string;
  chain_id: string;
  client_id: string;
  connection_id: string;
}
export interface ChannelInfo {
  channel_id: string;
  port_id: string;
  client_id?: string;
  connection_id?: string;
}
export interface IBCData {
  $schema?: string;
  chain_1: ChainInfo;
  chain_2: ChainInfo;
  channels: {
    chain_1: ChannelInfo;
    chain_2: ChannelInfo;
    ordering: "ordered" | "unordered";
    version: string;
    fee_version?: string;
    tags?: {
      preferred?: boolean;
      status?: "ACTIVE" | "INACTIVE" | "CLOSED" | "PENDING";
    };
  }[];
  operators?: {
    chain_1: ChainOperatorInfo;
    chain_2: ChainOperatorInfo;
    memo: string;
    name: string;
    discord_handle?: string;
  }[];
}