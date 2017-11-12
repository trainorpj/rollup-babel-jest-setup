"use strict";

var _dep = require("./dep");

var _dep2 = _interopRequireDefault(_dep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wowMath = function wowMath(x, y) {
  var sumExpression = (0, _dep2.default)(x, y);

  var _sillyMult = (0, _dep.sillyMult)({ x: x, y: y }),
      left = _sillyMult.left,
      right = _sillyMult.right,
      product = _sillyMult.product;

  var multExpression = left + " * " + right + " = " + product;

  var allTheMath = sumExpression + " ... and " + multExpression;

  console.log(allTheMath);
};

wowMath(7, 5);