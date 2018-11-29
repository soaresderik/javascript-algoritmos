/**
 * Retirado do livro Estrutura de dados e Algoritmos em Javascript, Loiane Groner
 **/

var zero = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-3, -2, -1];
// var numbers = negativeNumbers.concat(zero, positiveNumbers);

// console.log(numbers);

var isEven = function(x) {
  console.log(x);
  return x % 2 == 0 ? true : false;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Intera até a função retornar false
numbers.every(isEven);

// Intera até a função retornar true
numbers.some(isEven);

// Mesmo que um for
numbers.forEach(function(x) {
  console.log(x % 2 == 0);
});

// Usando função map
var myMap = numbers.map(isEven);
console.log(myMap);

// Usando função filter
var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// Usando reducer
var evenReduce = numbers.reduce(function(prev, curr, index) {
  return prev + curr;
});

console.log(evenReduce);
