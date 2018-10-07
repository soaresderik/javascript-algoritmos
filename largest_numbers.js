/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
 *
 * Retorne um array que consiste no maior número de cada sub-array fornecido.
 * O array que será fornecido deverá conter 4 sub-arrays.
 * */

function largestOfFour(arr) {
  return arr.map(v =>
    v.reduce((prev, current) => (current > prev ? current : prev))
  );
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);
