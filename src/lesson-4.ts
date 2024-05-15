// Type Aliases

type stringOrNumber = string | number;

const add = (a: number, b: number): number => {
  return a + b;
};

type mathFunction = (a: number, b: number) => number;

const subtract: mathFunction = (a, b) => {
  return a - b;
};

const multiply: mathFunction = function (c, d) {
  return c * d;
};
 
