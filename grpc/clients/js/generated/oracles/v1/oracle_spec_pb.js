// source: oracles/v1/oracle_spec.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.oracles.v1.Condition', null, global);
goog.exportSymbol('proto.oracles.v1.Condition.Operator', null, global);
goog.exportSymbol('proto.oracles.v1.Filter', null, global);
goog.exportSymbol('proto.oracles.v1.OracleSpec', null, global);
goog.exportSymbol('proto.oracles.v1.OracleSpec.Status', null, global);
goog.exportSymbol('proto.oracles.v1.OracleSpecConfiguration', null, global);
goog.exportSymbol('proto.oracles.v1.PropertyKey', null, global);
goog.exportSymbol('proto.oracles.v1.PropertyKey.Type', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.oracles.v1.OracleSpecConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.oracles.v1.OracleSpecConfiguration.repeatedFields_, null);
};
goog.inherits(proto.oracles.v1.OracleSpecConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.oracles.v1.OracleSpecConfiguration.displayName = 'proto.oracles.v1.OracleSpecConfiguration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.oracles.v1.OracleSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.oracles.v1.OracleSpec.repeatedFields_, null);
};
goog.inherits(proto.oracles.v1.OracleSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.oracles.v1.OracleSpec.displayName = 'proto.oracles.v1.OracleSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.oracles.v1.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.oracles.v1.Filter.repeatedFields_, null);
};
goog.inherits(proto.oracles.v1.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.oracles.v1.Filter.displayName = 'proto.oracles.v1.Filter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.oracles.v1.PropertyKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.oracles.v1.PropertyKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.oracles.v1.PropertyKey.displayName = 'proto.oracles.v1.PropertyKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.oracles.v1.Condition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.oracles.v1.Condition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.oracles.v1.Condition.displayName = 'proto.oracles.v1.Condition';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.oracles.v1.OracleSpecConfiguration.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.oracles.v1.OracleSpecConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.oracles.v1.OracleSpecConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.oracles.v1.OracleSpecConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.OracleSpecConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKeysList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.oracles.v1.Filter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.oracles.v1.OracleSpecConfiguration}
 */
proto.oracles.v1.OracleSpecConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.oracles.v1.OracleSpecConfiguration;
  return proto.oracles.v1.OracleSpecConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.oracles.v1.OracleSpecConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.oracles.v1.OracleSpecConfiguration}
 */
proto.oracles.v1.OracleSpecConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPubKeys(value);
      break;
    case 2:
      var value = new proto.oracles.v1.Filter;
      reader.readMessage(value,proto.oracles.v1.Filter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.oracles.v1.OracleSpecConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.oracles.v1.OracleSpecConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.oracles.v1.OracleSpecConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.OracleSpecConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPubKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.oracles.v1.Filter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string pub_keys = 1;
 * @return {!Array<string>}
 */
proto.oracles.v1.OracleSpecConfiguration.prototype.getPubKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.oracles.v1.OracleSpecConfiguration} returns this
 */
proto.oracles.v1.OracleSpecConfiguration.prototype.setPubKeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.oracles.v1.OracleSpecConfiguration} returns this
 */
proto.oracles.v1.OracleSpecConfiguration.prototype.addPubKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.oracles.v1.OracleSpecConfiguration} returns this
 */
proto.oracles.v1.OracleSpecConfiguration.prototype.clearPubKeysList = function() {
  return this.setPubKeysList([]);
};


/**
 * repeated Filter filters = 2;
 * @return {!Array<!proto.oracles.v1.Filter>}
 */
proto.oracles.v1.OracleSpecConfiguration.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.oracles.v1.Filter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.oracles.v1.Filter, 2));
};


/**
 * @param {!Array<!proto.oracles.v1.Filter>} value
 * @return {!proto.oracles.v1.OracleSpecConfiguration} returns this
*/
proto.oracles.v1.OracleSpecConfiguration.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.oracles.v1.Filter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.oracles.v1.Filter}
 */
proto.oracles.v1.OracleSpecConfiguration.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.oracles.v1.Filter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.oracles.v1.OracleSpecConfiguration} returns this
 */
