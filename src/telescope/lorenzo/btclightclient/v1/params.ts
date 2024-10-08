//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * List of addresses which are allowed to insert headers to btc light client
   * if the list is empty, any address can insert headers
   */
  insertHeadersAllowList: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/lorenzo.btclightclient.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * List of addresses which are allowed to insert headers to btc light client
   * if the list is empty, any address can insert headers
   */
  insert_headers_allow_list?: string[];
}
export interface ParamsAminoMsg {
  type: "/lorenzo.btclightclient.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  insert_headers_allow_list: string[];
}
function createBaseParams(): Params {
  return {
    insertHeadersAllowList: []
  };
}
export const Params = {
  typeUrl: "/lorenzo.btclightclient.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.insertHeadersAllowList) && (!o.insertHeadersAllowList.length || typeof o.insertHeadersAllowList[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.insert_headers_allow_list) && (!o.insert_headers_allow_list.length || typeof o.insert_headers_allow_list[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.insert_headers_allow_list) && (!o.insert_headers_allow_list.length || typeof o.insert_headers_allow_list[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.insertHeadersAllowList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.insertHeadersAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.insertHeadersAllowList = object.insertHeadersAllowList?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      insertHeadersAllowList: Array.isArray(object?.insert_headers_allow_list) ? object.insert_headers_allow_list.map((e: any) => e) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    if (message.insertHeadersAllowList) {
      obj.insert_headers_allow_list = message.insertHeadersAllowList.map(e => e);
    } else {
      obj.insert_headers_allow_list = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.insertHeadersAllowList = object.insert_headers_allow_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.insertHeadersAllowList) {
      obj.insert_headers_allow_list = message.insertHeadersAllowList.map(e => e);
    } else {
      obj.insert_headers_allow_list = message.insertHeadersAllowList;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lorenzo.btclightclient.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);