"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Request_one_of_decls, _Response_one_of_decls, _Error_one_of_decls, _Address_one_of_decls, _Envelope_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Envelope = exports.Address = exports.Error = exports.Response = exports.Request = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.2
 * source: lib/types.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = __importStar(require("google-protobuf"));
class Request extends pb_1.Message {
    constructor(data) {
        super();
        _Request_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Request_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("command" in data && data.command != undefined) {
                this.command = data.command;
            }
        }
    }
    get command() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set command(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new Request({});
        if (data.command != null) {
            message.command = data.command;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.command != null) {
            data.command = this.command;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.command.length)
            writer.writeString(1, this.command);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Request();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.command = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Request.deserialize(bytes);
    }
}
exports.Request = Request;
_Request_one_of_decls = new WeakMap();
class Response extends pb_1.Message {
    constructor(data) {
        super();
        _Response_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Response_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new Response({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Response();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Response.deserialize(bytes);
    }
}
exports.Response = Response;
_Response_one_of_decls = new WeakMap();
class Error extends pb_1.Message {
    constructor(data) {
        super();
        _Error_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Error_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                this.message = data.message;
            }
        }
    }
    get code() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set code(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get message() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set message(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new Error({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeUint32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Error();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readUint32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Error.deserialize(bytes);
    }
}
exports.Error = Error;
_Error_one_of_decls = new WeakMap();
class Address extends pb_1.Message {
    constructor(data) {
        super();
        _Address_one_of_decls.set(this, [[2]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Address_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("twin" in data && data.twin != undefined) {
                this.twin = data.twin;
            }
            if ("connection" in data && data.connection != undefined) {
                this.connection = data.connection;
            }
        }
    }
    get twin() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set twin(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get connection() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set connection(value) {
        pb_1.Message.setOneofField(this, 2, __classPrivateFieldGet(this, _Address_one_of_decls, "f")[0], value);
    }
    get has_connection() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get _connection() {
        const cases = {
            0: "none",
            2: "connection"
        };
        return cases[pb_1.Message.computeOneofCase(this, [2])];
    }
    static fromObject(data) {
        const message = new Address({});
        if (data.twin != null) {
            message.twin = data.twin;
        }
        if (data.connection != null) {
            message.connection = data.connection;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.twin != null) {
            data.twin = this.twin;
        }
        if (this.connection != null) {
            data.connection = this.connection;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.twin != 0)
            writer.writeUint32(1, this.twin);
        if (this.has_connection)
            writer.writeString(2, this.connection);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Address();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.twin = reader.readUint32();
                    break;
                case 2:
                    message.connection = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Address.deserialize(bytes);
    }
}
exports.Address = Address;
_Address_one_of_decls = new WeakMap();
class Envelope extends pb_1.Message {
    constructor(data) {
        super();
        _Envelope_one_of_decls.set(this, [[7, 8, 12], [13, 14], [2], [9], [10], [11]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Envelope_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
            if ("tags" in data && data.tags != undefined) {
                this.tags = data.tags;
            }
            if ("timestamp" in data && data.timestamp != undefined) {
                this.timestamp = data.timestamp;
            }
            if ("expiration" in data && data.expiration != undefined) {
                this.expiration = data.expiration;
            }
            if ("source" in data && data.source != undefined) {
                this.source = data.source;
            }
            if ("destination" in data && data.destination != undefined) {
                this.destination = data.destination;
            }
            if ("request" in data && data.request != undefined) {
                this.request = data.request;
            }
            if ("response" in data && data.response != undefined) {
                this.response = data.response;
            }
            if ("error" in data && data.error != undefined) {
                this.error = data.error;
            }
            if ("signature" in data && data.signature != undefined) {
                this.signature = data.signature;
            }
            if ("schema" in data && data.schema != undefined) {
                this.schema = data.schema;
            }
            if ("federation" in data && data.federation != undefined) {
                this.federation = data.federation;
            }
            if ("plain" in data && data.plain != undefined) {
                this.plain = data.plain;
            }
            if ("cipher" in data && data.cipher != undefined) {
                this.cipher = data.cipher;
            }
        }
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set uid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get tags() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set tags(value) {
        pb_1.Message.setOneofField(this, 2, __classPrivateFieldGet(this, _Envelope_one_of_decls, "f")[2], value);
    }
    get has_tags() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get timestamp() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set timestamp(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get expiration() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set expiration(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get source() {
        return pb_1.Message.getWrapperField(this, Address, 5);
    }
    set source(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get has_source() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get destination() {
        return pb_1.Message.getWrapperField(this, Address, 6);
    }
    set destination(value) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get has_destination() {
        return pb_1.Message.getField(this, 6) != null;
    }
    get request() {
        return pb_1.Message.getWrapperField(this, Request, 7);
    }
    set request(value) {
        pb_1.Message.setOneofWrapperField(this, 7, __classPrivateFieldGet(this, _Envelope_one_of_decls, "f")[0], value);
    }
    get has_request() {
        return pb_1.Message.getField(this, 7) != null;
    }
    get response() {
        return pb_1.Message.getWrapperField(this, Response, 8);
    }
    set response(value) {
        pb_1.Message.setOneofWrapperField(this, 8, __classPrivateFieldGet(this, _Envelope_one_of_decls, "f")[0], value);
    }
    get has_response() {
        return pb_1.Message.getField(this, 8) != null;
    }
    get error() {
        return pb_1.Message.getWrapperField(this, Error, 12);
    }
    set error(value) {
        pb_1.Message.setOneofWrapperField(this, 12, __classPrivateFieldGet(this, _Envelope_one_of_decls, "f")[0], value);
    }
    get has_error() {
        return pb_1.Message.getField(this, 12) != null;
    }
    get signature() {
        return pb_1.Message.getFieldWithDefault(this, 9, new Uint8Array());
    }
    set signature(value) {
        pb_1.Message.setOneofField(this, 9, __classPrivateFieldGet(this, _Envelope_one_of_decls, "f")[3], value);
    }
    get has_signature() {
        return pb_1.Message.getField(this, 9) != null;
    }
    get schema() {
        return pb_1.Message.getFieldWithDefault(this, 10, "");
    }
    set schema(value) {
        pb_1.Message.setOneofField(this, 10, __classPrivateFieldGet(this, _Envelope_one_of_decls, "f")[4], value);
    }
    get has_schema() {
        return pb_1.Message.getField(this, 10) != null;
    }
    get federation() {
        return pb_1.Message.getFieldWithDefault(this, 11, "");
    }
    set federation(value) {
        pb_1.Message.setOneofField(this, 11, __classPrivateFieldGet(this, _Envelope_one_of_decls, "f")[5], value);
    }
    get has_federation() {
        return pb_1.Message.getField(this, 11) != null;
    }
    get plain() {
        return pb_1.Message.getFieldWithDefault(this, 13, new Uint8Array());
    }
    set plain(value) {
        pb_1.Message.setOneofField(this, 13, __classPrivateFieldGet(this, _Envelope_one_of_decls, "f")[1], value);
    }
    get has_plain() {
        return pb_1.Message.getField(this, 13) != null;
    }
    get cipher() {
        return pb_1.Message.getFieldWithDefault(this, 14, new Uint8Array());
    }
    set cipher(value) {
        pb_1.Message.setOneofField(this, 14, __classPrivateFieldGet(this, _Envelope_one_of_decls, "f")[1], value);
    }
    get has_cipher() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get message() {
        const cases = {
            0: "none",
            7: "request",
            8: "response",
            12: "error"
        };
        return cases[pb_1.Message.computeOneofCase(this, [7, 8, 12])];
    }
    get payload() {
        const cases = {
            0: "none",
            13: "plain",
            14: "cipher"
        };
        return cases[pb_1.Message.computeOneofCase(this, [13, 14])];
    }
    get _tags() {
        const cases = {
            0: "none",
            2: "tags"
        };
        return cases[pb_1.Message.computeOneofCase(this, [2])];
    }
    get _signature() {
        const cases = {
            0: "none",
            9: "signature"
        };
        return cases[pb_1.Message.computeOneofCase(this, [9])];
    }
    get _schema() {
        const cases = {
            0: "none",
            10: "schema"
        };
        return cases[pb_1.Message.computeOneofCase(this, [10])];
    }
    get _federation() {
        const cases = {
            0: "none",
            11: "federation"
        };
        return cases[pb_1.Message.computeOneofCase(this, [11])];
    }
    static fromObject(data) {
        const message = new Envelope({});
        if (data.uid != null) {
            message.uid = data.uid;
        }
        if (data.tags != null) {
            message.tags = data.tags;
        }
        if (data.timestamp != null) {
            message.timestamp = data.timestamp;
        }
        if (data.expiration != null) {
            message.expiration = data.expiration;
        }
        if (data.source != null) {
            message.source = Address.fromObject(data.source);
        }
        if (data.destination != null) {
            message.destination = Address.fromObject(data.destination);
        }
        if (data.request != null) {
            message.request = Request.fromObject(data.request);
        }
        if (data.response != null) {
            message.response = Response.fromObject(data.response);
        }
        if (data.error != null) {
            message.error = Error.fromObject(data.error);
        }
        if (data.signature != null) {
            message.signature = data.signature;
        }
        if (data.schema != null) {
            message.schema = data.schema;
        }
        if (data.federation != null) {
            message.federation = data.federation;
        }
        if (data.plain != null) {
            message.plain = data.plain;
        }
        if (data.cipher != null) {
            message.cipher = data.cipher;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.uid != null) {
            data.uid = this.uid;
        }
        if (this.tags != null) {
            data.tags = this.tags;
        }
        if (this.timestamp != null) {
            data.timestamp = this.timestamp;
        }
        if (this.expiration != null) {
            data.expiration = this.expiration;
        }
        if (this.source != null) {
            data.source = this.source.toObject();
        }
        if (this.destination != null) {
            data.destination = this.destination.toObject();
        }
        if (this.request != null) {
            data.request = this.request.toObject();
        }
        if (this.response != null) {
            data.response = this.response.toObject();
        }
        if (this.error != null) {
            data.error = this.error.toObject();
        }
        if (this.signature != null) {
            data.signature = this.signature;
        }
        if (this.schema != null) {
            data.schema = this.schema;
        }
        if (this.federation != null) {
            data.federation = this.federation;
        }
        if (this.plain != null) {
            data.plain = this.plain;
        }
        if (this.cipher != null) {
            data.cipher = this.cipher;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.uid.length)
            writer.writeString(1, this.uid);
        if (this.has_tags)
            writer.writeString(2, this.tags);
        if (this.timestamp != 0)
            writer.writeUint64(3, this.timestamp);
        if (this.expiration != 0)
            writer.writeUint64(4, this.expiration);
        if (this.has_source)
            writer.writeMessage(5, this.source, () => this.source.serialize(writer));
        if (this.has_destination)
            writer.writeMessage(6, this.destination, () => this.destination.serialize(writer));
        if (this.has_request)
            writer.writeMessage(7, this.request, () => this.request.serialize(writer));
        if (this.has_response)
            writer.writeMessage(8, this.response, () => this.response.serialize(writer));
        if (this.has_error)
            writer.writeMessage(12, this.error, () => this.error.serialize(writer));
        if (this.has_signature)
            writer.writeBytes(9, this.signature);
        if (this.has_schema)
            writer.writeString(10, this.schema);
        if (this.has_federation)
            writer.writeString(11, this.federation);
        if (this.has_plain)
            writer.writeBytes(13, this.plain);
        if (this.has_cipher)
            writer.writeBytes(14, this.cipher);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Envelope();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.uid = reader.readString();
                    break;
                case 2:
                    message.tags = reader.readString();
                    break;
                case 3:
                    message.timestamp = reader.readUint64();
                    break;
                case 4:
                    message.expiration = reader.readUint64();
                    break;
                case 5:
                    reader.readMessage(message.source, () => message.source = Address.deserialize(reader));
                    break;
                case 6:
                    reader.readMessage(message.destination, () => message.destination = Address.deserialize(reader));
                    break;
                case 7:
                    reader.readMessage(message.request, () => message.request = Request.deserialize(reader));
                    break;
                case 8:
                    reader.readMessage(message.response, () => message.response = Response.deserialize(reader));
                    break;
                case 12:
                    reader.readMessage(message.error, () => message.error = Error.deserialize(reader));
                    break;
                case 9:
                    message.signature = reader.readBytes();
                    break;
                case 10:
                    message.schema = reader.readString();
                    break;
                case 11:
                    message.federation = reader.readString();
                    break;
                case 13:
                    message.plain = reader.readBytes();
                    break;
                case 14:
                    message.cipher = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Envelope.deserialize(bytes);
    }
}
exports.Envelope = Envelope;
_Envelope_one_of_decls = new WeakMap();