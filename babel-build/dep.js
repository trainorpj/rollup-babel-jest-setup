"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sillyAdd = function sillyAdd(x, y) {
  var sum = x + y;
  var expression = x + " + " + y + " = " + sum;
  return expression;
};

var sillyMult = exports.sillyMult = function sillyMult(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y;
  return {
    left: x,
    right: y,
    product: x * y
  };
};

exports.default = sillyAdd;