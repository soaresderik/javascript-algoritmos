/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
 *
 * Encontre a letra que esta faltando na sequência e a retorne-a
 * */

function fearNoLetter(str) {
  /* Percorre cada caracter da string */
  for (let i in str) {
    /* Checa se a diferença da posição entre duas letras é maior que 1. 
       Quando encontrar retorna a posição da letra que faltou */
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1)
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
  }
}

console.log(fearNoLetter("abde"));
console.log(fearNoLetter("abcdefghjklmno"));
console.log(fearNoLetter("stvwx"));
