"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("..");

var respondToWidth = function respondToWidth(size) {
  return window.matchMedia("screen and (min-width: ".concat(_.measurementTokens.breakpoints.horizontal[size], ")"));
};

var _default = respondToWidth;
exports.default = _default;