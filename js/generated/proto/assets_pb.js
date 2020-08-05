/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.vega.Asset', null, global);
goog.exportSymbol('proto.vega.AssetSource', null, global);
goog.exportSymbol('proto.vega.BuiltinAsset', null, global);
goog.exportSymbol('proto.vega.DevAssets', null, global);
goog.exportSymbol('proto.vega.ERC20', null, global);
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
proto.vega.Asset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Asset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Asset.displayName = 'proto.vega.Asset';
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
proto.vega.AssetSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vega.AssetSource.oneofGroups_);
};
goog.inherits(proto.vega.AssetSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.AssetSource.displayName = 'proto.vega.AssetSource';
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
proto.vega.BuiltinAsset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.BuiltinAsset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.BuiltinAsset.displayName = 'proto.vega.BuiltinAsset';
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
proto.vega.ERC20 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.ERC20, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.ERC20.displayName = 'proto.vega.ERC20';
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
proto.vega.DevAssets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.DevAssets.repeatedFields_, null);
};
goog.inherits(proto.vega.DevAssets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.DevAssets.displayName = 'proto.vega.DevAssets';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Asset.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Asset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Asset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Asset.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    symbol: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalsupply: jspb.Message.getFieldWithDefault(msg, 4, ""),
    decimals: jspb.Message.getFieldWithDefault(msg, 5, 0),
    source: (f = msg.getSource()) && proto.vega.AssetSource.toObject(includeInstance, f)
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
 * @return {!proto.vega.Asset}
 */
proto.vega.Asset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Asset;
  return proto.vega.Asset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Asset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Asset}
 */
proto.vega.Asset.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalsupply(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDecimals(value);
      break;
    case 7:
      var value = new proto.vega.AssetSource;
      reader.readMessage(value,proto.vega.AssetSource.deserializeBinaryFromReader);
      msg.setSource(value);
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
proto.vega.Asset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Asset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Asset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Asset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalsupply();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDecimals();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.vega.AssetSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.vega.Asset.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.vega.Asset.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.vega.Asset.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.vega.Asset.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string symbol = 3;
 * @return {string}
 */
proto.vega.Asset.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.vega.Asset.prototype.setSymbol = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string totalSupply = 4;
 * @return {string}
 */
proto.vega.Asset.prototype.getTotalsupply = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.vega.Asset.prototype.setTotalsupply = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 decimals = 5;
 * @return {number}
 */
proto.vega.Asset.prototype.getDecimals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.vega.Asset.prototype.setDecimals = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional AssetSource source = 7;
 * @return {?proto.vega.AssetSource}
 */
proto.vega.Asset.prototype.getSource = function() {
  return /** @type{?proto.vega.AssetSource} */ (
    jspb.Message.getWrapperField(this, proto.vega.AssetSource, 7));
};


/** @param {?proto.vega.AssetSource|undefined} value */
proto.vega.Asset.prototype.setSource = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.vega.Asset.prototype.clearSource = function() {
  this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Asset.prototype.hasSource = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.AssetSource.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.vega.AssetSource.SourceCase = {
  SOURCE_NOT_SET: 0,
  BUILTINASSET: 1,
  ERC20: 2
};

/**
 * @return {proto.vega.AssetSource.SourceCase}
 */
proto.vega.AssetSource.prototype.getSourceCase = function() {
  return /** @type {proto.vega.AssetSource.SourceCase} */(jspb.Message.computeOneofCase(this, proto.vega.AssetSource.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.AssetSource.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.AssetSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.AssetSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.AssetSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    builtinasset: (f = msg.getBuiltinasset()) && proto.vega.BuiltinAsset.toObject(includeInstance, f),
    erc20: (f = msg.getErc20()) && proto.vega.ERC20.toObject(includeInstance, f)
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
 * @return {!proto.vega.AssetSource}
 */
proto.vega.AssetSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.AssetSource;
  return proto.vega.AssetSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.AssetSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.AssetSource}
 */
proto.vega.AssetSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.BuiltinAsset;
      reader.readMessage(value,proto.vega.BuiltinAsset.deserializeBinaryFromReader);
      msg.setBuiltinasset(value);
      break;
    case 2:
      var value = new proto.vega.ERC20;
      reader.readMessage(value,proto.vega.ERC20.deserializeBinaryFromReader);
      msg.setErc20(value);
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
proto.vega.AssetSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.AssetSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.AssetSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.AssetSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuiltinasset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.BuiltinAsset.serializeBinaryToWriter
    );
  }
  f = message.getErc20();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.ERC20.serializeBinaryToWriter
    );
  }
};


