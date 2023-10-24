"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
var _react = _interopRequireDefault(require("react"));
var _fiber = require("@react-three/fiber");
var _ar = require("./ar");
var _excluded = ["arEnabled", "tracking", "children", "patternRatio", "detectionMode", "cameraParametersUrl", "matrixCodeType", "sourceType", "sourceWidth", "sourceHeight", "displayWidth", "displayHeight", "onCameraStreamReady", "onCameraStreamError"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable indent */ /* eslint-disable react/jsx-indent */ /* eslint-disable react/jsx-pascal-case */
var eventManagerFactory = function eventManagerFactory(state) {
  return _objectSpread(_objectSpread({}, (0, _fiber.events)(state)), {}, {
    compute: function compute(event, state) {
      state.pointer.set(event.clientX / state.size.width * 2 - 1, -(event.clientY / state.size.height) * 2 + 1);
      state.raycaster.setFromCamera(state.pointer, state.camera);
    }
  });
};
var ARCanvas = function ARCanvas(_ref) {
  var _ref$arEnabled = _ref.arEnabled,
    arEnabled = _ref$arEnabled === void 0 ? true : _ref$arEnabled,
    _ref$tracking = _ref.tracking,
    tracking = _ref$tracking === void 0 ? true : _ref$tracking,
    children = _ref.children,
    _ref$patternRatio = _ref.patternRatio,
    patternRatio = _ref$patternRatio === void 0 ? 0.5 : _ref$patternRatio,
    _ref$detectionMode = _ref.detectionMode,
    detectionMode = _ref$detectionMode === void 0 ? "mono_and_matrix" : _ref$detectionMode,
    _ref$cameraParameters = _ref.cameraParametersUrl,
    cameraParametersUrl = _ref$cameraParameters === void 0 ? "data/camera_para.dat" : _ref$cameraParameters,
    _ref$matrixCodeType = _ref.matrixCodeType,
    matrixCodeType = _ref$matrixCodeType === void 0 ? "3x3" : _ref$matrixCodeType,
    _ref$sourceType = _ref.sourceType,
    sourceType = _ref$sourceType === void 0 ? "webcam" : _ref$sourceType,
    _ref$sourceWidth = _ref.sourceWidth,
    sourceWidth = _ref$sourceWidth === void 0 ? 640 : _ref$sourceWidth,
    _ref$sourceHeight = _ref.sourceHeight,
    sourceHeight = _ref$sourceHeight === void 0 ? 480 : _ref$sourceHeight,
    _ref$displayWidth = _ref.displayWidth,
    displayWidth = _ref$displayWidth === void 0 ? 640 : _ref$displayWidth,
    _ref$displayHeight = _ref.displayHeight,
    displayHeight = _ref$displayHeight === void 0 ? 480 : _ref$displayHeight,
    onCameraStreamReady = _ref.onCameraStreamReady,
    onCameraStreamError = _ref.onCameraStreamError,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_fiber.Canvas, _extends({
    events: eventManagerFactory,
    camera: arEnabled ? {
      position: [0, 0, 0]
    } : props.camera
  }, props), arEnabled ? /*#__PURE__*/_react["default"].createElement(_ar.AR, {
    tracking: tracking,
    patternRatio: patternRatio,
    matrixCodeType: matrixCodeType,
    detectionMode: detectionMode,
    sourceType: sourceType,
    sourceWidth: sourceWidth,
    sourceHeight: sourceHeight,
    displayWidth: displayWidth,
    displayHeight: displayHeight,
    cameraParametersUrl: cameraParametersUrl,
    onCameraStreamReady: onCameraStreamReady,
    onCameraStreamError: onCameraStreamError
  }, children) : children);
};
var _default = ARCanvas;
exports["default"] = _default;
//# sourceMappingURL=arCanvas.js.map