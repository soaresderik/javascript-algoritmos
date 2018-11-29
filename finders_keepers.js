/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
    Crie uma função que examine uma matriz (primeiro argumento)
    e retorne o primeiro elemento da matriz que passa por um teste de verdade
    (segundo argumento). Se nenhum elemento passar no teste, retorne indefinido.
 * */

function findElement(arr, func) {
  for (let i in arr) if (func(arr[i])) return arr[i];

  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));
