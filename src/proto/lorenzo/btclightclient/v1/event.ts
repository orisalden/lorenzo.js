// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: lorenzo/btclightclient/v1/event.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BTCHeaderInfo } from "./btclightclient";

/**
 * The header included in the event is the block in the history
 * of the current mainchain to which we are rolling back to.
 * In other words, there is one rollback event emitted per re-org, to the
 * greatest common ancestor of the old and the new fork.
 */
export interface EventBTCRollBack {
  header?: BTCHeaderInfo | undefined;
}

/**
 * EventBTCRollForward is emitted on Msg/InsertHeader
 * The header included in the event is the one the main chain is extended with.
 * In the event of a reorg, each block on the new fork that comes after
 * the greatest common ancestor will have a corresponding roll forward event.
 */
export interface EventBTCRollForward {
  header?: BTCHeaderInfo | undefined;
}

/**
 * EventBTCHeaderInserted is emitted on Msg/InsertHeader
 * The header included in the event is the one that was added to the
 * on chain BTC storage.
 */
export interface EventBTCHeaderInserted {
  header?: BTCHeaderInfo | undefined;
}

export interface EventBTCFeeRateUpdated {
  fee_rate: string;
}

function createBaseEventBTCRollBack(): EventBTCRollBack {
  return { header: undefined };
}

export const EventBTCRollBack = {
  encode(message: EventBTCRollBack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      BTCHeaderInfo.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBTCRollBack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCRollBack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = BTCHeaderInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBTCRollBack {
    return { header: isSet(object.header) ? BTCHeaderInfo.fromJSON(object.header) : undefined };
  },

  toJSON(message: EventBTCRollBack): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = BTCHeaderInfo.toJSON(message.header);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBTCRollBack>, I>>(base?: I): EventBTCRollBack {
    return EventBTCRollBack.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventBTCRollBack>, I>>(object: I): EventBTCRollBack {
    const message = createBaseEventBTCRollBack();
    message.header = (object.header !== undefined && object.header !== null)
      ? BTCHeaderInfo.fromPartial(object.header)
      : undefined;
    return message;
  },
};

function createBaseEventBTCRollForward(): EventBTCRollForward {
  return { header: undefined };
}

export const EventBTCRollForward = {
  encode(message: EventBTCRollForward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      BTCHeaderInfo.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBTCRollForward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCRollForward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = BTCHeaderInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBTCRollForward {
    return { header: isSet(object.header) ? BTCHeaderInfo.fromJSON(object.header) : undefined };
  },

  toJSON(message: EventBTCRollForward): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = BTCHeaderInfo.toJSON(message.header);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBTCRollForward>, I>>(base?: I): EventBTCRollForward {
    return EventBTCRollForward.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventBTCRollForward>, I>>(object: I): EventBTCRollForward {
    const message = createBaseEventBTCRollForward();
    message.header = (object.header !== undefined && object.header !== null)
      ? BTCHeaderInfo.fromPartial(object.header)
      : undefined;
    return message;
  },
};

function createBaseEventBTCHeaderInserted(): EventBTCHeaderInserted {
  return { header: undefined };
}

export const EventBTCHeaderInserted = {
  encode(message: EventBTCHeaderInserted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      BTCHeaderInfo.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBTCHeaderInserted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCHeaderInserted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = BTCHeaderInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBTCHeaderInserted {
    return { header: isSet(object.header) ? BTCHeaderInfo.fromJSON(object.header) : undefined };
  },

  toJSON(message: EventBTCHeaderInserted): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = BTCHeaderInfo.toJSON(message.header);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBTCHeaderInserted>, I>>(base?: I): EventBTCHeaderInserted {
    return EventBTCHeaderInserted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventBTCHeaderInserted>, I>>(object: I): EventBTCHeaderInserted {
    const message = createBaseEventBTCHeaderInserted();
    message.header = (object.header !== undefined && object.header !== null)
      ? BTCHeaderInfo.fromPartial(object.header)
      : undefined;
    return message;
  },
};

function createBaseEventBTCFeeRateUpdated(): EventBTCFeeRateUpdated {
  return { fee_rate: "0" };
}

export const EventBTCFeeRateUpdated = {
  encode(message: EventBTCFeeRateUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee_rate !== "0") {
      writer.uint32(8).uint64(message.fee_rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBTCFeeRateUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCFeeRateUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fee_rate = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBTCFeeRateUpdated {
    return { fee_rate: isSet(object.fee_rate) ? globalThis.String(object.fee_rate) : "0" };
  },

  toJSON(message: EventBTCFeeRateUpdated): unknown {
    const obj: any = {};
    if (message.fee_rate !== "0") {
      obj.fee_rate = message.fee_rate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBTCFeeRateUpdated>, I>>(base?: I): EventBTCFeeRateUpdated {
    return EventBTCFeeRateUpdated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventBTCFeeRateUpdated>, I>>(object: I): EventBTCFeeRateUpdated {
    const message = createBaseEventBTCFeeRateUpdated();
    message.fee_rate = object.fee_rate ?? "0";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
