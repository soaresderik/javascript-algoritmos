/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string
 *
 * Criar função que converta inverta a string recebida
 * */

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString("Olá"));
console.log(reverseString("Greetings from Earth"));
