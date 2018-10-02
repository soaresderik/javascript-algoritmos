/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
 *
 * Escreva uma função que receba um ou mais arrays e retorna um novo array unindo
 * os arrays passados por parâmetro e removendo os valores repetidos.
 * */

/* passa um spread operator para todos os parâmentros passados e joga em arr */
function uniteUnique(...arr) {
  /* concatena todos os arrays de arr em um array vazio e armazena em flatArr */
  const flatArr = [].concat(...arr);

  /* retorna um novo array limpando os valores duplicados com o Set */
  return [...new Set(flatArr)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
