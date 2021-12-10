"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _GlobalStyles = _interopRequireDefault(require("./GlobalStyles"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledComponent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-areas:\n    'header'\n    'main'\n    'footer';\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n"])));

var StyledHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  grid-area: header;\n"])));

var StyledMain = _styledComponents.default.main(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  grid-area: main;\n"])));

var StyledFooter = _styledComponents.default.footer(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  grid-area: footer;\n"])));

var SiteLayout = function SiteLayout(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_GlobalStyles.default, null), /*#__PURE__*/_react.default.createElement(StyledComponent, null, /*#__PURE__*/_react.default.createElement(_.A, {
    keyboardOnly: true,
    href: "#main"
  }, "Skip to main content"), /*#__PURE__*/_react.default.createElement(StyledHeader, null, props.headerChildren), /*#__PURE__*/_react.default.createElement(StyledMain, {
    id: "main",
    role: "main"
  }, props.mainChildren || props.children), /*#__PURE__*/_react.default.createElement(StyledFooter, {
    role: "contentinfo"
  }, props.footerChildren)));
};

SiteLayout.propTypes = {
  headerChildren: _propTypes.default.node,
  mainChildren: _propTypes.default.node,
  footerChildren: _propTypes.default.node
};
var _default = SiteLayout;
exports.default = _default;