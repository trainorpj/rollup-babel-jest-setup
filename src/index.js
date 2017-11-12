import sillyAdd, { sillyMult } from "./dep";

const wowMath = (x, y) => {
  const sumExpression = sillyAdd(x, y);
  const { left, right, product } = sillyMult({ x, y });

  const multExpression = `${left} * ${right} = ${product}`;

  const allTheMath = `${sumExpression} ... and ${multExpression}`;

  console.log(allTheMath);
};

wowMath(7, 5);
