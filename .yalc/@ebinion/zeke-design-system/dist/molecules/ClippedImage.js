"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _excluded = ["height", "path", "width", "viewBox"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledClipped = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.svgId && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      clip-path: url('#", "');\n    "])), props.svgId);
}, function (props) {
  return props.blockHeight && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      height: ", ";\n    "])), props.blockHeight);
}, function (props) {
  return props.blockWidth && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: ", ";\n    "])), props.blockWidth);
});

var StyledSvg = _styledComponents.default.svg(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])));

var ClippedImage = function ClippedImage(_ref) {
  var height = _ref.height,
      path = _ref.path,
      width = _ref.width,
      viewBox = _ref.viewBox,
      props = _objectWithoutProperties(_ref, _excluded);

  var viewBoxArray = viewBox.split(' ');
  var svgHeight = viewBoxArray[3];
  var svgWidth = viewBoxArray[2];

  var getId = function getId() {
    return "clipped-image".concat(svgWidth).concat(svgHeight);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledSvg, {
    viewBox: viewBox,
    "aria-hidden": true
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: getId(),
    clipPathUnits: "objectBoundingBox",
    transform: "scale(".concat(1 / svgWidth, " ").concat(1 / svgHeight, ")")
  }, path))), /*#__PURE__*/_react.default.createElement(StyledClipped, {
    blockHeight: height,
    blockWidth: width,
    svgId: getId()
  }, props.children));
};

ClippedImage.propTypes = {
  /**
   * Image to be clipped, set width and height of the image 100% to work with
   */
  children: _propTypes.default.node,

  /**
   * Height of the composed component
   */
  height: _propTypes.default.string,

  /**
   * SVG path or group with paths
   */
  path: _propTypes.default.node.isRequired,

  /**
   * Viewbox of the SVG
   */
  viewBox: _propTypes.default.number.isRequired,

  /**
   * Width of the composed component
   */
  width: _propTypes.default.string
};
ClippedImage.defaultProps = {};
var _default = ClippedImage;
exports.default = _default;