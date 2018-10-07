/**
 * Retirado do freeCodeCamp: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers/
 *
 * Retorne a soma de todos os números ímpares de fibbonacci
 * que sejam menor ou igual a um valor passado por parâmetro
 * */

function sumFibs(num) {
  let prev = 0; // Próximo valor iniciando com zero
  let current = 1; // Valor atual iniciando com 1
  let result = 0; // Variável para somar

  /* Enquanto o valor inicial for menor que o valor
     passado por parâmetro faça o loop */
  while (current <= num) {
    /* se o resto da divisão do vaçor atual for igual a 1 então é impar
        e deve somar current a result */
    if (current % 2 === 1) result += current;

    /* current recebe a soma dele com o próximo valor
        e próximo valor recebe current - prev */
    current += prev;
    prev = current - prev;
  }

  return result;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
