"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100vh;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  transition-duration: ", ";\n  transition-property: backdrop-filter, opacity;\n  transition-timing-function: ", ";\n  width: 100vw;\n  z-index: ", ";\n\n  ", "\n\n  ", ";\n"])), _.animationTokens.duration.normal, _.animationTokens.easing, _.measurementTokens.zIndex.modal, function (props) {
  return props.size === 'window' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background: ", ";\n      backdrop-filter: blur(", ");\n    "])), _.colorTokens.backgrounds.overlay, _.measurementTokens.blur.normal);
}, function (props) {
  return props.isOpen && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      opacity: 1;\n      pointer-events: auto;\n    "])));
});

var StyledModal = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  -webkit-overflow-scrolling: touch;\n  background: ", ";\n  height: 100%;\n  overflow: scroll;\n  transition-duration: ", ";\n  transition-property: opacity, transform;\n  transition-timing-function: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), _.colorTokens.backgrounds.light, _.animationTokens.duration.normal, _.animationTokens.easing, function (props) {
  return props.size === 'full' && !props.isOpen && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      transform: translateY(", ");\n    "])), _.animationTokens.slideDistance.long);
}, function (props) {
  return props.size === 'full' && props.isOpen && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      transform: 0;\n    "])));
}, function (props) {
  return props.size === 'window' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      height: auto;\n      min-height: 25vh;\n      max-height: 80vh;\n      max-width: 700px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, 0%);\n      width: 90vw;\n\n      @media (min-width: ", ") {\n        width: 80vw;\n      }\n\n      @media (min-width: ", ") {\n        width: 75vw;\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.s, _.measurementTokens.breakpoints.horizontal.m);
}, function (props) {
  return props.size === 'window' && props.isOpen && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      transform: translate(-50%, -50%);\n    "])));
});

var StyledModalClose = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  text-align: right;\n  padding: var(--component-padding);\n\n  ", "\n"])), function (props) {
  return props.size === 'full' && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      padding-left: var(--site-padding);\n      padding-right: var(--site-padding);\n      padding-top: var(--site-padding);\n    "])));
});

var BodyStyle = (0, _styledComponents.createGlobalStyle)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  html,\n  body {\n    ", "\n  }\n"])), function (props) {
  return props.scrollIsLocked && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        overflow: hidden;\n      "])));
});

var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (event.keyCode === 27 && _this.props.isOpen) {
        _this.props.handleClose();
      }
    });

    _this.renderModal = _this.renderModal.bind(_assertThisInitialized(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.portalRoot = null;
    _this.portalElement = null;
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keyup', this.handleKeyPress);

      if (this.props.portalQuery) {
        this.portalRoot = document.querySelector(this.props.portalQuery);
        this.portalElement = document.createElement('div');
        this.portalRoot.appendChild(this.portalElement);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keyup', this.handleKeyPress);

      if (this.portalRoot !== null) {
        this.portalRoot.removeChild(this.portalElement);
      }
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      return /*#__PURE__*/_react.default.createElement(StyledWrapper, {
        isOpen: this.props.isOpen,
        size: this.props.size
      }, /*#__PURE__*/_react.default.createElement(BodyStyle, {
        scrollIsLocked: this.props.isOpen
      }), /*#__PURE__*/_react.default.createElement(StyledModal, {
        isOpen: this.props.isOpen,
        size: this.props.size
      }, /*#__PURE__*/_react.default.createElement(StyledModalClose, {
        size: this.props.size
      }, /*#__PURE__*/_react.default.createElement(_.IconButton, {
        title: "close",
        icon: /*#__PURE__*/_react.default.createElement(_.IconX, null),
        type: "button",
        clickHandler: this.props.handleClose
      })), /*#__PURE__*/_react.default.createElement("div", null, this.props.children)));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.portalElement) {
        return /*#__PURE__*/(0, _reactDom.createPortal)(this.renderModal(), this.portalElement);
      } else {
        return this.renderModal();
      }
    }
  }]);

  return Modal;
}(_react.default.Component);

exports.default = Modal;

_defineProperty(Modal, "propTypes", {
  isOpen: _propTypes.default.bool,
  handleClose: _propTypes.default.func,
  portalQuery: _propTypes.default.string,
  size: _propTypes.default.oneOf(['window', 'full'])
});

_defineProperty(Modal, "defaultProps", {
  isOpen: false,
  handleClose: function handleClose() {},
  size: 'full'
});