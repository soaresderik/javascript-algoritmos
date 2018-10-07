/**
 * Retirado do freeCodeCamp:https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
 *
 * Retorne o fatorial de um número fornecido
 * */

function factorialize(num) {
  if (num === 0) return 1;
  return num * factorialize(num - 1);
}

console.log(factorialize(5));
console.log(factorialize(20));
