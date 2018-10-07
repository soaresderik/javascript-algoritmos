/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
 *
 * Crie uma função que receba um array e uma callback e remova cada elemento apartir do primeiro até
 * que o retorno da função callback ser true
 * */

function dropElements(arr, func) {
  /* Verifica se o array é maior que 0
     e se o primeiro indice do array atende o return da
     callback, se retornar falso então remova o primeiro índice do array
     assim sucessivamente até retornar true */
  while (arr.length > 0 && !func(arr[0])) arr.shift();

  return arr;
}

console.log(dropElements([1, 2, 3, 4, 5], n => n >= 3));
console.log(dropElements([1, 2, 3, 7, 4], n => n > 3));
