/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
 *
 * Criar função que receba dois argumentos,
 *  o primeiro uma string e o segundo o número de vezes que ela deve se repetir
 * */

/* Método Prático */
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

/* Método Educativo */
function repeatStringNumTimes2(str, num) {
  if (num < 0) return "";
  if (num === 1) return str;
  return str + repeatStringNumTimes2(str, num - 1);
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 10));
console.log(repeatStringNumTimes("*", -2));

console.log(repeatStringNumTimes2("abc", 3));
console.log(repeatStringNumTimes2("*", 10));
console.log(repeatStringNumTimes2("*", -2));
