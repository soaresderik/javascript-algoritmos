/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
 *
 * Converta caracteres especiais em uma string em
 * seus respectivos HTML entities.
 * */

function convertHTML(str) {
  // Objeto com algumas entities HTML
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  /* quebra string e então aplica um map. retorna a entity se encontrar no objeto
     se não, retorne a propria string e por fim faça a união */
  return str
    .split("")
    .map(v => entities[v] || v)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
