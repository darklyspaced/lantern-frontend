// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var light_pb = require('./light_pb.js');

function serialize_light_Filter(arg) {
  if (!(arg instanceof light_pb.Filter)) {
    throw new Error('Expected argument of type light.Filter');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_light_Filter(buffer_arg) {
  return light_pb.Filter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_light_PTasks(arg) {
  if (!(arg instanceof light_pb.PTasks)) {
    throw new Error('Expected argument of type light.PTasks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_light_PTasks(buffer_arg) {
  return light_pb.PTasks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_light_StatusCode(arg) {
  if (!(arg instanceof light_pb.StatusCode)) {
    throw new Error('Expected argument of type light.StatusCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_light_StatusCode(buffer_arg) {
  return light_pb.StatusCode.deserializeBinary(new Uint8Array(buffer_arg));
}


var LanternService = exports.LanternService = {
  getTasks: {
    path: '/light.Lantern/GetTasks',
    requestStream: false,
    responseStream: false,
    requestType: light_pb.Filter,
    responseType: light_pb.PTasks,
    requestSerialize: serialize_light_Filter,
    requestDeserialize: deserialize_light_Filter,
    responseSerialize: serialize_light_PTasks,
    responseDeserialize: deserialize_light_PTasks,
  },
  addTasks: {
    path: '/light.Lantern/AddTasks',
    requestStream: false,
    responseStream: false,
    requestType: light_pb.PTasks,
    responseType: light_pb.StatusCode,
    requestSerialize: serialize_light_PTasks,
    requestDeserialize: deserialize_light_PTasks,
    responseSerialize: serialize_light_StatusCode,
    responseDeserialize: deserialize_light_StatusCode,
  },
};

exports.LanternClient = grpc.makeGenericClientConstructor(LanternService);
