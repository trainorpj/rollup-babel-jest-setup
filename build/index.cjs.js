'use strict';

var sillyAdd = function sillyAdd(x, y) {
  var sum = x + y;
  var expression = x + " + " + y + " = " + sum;
  return expression;
};

var sillyMult = function sillyMult(_ref) {
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

var wowMath = function wowMath(x, y) {
  var sumExpression = sillyAdd(x, y);

  var _sillyMult = sillyMult({ x: x, y: y }),
      left = _sillyMult.left,
      right = _sillyMult.right,
      product = _sillyMult.product;

  var multExpression = left + " * " + right + " = " + product;

  var allTheMath = sumExpression + " ... and " + multExpression;

  console.log(allTheMath);
};

wowMath(7, 5);

module.exports = wowMath;