/**
 * optional BuiltinAsset builtinAsset = 1;
 * @return {?proto.vega.BuiltinAsset}
 */
proto.vega.AssetSource.prototype.getBuiltinasset = function() {
  return /** @type{?proto.vega.BuiltinAsset} */ (
    jspb.Message.getWrapperField(this, proto.vega.BuiltinAsset, 1));
};


/** @param {?proto.vega.BuiltinAsset|undefined} value */
proto.vega.AssetSource.prototype.setBuiltinasset = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.vega.AssetSource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.vega.AssetSource.prototype.clearBuiltinasset = function() {
  this.setBuiltinasset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.AssetSource.prototype.hasBuiltinasset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ERC20 erc20 = 2;
 * @return {?proto.vega.ERC20}
 */
proto.vega.AssetSource.prototype.getErc20 = function() {
  return /** @type{?proto.vega.ERC20} */ (
    jspb.Message.getWrapperField(this, proto.vega.ERC20, 2));
};


/** @param {?proto.vega.ERC20|undefined} value */
proto.vega.AssetSource.prototype.setErc20 = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.vega.AssetSource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.vega.AssetSource.prototype.clearErc20 = function() {
  this.setErc20(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.AssetSource.prototype.hasErc20 = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.BuiltinAsset.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.BuiltinAsset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.BuiltinAsset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.BuiltinAsset.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    symbol: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalsupply: jspb.Message.getFieldWithDefault(msg, 3, ""),
    decimals: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.vega.BuiltinAsset}
 */
proto.vega.BuiltinAsset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.BuiltinAsset;
  return proto.vega.BuiltinAsset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.BuiltinAsset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.BuiltinAsset}
 */
proto.vega.BuiltinAsset.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalsupply(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDecimals(value);
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
proto.vega.BuiltinAsset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.BuiltinAsset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.BuiltinAsset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.BuiltinAsset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalsupply();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDecimals();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vega.BuiltinAsset.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.vega.BuiltinAsset.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string symbol = 2;
 * @return {string}
 */
proto.vega.BuiltinAsset.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.vega.BuiltinAsset.prototype.setSymbol = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string totalSupply = 3;
 * @return {string}
 */
proto.vega.BuiltinAsset.prototype.getTotalsupply = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.vega.BuiltinAsset.prototype.setTotalsupply = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 decimals = 4;
 * @return {number}
 */
proto.vega.BuiltinAsset.prototype.getDecimals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.vega.BuiltinAsset.prototype.setDecimals = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.ERC20.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.ERC20.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.ERC20} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.ERC20.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractaddress: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.vega.ERC20}
 */
proto.vega.ERC20.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.ERC20;
  return proto.vega.ERC20.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.ERC20} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.ERC20}
 */
proto.vega.ERC20.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractaddress(value);
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
proto.vega.ERC20.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.ERC20.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.ERC20} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.ERC20.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string contractAddress = 1;
 * @return {string}
 */
proto.vega.ERC20.prototype.getContractaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.vega.ERC20.prototype.setContractaddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.DevAssets.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.DevAssets.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.DevAssets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.DevAssets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.DevAssets.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourcesList: jspb.Message.toObjectList(msg.getSourcesList(),
    proto.vega.AssetSource.toObject, includeInstance)
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
 * @return {!proto.vega.DevAssets}
 */
proto.vega.DevAssets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.DevAssets;
  return proto.vega.DevAssets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.DevAssets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.DevAssets}
 */
proto.vega.DevAssets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.AssetSource;
      reader.readMessage(value,proto.vega.AssetSource.deserializeBinaryFromReader);
      msg.addSources(value);
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
proto.vega.DevAssets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.DevAssets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.DevAssets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.DevAssets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.AssetSource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AssetSource sources = 1;
 * @return {!Array<!proto.vega.AssetSource>}
 */
proto.vega.DevAssets.prototype.getSourcesList = function() {
  return /** @type{!Array<!proto.vega.AssetSource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.AssetSource, 1));
};


/** @param {!Array<!proto.vega.AssetSource>} value */
proto.vega.DevAssets.prototype.setSourcesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.AssetSource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.AssetSource}
 */
proto.vega.DevAssets.prototype.addSources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.AssetSource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.vega.DevAssets.prototype.clearSourcesList = function() {
  this.setSourcesList([]);
};


goog.object.extend(exports, proto.vega);
