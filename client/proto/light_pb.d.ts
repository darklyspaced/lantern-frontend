// package: light
// file: light.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Filter extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): Filter;
    getRead(): string;
    setRead(value: string): Filter;
    getSortBy(): string;
    setSortBy(value: string): Filter;
    getSortOrder(): string;
    setSortOrder(value: string): Filter;
    getSource(): string;
    setSource(value: string): Filter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
    export type AsObject = {
        status: string,
        read: string,
        sortBy: string,
        sortOrder: string,
        source: string,
    }
}

export class PTasks extends jspb.Message { 
    getBody(): string;
    setBody(value: string): PTasks;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PTasks.AsObject;
    static toObject(includeInstance: boolean, msg: PTasks): PTasks.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PTasks, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PTasks;
    static deserializeBinaryFromReader(message: PTasks, reader: jspb.BinaryReader): PTasks;
}

export namespace PTasks {
    export type AsObject = {
        body: string,
    }
}

export class StatusCode extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): StatusCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusCode.AsObject;
    static toObject(includeInstance: boolean, msg: StatusCode): StatusCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusCode;
    static deserializeBinaryFromReader(message: StatusCode, reader: jspb.BinaryReader): StatusCode;
}

export namespace StatusCode {
    export type AsObject = {
        success: boolean,
    }
}
