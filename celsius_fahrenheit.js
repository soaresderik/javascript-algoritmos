/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string
 *
 * Criar função que converta inverta a string recebida
 * */

function reverseString(celsius) {
  // Fórmula para conversão
  let fahrenheit = celsius * (9 / 5) + 32;

  return fahrenheit;
}

console.log(reverseString(30));
