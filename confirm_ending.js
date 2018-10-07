/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
 *
 * Crie uma função que receba dois parâmetros, o primeiro
 * recebe uma palavra e o segundo um alvo para verificar se
 * o primeiro parâmetro termina com o segundo parâmetro passado.
 * EX: confirmEnding('Andre', 're') retorna true
 * */

function confirmEnding(str, target) {
  return str.endsWith(target);
}

function confirmEnding2(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding2("Bastian", "n"));
