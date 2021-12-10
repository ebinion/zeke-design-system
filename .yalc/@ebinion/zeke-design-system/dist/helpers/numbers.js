"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLeadingZero = void 0;

var addLeadingZero = function addLeadingZero(number) {
  if (number.toString().length === 1) {
    return "0".concat(number.toString());
  } else {
    return number;
  }
};

exports.addLeadingZero = addLeadingZero;