"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compressDocumentData = compressDocumentData;
exports.decompressDocumentData = decompressDocumentData;
exports.getCompressionStateByRxJsonSchema = getCompressionStateByRxJsonSchema;
exports.wrappedKeyCompressionStorage = wrappedKeyCompressionStorage;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonschemaKeyCompression = require("jsonschema-key-compression");
var _overwritable = require("../../overwritable");
var _pluginHelpers = require("../../plugin-helpers");
var _rxSchemaHelper = require("../../rx-schema-helper");
var _rxStorageHelper = require("../../rx-storage-helper");
var _utils = require("../../plugins/utils");
/**
 * this plugin adds the keycompression-capabilities to rxdb
 * if you dont use this, ensure that you set disableKeyComression to false in your schema
 */

/**
 * Cache the compression table and the compressed schema
 * by the storage instance for better performance.
 */
var COMPRESSION_STATE_BY_SCHEMA = new WeakMap();
function getCompressionStateByRxJsonSchema(schema) {
  /**
   * Because we cache the state by the JsonSchema,
   * it must be ausured that the given schema object
   * is never mutated.
   */
  _overwritable.overwritable.deepFreezeWhenDevMode(schema);
  var compressionState = COMPRESSION_STATE_BY_SCHEMA.get(schema);
  if (!compressionState) {
    var compressionSchema = (0, _utils.flatClone)(schema);
    delete compressionSchema.primaryKey;
    var table = (0, _jsonschemaKeyCompression.createCompressionTable)(compressionSchema, _jsonschemaKeyCompression.DEFAULT_COMPRESSION_FLAG, [
    /**
     * Do not compress the primary field
     * for easier debugging.
     */
    (0, _rxSchemaHelper.getPrimaryFieldOfPrimaryKey)(schema.primaryKey), '_rev', '_attachments', '_deleted', '_meta']);
    delete compressionSchema.primaryKey;
    var compressedSchema = (0, _jsonschemaKeyCompression.createCompressedJsonSchema)(table, compressionSchema);

    // also compress primary key
    if (typeof schema.primaryKey !== 'string') {
      var composedPrimary = schema.primaryKey;
      var newComposedPrimary = {
        key: (0, _jsonschemaKeyCompression.compressedPath)(table, composedPrimary.key),
        fields: composedPrimary.fields.map(function (field) {
          return (0, _jsonschemaKeyCompression.compressedPath)(table, field);
        }),
        separator: composedPrimary.separator
      };
      compressedSchema.primaryKey = newComposedPrimary;
    } else {
      compressedSchema.primaryKey = (0, _jsonschemaKeyCompression.compressedPath)(table, schema.primaryKey);
    }

    /**
     * the key compression module does not know about indexes
     * in the schema, so we have to also compress them here.
     */
    if (schema.indexes) {
      var newIndexes = schema.indexes.map(function (idx) {
        if ((0, _utils.isMaybeReadonlyArray)(idx)) {
          return idx.map(function (subIdx) {
            return (0, _jsonschemaKeyCompression.compressedPath)(table, subIdx);
          });
        } else {
          return (0, _jsonschemaKeyCompression.compressedPath)(table, idx);
        }
      });
      compressedSchema.indexes = newIndexes;
    }
    compressionState = {
      table: table,
      schema: schema,
      compressedSchema: compressedSchema
    };
    COMPRESSION_STATE_BY_SCHEMA.set(schema, compressionState);
  }
  return compressionState;
}
function wrappedKeyCompressionStorage(args) {
  var statics = Object.assign({}, args.storage.statics, {
    prepareQuery: function prepareQuery(schema, mutateableQuery) {
      if (schema.keyCompression) {
        var compressionState = getCompressionStateByRxJsonSchema(schema);
        mutateableQuery = (0, _jsonschemaKeyCompression.compressQuery)(compressionState.table, mutateableQuery);
        return args.storage.statics.prepareQuery(compressionState.compressedSchema, mutateableQuery);
      }
      return args.storage.statics.prepareQuery(schema, mutateableQuery);
    },
    getSortComparator: function getSortComparator(schema, preparedQuery) {
      if (!schema.keyCompression) {
        return args.storage.statics.getSortComparator(schema, preparedQuery);
      } else {
        var compressionState = getCompressionStateByRxJsonSchema(schema);
        var comparator = args.storage.statics.getSortComparator(compressionState.schema, preparedQuery);
        return function (a, b) {
          var compressedDocDataA = (0, _jsonschemaKeyCompression.compressObject)(compressionState.table, a);
          var compressedDocDataB = (0, _jsonschemaKeyCompression.compressObject)(compressionState.table, b);
          var res = comparator(compressedDocDataA, compressedDocDataB);
          return res;
        };
      }
    },
    getQueryMatcher: function getQueryMatcher(schema, preparedQuery) {
      if (!schema.keyCompression) {
        return args.storage.statics.getQueryMatcher(schema, preparedQuery);
      } else {
        var compressionState = getCompressionStateByRxJsonSchema(schema);
        var matcher = args.storage.statics.getQueryMatcher(compressionState.schema, preparedQuery);
        return function (docData) {
          var compressedDocData = (0, _jsonschemaKeyCompression.compressObject)(compressionState.table, docData);
          var ret = matcher(compressedDocData);
          return ret;
        };
      }
    }
  });
  return Object.assign({}, args.storage, {
    statics: statics,
    createStorageInstance: function () {
      var _createStorageInstance = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var compressionState, modifyToStorage, modifyFromStorage, childSchema, instance;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              modifyFromStorage = function _modifyFromStorage(docData) {
                return decompressDocumentData(compressionState, docData);
              };
              modifyToStorage = function _modifyToStorage(docData) {
                return compressDocumentData(compressionState, docData);
              };
              if (params.schema.keyCompression) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", args.storage.createStorageInstance(params));
            case 4:
              compressionState = getCompressionStateByRxJsonSchema(params.schema);
              /**
               * Because this wrapper resolves the key-compression,
               * we can set the flag to false
               * which allows underlying storages to detect wrong conficturations
               * like when keyCompression is set to false but no key-compression module is used.
               */
              childSchema = (0, _utils.flatClone)(compressionState.compressedSchema);
              childSchema.keyCompression = false;
              _context.next = 9;
              return args.storage.createStorageInstance(Object.assign({}, params, {
                schema: childSchema
              }));
            case 9:
              instance = _context.sent;
              return _context.abrupt("return", (0, _pluginHelpers.wrapRxStorageInstance)(instance, modifyToStorage, modifyFromStorage));
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createStorageInstance(_x) {
        return _createStorageInstance.apply(this, arguments);
      }
      return createStorageInstance;
    }()
  });
}
function compressDocumentData(compressionState, docData) {
  /**
   * Do not send attachments to compressObject()
   * because it will deep clone which does not work on Blob or Buffer.
   */
  docData = (0, _rxStorageHelper.flatCloneDocWithMeta)(docData);
  var attachments = docData._attachments;
  delete docData._attachments;
  docData = (0, _jsonschemaKeyCompression.compressObject)(compressionState.table, docData);
  docData._attachments = attachments;
  return docData;
}
function decompressDocumentData(compressionState, docData) {
  return (0, _jsonschemaKeyCompression.decompressObject)(compressionState.table, docData);
}
//# sourceMappingURL=index.js.map