// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "light.proto" (package "light", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Lantern } from "./light";
import type { StatusCode } from "./light";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { PTasks } from "./light";
import type { Filter } from "./light";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service light.Lantern
 */
export interface ILanternClient {
    /**
     * @generated from protobuf rpc: GetTasks(light.Filter) returns (light.PTasks);
     */
    getTasks(input: Filter, options?: RpcOptions): UnaryCall<Filter, PTasks>;
    /**
     * @generated from protobuf rpc: AddTasks(light.PTasks) returns (light.StatusCode);
     */
    addTasks(input: PTasks, options?: RpcOptions): UnaryCall<PTasks, StatusCode>;
}
/**
 * @generated from protobuf service light.Lantern
 */
export class LanternClient implements ILanternClient, ServiceInfo {
    typeName = Lantern.typeName;
    methods = Lantern.methods;
    options = Lantern.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetTasks(light.Filter) returns (light.PTasks);
     */
    getTasks(input: Filter, options?: RpcOptions): UnaryCall<Filter, PTasks> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<Filter, PTasks>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AddTasks(light.PTasks) returns (light.StatusCode);
     */
    addTasks(input: PTasks, options?: RpcOptions): UnaryCall<PTasks, StatusCode> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<PTasks, StatusCode>("unary", this._transport, method, opt, input);
    }
}