// package: light
// file: light.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as light_pb from "./light_pb";

interface ILanternService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTasks: ILanternService_IGetTasks;
    addTasks: ILanternService_IAddTasks;
}

interface ILanternService_IGetTasks extends grpc.MethodDefinition<light_pb.Filter, light_pb.PTasks> {
    path: "/light.Lantern/GetTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<light_pb.Filter>;
    requestDeserialize: grpc.deserialize<light_pb.Filter>;
    responseSerialize: grpc.serialize<light_pb.PTasks>;
    responseDeserialize: grpc.deserialize<light_pb.PTasks>;
}
interface ILanternService_IAddTasks extends grpc.MethodDefinition<light_pb.PTasks, light_pb.StatusCode> {
    path: "/light.Lantern/AddTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<light_pb.PTasks>;
    requestDeserialize: grpc.deserialize<light_pb.PTasks>;
    responseSerialize: grpc.serialize<light_pb.StatusCode>;
    responseDeserialize: grpc.deserialize<light_pb.StatusCode>;
}

export const LanternService: ILanternService;

export interface ILanternServer {
    getTasks: grpc.handleUnaryCall<light_pb.Filter, light_pb.PTasks>;
    addTasks: grpc.handleUnaryCall<light_pb.PTasks, light_pb.StatusCode>;
}

export interface ILanternClient {
    getTasks(request: light_pb.Filter, callback: (error: grpc.ServiceError | null, response: light_pb.PTasks) => void): grpc.ClientUnaryCall;
    getTasks(request: light_pb.Filter, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: light_pb.PTasks) => void): grpc.ClientUnaryCall;
    getTasks(request: light_pb.Filter, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: light_pb.PTasks) => void): grpc.ClientUnaryCall;
    addTasks(request: light_pb.PTasks, callback: (error: grpc.ServiceError | null, response: light_pb.StatusCode) => void): grpc.ClientUnaryCall;
    addTasks(request: light_pb.PTasks, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: light_pb.StatusCode) => void): grpc.ClientUnaryCall;
    addTasks(request: light_pb.PTasks, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: light_pb.StatusCode) => void): grpc.ClientUnaryCall;
}

export class LanternClient extends grpc.Client implements ILanternClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getTasks(request: light_pb.Filter, callback: (error: grpc.ServiceError | null, response: light_pb.PTasks) => void): grpc.ClientUnaryCall;
    public getTasks(request: light_pb.Filter, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: light_pb.PTasks) => void): grpc.ClientUnaryCall;
    public getTasks(request: light_pb.Filter, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: light_pb.PTasks) => void): grpc.ClientUnaryCall;
    public addTasks(request: light_pb.PTasks, callback: (error: grpc.ServiceError | null, response: light_pb.StatusCode) => void): grpc.ClientUnaryCall;
    public addTasks(request: light_pb.PTasks, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: light_pb.StatusCode) => void): grpc.ClientUnaryCall;
    public addTasks(request: light_pb.PTasks, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: light_pb.StatusCode) => void): grpc.ClientUnaryCall;
}
