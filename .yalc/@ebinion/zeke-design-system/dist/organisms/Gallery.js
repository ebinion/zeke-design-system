"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledThumbnail = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  appearance: none;\n  outline: 3px solid rgba(255, 255, 255, 0);\n  box-shadow: none;\n  border: 0;\n  cursor: pointer;\n  display: block;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n  height: 0;\n  margin: 0;\n  padding: 100% 0 0;\n  transition-property: outline;\n  transition-duration: ", ";\n  transition-timing-function: ", ";\n  width: 100%;\n\n  &:active,\n  &:hover {\n    outline: 3px solid ", ";\n    transition-duration: 0;\n    z-index: 2;\n  }\n"])), _.animationTokens.duration.normal, _.animationTokens.easing, _.colorTokens.text.linkHighlight);

var StyledThumbnailInner = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  transition-property: transform;\n  transition-duration: ", ";\n  transition-timing-function: ", ";\n\n  button:active &,\n  button:hover & {\n    transform: scale(1.1);\n  }\n\n  img {\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n  }\n"])), _.animationTokens.duration.normal, _.animationTokens.easing);

var StyledGallery = _styledComponents.default.ul(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: grid;\n  gap: var(--component-padding-l);\n  justify-content: center;\n  list-style: none;\n  padding: 0;\n\n  ", "\n  \n\n  @media (min-width: ", ") {\n    ", "\n  }\n\n  @media (min-width: ", ") {\n    ", "\n  }\n"])), function (props) {
  if (props.itemsCount >= 2) {
    return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        grid-template-columns: repeat(2, 1fr);\n      "])));
  } else {
    return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        grid-template-columns: repeat(1, 1fr);\n      "])));
  }
}, _.measurementTokens.breakpoints.horizontal.m, function (props) {
  if (props.itemsCount >= 3) {
    return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          grid-template-columns: repeat(3, 1fr);\n        "])));
  } else {
    return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          grid-template-columns: repeat(", ", 1fr);\n        "])), props.itemCount);
  }
}, _.measurementTokens.breakpoints.horizontal.xl, function (props) {
  if (props.itemsCount >= 4) {
    return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          grid-template-columns: repeat(4, 1fr);\n        "])));
  } else {
    return (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          grid-template-columns: repeat(", ", 1fr);\n        "])), props.itemCount);
  }
});

var Figure = _styledComponents.default.figure(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: ", ";\n  padding: 0;\n  margin: 0;\n\n  @media (min-width: ", ") {\n    grid-gap: ", ";\n    grid-template-columns: 66fr 34fr;\n  }\n\n  @media (min-width: ", ") {\n    grid-template-columns: 1fr 320px;\n  }\n"])), _.measurementTokens.componentMargin.m, _.measurementTokens.breakpoints.horizontal.m, _.measurementTokens.componentMargin.xl, _.measurementTokens.breakpoints.horizontal.l);

var FigureContent = _styledComponents.default.figcaption(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([""])));

var FigureImage = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([""])));

var ModalComponent = function ModalComponent(_ref) {
  var item = _ref.item,
      isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      portalTarget = _ref.portalTarget;
  return /*#__PURE__*/_react.default.createElement(_.Modal, {
    isOpen: isOpen,
    handleClose: handleClose,
    portalTarget: portalTarget
  }, /*#__PURE__*/_react.default.createElement(_.Block, null, /*#__PURE__*/_react.default.createElement(Figure, null, /*#__PURE__*/_react.default.createElement(FigureImage, null, item.image), /*#__PURE__*/_react.default.createElement(FigureContent, null, item.description))));
};

var PreviewComponent = function PreviewComponent(_ref2) {
  var items = _ref2.items,
      handleMenuOpen = _ref2.handleMenuOpen;

  var handlePreviewClick = function handlePreviewClick(event, index) {
    event.target.blur();
    handleMenuOpen(index);
  };

  var renderPreviewItems = function renderPreviewItems() {
    return items.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: "preview-items".concat(index)
      }, /*#__PURE__*/_react.default.createElement(StyledThumbnail, {
        type: "button",
        "aria-label": item.title || ''
      }, /*#__PURE__*/_react.default.createElement(StyledThumbnailInner, {
        onClick: function onClick(event) {
          return handlePreviewClick(event, index);
        }
      }, item.image)));
    });
  };

  return /*#__PURE__*/_react.default.createElement(StyledGallery, {
    itemsCount: items.length
  }, renderPreviewItems());
};

var Gallery = function Gallery(_ref3) {
  var items = _ref3.items,
      portalTarget = _ref3.portalTarget;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalIsOpen = _useState2[0],
      setModalIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      currentItem = _useState4[0],
      setCurrentItem = _useState4[1];

  var handleMenuOpen = function handleMenuOpen(itemIndex) {
    setModalIsOpen(true);
    setCurrentItem(items[itemIndex]);
  };

  var handleMenuClose = function handleMenuClose() {
    setModalIsOpen(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(PreviewComponent, {
    items: items,
    handleMenuOpen: handleMenuOpen
  }), /*#__PURE__*/_react.default.createElement(ModalComponent, {
    items: items,
    isOpen: modalIsOpen,
    handleClose: handleMenuClose,
    item: currentItem,
    portalTarget: portalTarget
  }));
};

Gallery.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    image: _propTypes.default.node.isRequired,
    description: _propTypes.default.node,
    title: _propTypes.default.string
  })),
  portalTarget: _propTypes.default.element
};
var _default = Gallery;
exports.default = _default;