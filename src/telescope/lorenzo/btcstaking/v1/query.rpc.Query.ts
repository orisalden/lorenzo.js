//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryStakingRecordRequest, QueryStakingRecordResponse, QueryBTCBStakingRecordRequest, QueryBTCBStakingRecordResponse } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  stakingRecord(request: QueryStakingRecordRequest): Promise<QueryStakingRecordResponse>;
  bTCBStakingRecord(request: QueryBTCBStakingRecordRequest): Promise<QueryBTCBStakingRecordResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.stakingRecord = this.stakingRecord.bind(this);
    this.bTCBStakingRecord = this.bTCBStakingRecord.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.btcstaking.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  stakingRecord(request: QueryStakingRecordRequest): Promise<QueryStakingRecordResponse> {
    const data = QueryStakingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.btcstaking.v1.Query", "StakingRecord", data);
    return promise.then(data => QueryStakingRecordResponse.decode(new BinaryReader(data)));
  }
  bTCBStakingRecord(request: QueryBTCBStakingRecordRequest): Promise<QueryBTCBStakingRecordResponse> {
    const data = QueryBTCBStakingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("lorenzo.btcstaking.v1.Query", "BTCBStakingRecord", data);
    return promise.then(data => QueryBTCBStakingRecordResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    stakingRecord(request: QueryStakingRecordRequest): Promise<QueryStakingRecordResponse> {
      return queryService.stakingRecord(request);
    },
    bTCBStakingRecord(request: QueryBTCBStakingRecordRequest): Promise<QueryBTCBStakingRecordResponse> {
      return queryService.bTCBStakingRecord(request);
    }
  };
};