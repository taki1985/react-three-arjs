"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.iterator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAR = exports.AR = void 0;
require("core-js/modules/es.array.map.js");
var _arThreex = require("@ar-js-org/ar.js/three.js/build/ar-threex");
var _fiber = require("@react-three/fiber");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable import/named */
var ARContext = /*#__PURE__*/(0, _react.createContext)({});
var videoDomElemSelector = "#arjs-video";
var AR = /*#__PURE__*/_react["default"].memo(function AR(_ref) {
  var _ref$tracking = _ref.tracking,
    tracking = _ref$tracking === void 0 ? true : _ref$tracking,
    children = _ref.children,
    sourceType = _ref.sourceType,
    sourceWidth = _ref.sourceWidth,
    sourceHeight = _ref.sourceHeight,
    displayWidth = _ref.displayWidth,
    displayHeight = _ref.displayHeight,
    patternRatio = _ref.patternRatio,
    matrixCodeType = _ref.matrixCodeType,
    detectionMode = _ref.detectionMode,
    cameraParametersUrl = _ref.cameraParametersUrl,
    onCameraStreamReady = _ref.onCameraStreamReady,
    onCameraStreamError = _ref.onCameraStreamError;
  var _useThree = (0, _fiber.useThree)(),
    gl = _useThree.gl,
    camera = _useThree.camera;
  var arContext = (0, _react.useMemo)(function () {
    var arToolkitSource = new _arThreex.ArToolkitSource({
      sourceType: sourceType,
      sourceWidth: sourceWidth,
      sourceHeight: sourceHeight,
      displayWidth: displayWidth,
      displayHeight: displayHeight
    });
    var arToolkitContext = new _arThreex.ArToolkitContext({
      cameraParametersUrl: cameraParametersUrl,
      detectionMode: detectionMode,
      patternRatio: patternRatio,
      matrixCodeType: matrixCodeType
    });
    return {
      arToolkitContext: arToolkitContext,
      arToolkitSource: arToolkitSource
    };
  }, [patternRatio, matrixCodeType, cameraParametersUrl, detectionMode, sourceType, sourceWidth, sourceHeight, displayWidth, displayHeight]);
  var onResize = (0, _react.useCallback)(function () {
    var arToolkitContext = arContext.arToolkitContext,
      arToolkitSource = arContext.arToolkitSource;
    arToolkitSource.onResizeElement();
    arToolkitSource.copyElementSizeTo(gl.domElement);
    if (arToolkitContext.arController !== null) {
      arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
      camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    }
  }, [gl, arContext, camera]);
  var onUnmount = (0, _react.useCallback)(function () {
    window.removeEventListener("resize", onResize);
    arContext.arToolkitContext.arController.dispose();
    if (arContext.arToolkitContext.arController.cameraParam) {
      arContext.arToolkitContext.arController.cameraParam.dispose();
    }
    delete arContext.arToolkitContext;
    delete arContext.arToolkitSource;
    var video = document.querySelector(videoDomElemSelector);
    if (video) {
      video.srcObject.getTracks().map(function (track) {
        return track.stop();
      });
      video.remove();
    }
  }, [onResize, arContext]);
  (0, _react.useEffect)(function () {
    arContext.arToolkitSource.init(function () {
      var video = document.querySelector(videoDomElemSelector);
      video.style.position = "fixed";
      video.onloadedmetadata = function () {
        console.log("actual source dimensions", video.videoWidth, video.videoHeight);
        if (video.videoWidth > video.videoHeight) {
          arContext.arToolkitContext.arController.orientation = "landscape";
          arContext.arToolkitContext.arController.options.orientation = "landscape";
        } else {
          arContext.arToolkitContext.arController.orientation = "portrait";
          arContext.arToolkitContext.arController.options.orientation = "portrait";
        }
        if (onCameraStreamReady) {
          onCameraStreamReady();
        }
        onResize();
      };
    }, onCameraStreamError);
    arContext.arToolkitContext.init(function () {
      return camera.projectionMatrix.copy(arContext.arToolkitContext.getProjectionMatrix());
    });
    window.addEventListener("resize", onResize);
    return onUnmount;
  }, [arContext, camera, onCameraStreamReady, onCameraStreamError, onResize, onUnmount]);
  (0, _fiber.useFrame)(function () {
    if (!tracking) {
      return;
    }
    if (arContext.arToolkitSource && arContext.arToolkitSource.ready !== false) {
      arContext.arToolkitContext.update(arContext.arToolkitSource.domElement);
    }
  });
  var value = (0, _react.useMemo)(function () {
    return {
      arToolkitContext: arContext.arToolkitContext
    };
  }, [arContext]);
  return /*#__PURE__*/_react["default"].createElement(ARContext.Provider, {
    value: value
  }, children);
});
exports.AR = AR;
var useAR = function useAR() {
  var arValue = _react["default"].useContext(ARContext);
  return _react["default"].useMemo(function () {
    return _objectSpread({}, arValue);
  }, [arValue]);
};
exports.useAR = useAR;
//# sourceMappingURL=ar.js.map