proto.oracles.v1.OracleSpecConfiguration.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.oracles.v1.OracleSpec.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.oracles.v1.OracleSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.oracles.v1.OracleSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.oracles.v1.OracleSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.OracleSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pubKeysList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.oracles.v1.Filter.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.oracles.v1.OracleSpec}
 */
proto.oracles.v1.OracleSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.oracles.v1.OracleSpec;
  return proto.oracles.v1.OracleSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.oracles.v1.OracleSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.oracles.v1.OracleSpec}
 */
proto.oracles.v1.OracleSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPubKeys(value);
      break;
    case 5:
      var value = new proto.oracles.v1.Filter;
      reader.readMessage(value,proto.oracles.v1.Filter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    case 6:
      var value = /** @type {!proto.oracles.v1.OracleSpec.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.oracles.v1.OracleSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.oracles.v1.OracleSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.oracles.v1.OracleSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.OracleSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPubKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.oracles.v1.Filter.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.oracles.v1.OracleSpec.Status = {
  STATUS_UNSPECIFIED: 0,
  STATUS_ACTIVE: 1,
  STATUS_DEACTIVATED: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.oracles.v1.OracleSpec.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.oracles.v1.OracleSpec} returns this
 */
proto.oracles.v1.OracleSpec.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 created_at = 2;
 * @return {number}
 */
proto.oracles.v1.OracleSpec.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.oracles.v1.OracleSpec} returns this
 */
proto.oracles.v1.OracleSpec.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 updated_at = 3;
 * @return {number}
 */
proto.oracles.v1.OracleSpec.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.oracles.v1.OracleSpec} returns this
 */
proto.oracles.v1.OracleSpec.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string pub_keys = 4;
 * @return {!Array<string>}
 */
proto.oracles.v1.OracleSpec.prototype.getPubKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.oracles.v1.OracleSpec} returns this
 */
proto.oracles.v1.OracleSpec.prototype.setPubKeysList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.oracles.v1.OracleSpec} returns this
 */
proto.oracles.v1.OracleSpec.prototype.addPubKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.oracles.v1.OracleSpec} returns this
 */
proto.oracles.v1.OracleSpec.prototype.clearPubKeysList = function() {
  return this.setPubKeysList([]);
};


/**
 * repeated Filter filters = 5;
 * @return {!Array<!proto.oracles.v1.Filter>}
 */
proto.oracles.v1.OracleSpec.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.oracles.v1.Filter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.oracles.v1.Filter, 5));
};


/**
 * @param {!Array<!proto.oracles.v1.Filter>} value
 * @return {!proto.oracles.v1.OracleSpec} returns this
*/
proto.oracles.v1.OracleSpec.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.oracles.v1.Filter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.oracles.v1.Filter}
 */
proto.oracles.v1.OracleSpec.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.oracles.v1.Filter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.oracles.v1.OracleSpec} returns this
 */
proto.oracles.v1.OracleSpec.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};


/**
 * optional Status status = 6;
 * @return {!proto.oracles.v1.OracleSpec.Status}
 */
proto.oracles.v1.OracleSpec.prototype.getStatus = function() {
  return /** @type {!proto.oracles.v1.OracleSpec.Status} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.oracles.v1.OracleSpec.Status} value
 * @return {!proto.oracles.v1.OracleSpec} returns this
 */
proto.oracles.v1.OracleSpec.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.oracles.v1.Filter.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.oracles.v1.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.oracles.v1.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.oracles.v1.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.oracles.v1.PropertyKey.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.oracles.v1.Condition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.oracles.v1.Filter}
 */
proto.oracles.v1.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.oracles.v1.Filter;
  return proto.oracles.v1.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.oracles.v1.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.oracles.v1.Filter}
 */
