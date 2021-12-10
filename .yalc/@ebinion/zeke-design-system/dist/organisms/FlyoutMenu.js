"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _excluded = ["isOpen", "closeHandler"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledComponent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition-property: opacity;\n  transition-duration: ", ";\n  transition-timing-function: ", ";\n  z-index: ", ";\n\n  ", "\n"])), _.animationTokens.duration.normal, _.animationTokens.easing, _.measurementTokens.zIndex.nav, function (props) {
  return props.isOpen && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      opacity: 1;\n      pointer-events: auto;\n    "])));
});

var StyledMenu = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: ", ";\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transform: translate(0, ", ");\n  transition: transform;\n  transition-duration: ", ";\n  transition-timing-function: ", ";\n  z-index: 2;\n\n  @media screen and (min-width: ", ") {\n    max-width: ", ";\n    width: 50vw;\n    transform: translate(-", ", 0);\n  }\n\n  @media screen and (min-width: ", ") {\n    width: 40vw;\n  }\n\n  ", "\n"])), _.colorTokens.backgrounds.flyout, _.animationTokens.slideDistance.long, _.animationTokens.duration.normal, _.animationTokens.easing, _.measurementTokens.breakpoints.horizontal.s, _.measurementTokens.maxMenuWidth, _.animationTokens.slideDistance.long, _.measurementTokens.breakpoints.horizontal.m, function (props) {
  return props.isOpen && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      transform: translate(0, 0);\n\n      @media screen and (min-width: ", ") {\n        transform: translate(0, 0);\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.s);
});

var StyledMask = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  backdrop-filter: blur(", ");\n  background: ", ";\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  @media screen and (min-width: ", ") {\n    background: ", ";\n  }\n"])), _.measurementTokens.blur.normal, _.colorTokens.backgrounds.flyout, _.measurementTokens.breakpoints.horizontal.s, _.colorTokens.backgrounds.overlay);

var StyledClose = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  text-align: center;\n  top: ", ";\n  right: ", ";\n\n  @media screen and (min-width: ", ") {\n    top: ", ";\n    right: ", ";\n  }\n"])), _.measurementTokens.navButtonOffsetSmall, _.measurementTokens.navButtonOffsetSmall, _.measurementTokens.breakpoints.horizontal.m, _.measurementTokens.navButtonOffset, _.measurementTokens.navButtonOffset);

var StyledNav = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: ", ";\n  padding-top: calc(\n    ", " +\n      ", "\n  );\n"])), _.measurementTokens.componentMargin.l, _.measurementTokens.componentMargin.xl, _.measurementTokens.navButtonOffset);

var StyleNavItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: ", ";\n"])), _.measurementTokens.touchTarget);

var FlyoutMenu = function FlyoutMenu(_ref) {
  var isOpen = _ref.isOpen,
      closeHandler = _ref.closeHandler,
      props = _objectWithoutProperties(_ref, _excluded);

  (0, _react.useEffect)(function () {
    var handleKeyPress = function handleKeyPress(event) {
      if (event.keyCode === 27 && isOpen) {
        closeHandler();
      }
    };

    document.addEventListener('keyup', handleKeyPress);
    return function () {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [closeHandler, isOpen]);

  var renderItems = function renderItems() {
    var LinkElement = props.Link;
    return /*#__PURE__*/_react.default.createElement(StyledNav, null, props.items && props.items.map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement(StyleNavItem, {
        key: "navItem".concat(i)
      }, /*#__PURE__*/_react.default.createElement(_.A, {
        to: item.to,
        kind: "nav",
        key: "navLink".concat(i),
        as: LinkElement !== undefined ? LinkElement : 'a'
      }, item.label));
    }));
  };

  return /*#__PURE__*/_react.default.createElement(StyledComponent, {
    isOpen: isOpen,
    tabIndex: isOpen ? false : '-1'
  }, /*#__PURE__*/_react.default.createElement(StyledMask, {
    onClick: closeHandler
  }), /*#__PURE__*/_react.default.createElement(StyledMenu, {
    isOpen: isOpen
  }, /*#__PURE__*/_react.default.createElement(StyledClose, null, /*#__PURE__*/_react.default.createElement(_.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_.IconX, null),
    title: "Close",
    clickHandler: closeHandler
  })), /*#__PURE__*/_react.default.createElement("nav", {
    role: "navigation",
    "aria-label": "Main"
  }, renderItems(), props.children)));
};

FlyoutMenu.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    to: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired,
    linkElement: _propTypes.default.element
  })).isRequired,
  isOpen: _propTypes.default.bool,
  closeHandler: _propTypes.default.func.isRequired,
  children: _propTypes.default.node
};
FlyoutMenu.defaultProps = {
  isOpen: true,
  closeHandler: function closeHandler() {}
};
var _default = FlyoutMenu;
exports.default = _default;