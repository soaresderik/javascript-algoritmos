/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
 * Verifique se um valor é classificado como um primitivo booleano.
 * Retornar verdadeiro ou falso.
 * */

function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(null));
console.log(booWho([1, 2, 3]));
console.log(booWho(true));
console.log(booWho(false));