proto.oracles.v1.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.oracles.v1.PropertyKey;
      reader.readMessage(value,proto.oracles.v1.PropertyKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.oracles.v1.Condition;
      reader.readMessage(value,proto.oracles.v1.Condition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.oracles.v1.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.oracles.v1.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.oracles.v1.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.oracles.v1.PropertyKey.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.oracles.v1.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional PropertyKey key = 1;
 * @return {?proto.oracles.v1.PropertyKey}
 */
proto.oracles.v1.Filter.prototype.getKey = function() {
  return /** @type{?proto.oracles.v1.PropertyKey} */ (
    jspb.Message.getWrapperField(this, proto.oracles.v1.PropertyKey, 1));
};


/**
 * @param {?proto.oracles.v1.PropertyKey|undefined} value
 * @return {!proto.oracles.v1.Filter} returns this
*/
proto.oracles.v1.Filter.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.oracles.v1.Filter} returns this
 */
proto.oracles.v1.Filter.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.oracles.v1.Filter.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Condition conditions = 2;
 * @return {!Array<!proto.oracles.v1.Condition>}
 */
proto.oracles.v1.Filter.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.oracles.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.oracles.v1.Condition, 2));
};


/**
 * @param {!Array<!proto.oracles.v1.Condition>} value
 * @return {!proto.oracles.v1.Filter} returns this
*/
proto.oracles.v1.Filter.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.oracles.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.oracles.v1.Condition}
 */
proto.oracles.v1.Filter.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.oracles.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.oracles.v1.Filter} returns this
 */
proto.oracles.v1.Filter.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.oracles.v1.PropertyKey.prototype.toObject = function(opt_includeInstance) {
  return proto.oracles.v1.PropertyKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.oracles.v1.PropertyKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.PropertyKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.oracles.v1.PropertyKey}
 */
proto.oracles.v1.PropertyKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.oracles.v1.PropertyKey;
  return proto.oracles.v1.PropertyKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.oracles.v1.PropertyKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.oracles.v1.PropertyKey}
 */
proto.oracles.v1.PropertyKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.oracles.v1.PropertyKey.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.oracles.v1.PropertyKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.oracles.v1.PropertyKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.oracles.v1.PropertyKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.PropertyKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.oracles.v1.PropertyKey.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_EMPTY: 1,
  TYPE_INTEGER: 2,
  TYPE_STRING: 3,
  TYPE_BOOLEAN: 4,
  TYPE_DECIMAL: 5,
  TYPE_TIMESTAMP: 6
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.oracles.v1.PropertyKey.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.oracles.v1.PropertyKey} returns this
 */
proto.oracles.v1.PropertyKey.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.oracles.v1.PropertyKey.Type}
 */
proto.oracles.v1.PropertyKey.prototype.getType = function() {
  return /** @type {!proto.oracles.v1.PropertyKey.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.oracles.v1.PropertyKey.Type} value
 * @return {!proto.oracles.v1.PropertyKey} returns this
 */
proto.oracles.v1.PropertyKey.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.oracles.v1.Condition.prototype.toObject = function(opt_includeInstance) {
  return proto.oracles.v1.Condition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.oracles.v1.Condition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.Condition.toObject = function(includeInstance, msg) {
  var f, obj = {
    operator: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.oracles.v1.Condition}
 */
proto.oracles.v1.Condition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.oracles.v1.Condition;
  return proto.oracles.v1.Condition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.oracles.v1.Condition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.oracles.v1.Condition}
 */
proto.oracles.v1.Condition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.oracles.v1.Condition.Operator} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.oracles.v1.Condition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.oracles.v1.Condition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.oracles.v1.Condition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.oracles.v1.Condition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.oracles.v1.Condition.Operator = {
  OPERATOR_UNSPECIFIED: 0,
  OPERATOR_EQUALS: 1,
  OPERATOR_GREATER_THAN: 2,
  OPERATOR_GREATER_THAN_OR_EQUAL: 3,
  OPERATOR_LESS_THAN: 4,
  OPERATOR_LESS_THAN_OR_EQUAL: 5
};

/**
 * optional Operator operator = 1;
 * @return {!proto.oracles.v1.Condition.Operator}
 */
proto.oracles.v1.Condition.prototype.getOperator = function() {
  return /** @type {!proto.oracles.v1.Condition.Operator} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.oracles.v1.Condition.Operator} value
 * @return {!proto.oracles.v1.Condition} returns this
 */
proto.oracles.v1.Condition.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.oracles.v1.Condition.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.oracles.v1.Condition} returns this
 */
proto.oracles.v1.Condition.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.oracles.v1);