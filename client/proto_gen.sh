#!/bin/bash

yarn protoc --ts_out ./proto --proto_path proto proto/light.proto # types like Filter etc.
