"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var StyledButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  appearance: none;\n  background-color: ", ";\n  border: ", " solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  font-size: ", ";\n  min-height: ", ";\n  padding: ", ";\n  transition-property: background-color, box-shadow, color;\n  transition-duration: ", ";\n  transition-timing-function: ", ";\n  width: ", ";\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.borderSize;
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.fontSize;
}, function (props) {
  return props.height;
}, function (props) {
  return "".concat(props.paddingTop, " ").concat(props.paddingRight, " ").concat(props.paddingBottom, " ").concat(props.paddingLeft);
}, function (props) {
  return props.transitionDuration;
}, function (props) {
  return props.easing;
}, function (props) {
  return props.width;
}, function (props) {
  return props.hover.backgroundColor;
}, function (props) {
  return props.hover.borderColor;
}, function (props) {
  return props.hover.color;
});

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "getStyles",
    value: function getStyles() {
      var primaryStyles = {
        backgroundColor: _.colorTokens.backgrounds['button-primary'],
        borderSize: _.measurementTokens['button-border'],
        borderColor: _.colorTokens.borders['button-primary'],
        transitionDuration: _.animationTokens['transition-duration'],
        easing: _.animationTokens['transition-easing'],
        color: _.colorTokens.text['button-primary'],
        fontSize: _.textTokens.sizes.m.size,
        height: _.measurementTokens['touchTarget'],
        paddingTop: _.measurementTokens['button-padding-top'],
        paddingRight: _.measurementTokens['button-padding-right'],
        paddingBottom: _.measurementTokens['button-padding-bottom'],
        paddingLeft: _.measurementTokens['button-padding-left'],
        hover: {
          color: _.colorTokens.text['button-primary-highlight'],
          backgroundColor: _.colorTokens.backgrounds['button-primary-highlight'],
          borderColor: _.colorTokens.borders['button-primary-highlight']
        }
      };

      switch (this.props.kind) {
        case 'secondary':
          return Object.assign(primaryStyles, {
            color: _.colorTokens.text['button-secondary'],
            backgroundColor: _.colorTokens.backgrounds['button-secondary'],
            borderColor: _.colorTokens.borders['button-secondary'],
            hover: {
              color: _.colorTokens.text['button-secondary-highlight'],
              backgroundColor: _.colorTokens.backgrounds['button-secondary-highlight'],
              borderColor: _.colorTokens.borders['button-secondary-highlight']
            }
          });

        default:
          return primaryStyles;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(StyledButton, _extends({}, this.props, {
        width: this.props.fullWidth ? '100%' : 'auto'
      }, this.getStyles()), this.props.children);
    }
  }]);

  return Button;
}(_react.default.Component);

exports.default = Button;

_defineProperty(Button, "propTypes", {
  kind: _propTypes.default.oneOf(['primary', 'secondary']),
  fullWidth: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['button', 'submit', 'reset'])
});

_defineProperty(Button, "defaultProps", {
  kind: 'primary',
  fullWidth: false,
  type: 'button'
});