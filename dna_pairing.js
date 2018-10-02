/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
 *
 * A fita de DNA está sem o elemento de emparelhamento.
 * Pegue cada caractere, obtenha seu par e retorne
 * os resultados como uma matriz 2d.
 * */

function pairElement(str) {
  // Objeto com todos os pares possíveis
  let match = { T: "A", A: "T", G: "C", C: "G" };

  // Separar parâmetro em arrays de caracteres
  let strArr = str.split("");

  /* Percorrer array para gerar matriz 2d e encontrar o par */
  for (let i in strArr) {
    /* Novo array receberá seu antigo valor mais a sua referência de par
       na variável match */
    strArr[i] = [strArr[i], match[strArr[i]]];
  }

  return strArr;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
