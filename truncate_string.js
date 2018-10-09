/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
 *
 * Criar função que receba dois argumentos,
 *  o primeiro uma string e o segundo o número de letras para truncar a string,
 * retorne a nova string com ... no final
 * */

function truncateString(str, num) {
  if (str.length <= num) return str;

  return str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-", 1));
