"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loremIpsum = require("lorem-ipsum");

var lorem = new _loremIpsum.LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 18,
    min: 12
  }
});
var _default = lorem;
exports.default = _default;