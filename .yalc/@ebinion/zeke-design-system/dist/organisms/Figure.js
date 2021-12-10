"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledComponent = _styledComponents.default.figure(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: grid;\n  grid-gap: ", ";\n  grid-template-areas:\n    'figure'\n    'caption';\n  padding: 0;\n  margin: 0;\n  width: 100%;\n\n  @media screen and (min-width: ", ") {\n    grid-gap: ", ";\n    grid-template-columns: ", ";\n    grid-template-areas: ", ";\n  }\n\n  @media screen and (min-width: ", ") {\n    grid-gap: ", ";\n  }\n"])), _.measurementTokens.componentMargin.m, _.measurementTokens.breakpoints.horizontal.m, _.measurementTokens.componentMargin.l, function (props) {
  return props.gridColumns;
}, function (props) {
  return props.gridAreas;
}, _.measurementTokens.breakpoints.horizontal.l, _.measurementTokens.componentMargin.xl);

var StyledCaption = _styledComponents.default.figcaption(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  grid-area: caption;\n  margin: 0;\n  padding: 0;\n"])));

var StyledFigure = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  grid-area: figure;\n"])));

var Figure = function Figure(_ref) {
  var figure = _ref.figure,
      figurePosition = _ref.figurePosition,
      children = _ref.children;

  var getGridAreas = function getGridAreas() {
    var figureName = 'figure';
    var captionName = 'caption';

    switch (figurePosition) {
      case 'right':
        return "\"".concat(captionName, " ").concat(figureName, "\"");

      default:
        return "\"".concat(figureName, " ").concat(captionName, "\"");
    }
  };

  var getGridColumns = function getGridColumns() {
    var figureSize = '55fr';
    var captionSize = '45fr';

    switch (figurePosition) {
      case 'right':
        return "".concat(captionSize, " ").concat(figureSize);

      default:
        return "".concat(figureSize, " ").concat(captionSize);
    }
  };

  return /*#__PURE__*/_react.default.createElement(StyledComponent, {
    figurePosition: figurePosition,
    gridAreas: getGridAreas(),
    gridColumns: getGridColumns()
  }, /*#__PURE__*/_react.default.createElement(StyledFigure, null, figure), /*#__PURE__*/_react.default.createElement(StyledCaption, null, children));
};

Figure.propTypes = {
  figurePosition: _propTypes.default.oneOf(['left', 'right']),
  figure: _propTypes.default.node
};
Figure.defaultProps = {
  figurePosition: 'left'
};
var _default = Figure;
exports.default = _default;