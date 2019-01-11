/**
 * Retirado do livro Estrutura de dados e Algoritmos em Javascript, Loiane Groner
 * */

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Acrescentando novo elemento ao final do array
numbers[numbers.length] = 10;
console.log(numbers);

// Usando o push para acrescentar ao final
numbers.push(11);
numbers.push(12, 13);
console.log(numbers);

// Inserindo elemento na primeira posição
for (i = numbers.length; i >= 0; i--) numbers[i] = numbers[i - 1];
numbers[0] = -1;
console.log(numbers);

// Usando o unshift para acrescentar ao início
numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers);

// Remover valor do fim do array com pop
numbers.pop();
console.log(numbers);

// Removendo valor da primeira posição (for)
for (var i = 0; i < numbers.length; i++) numbers[i] = numbers[i + 1];
// Removendo com shift
numbers.shift();
console.log(numbers);

// Removendo valores específicos
// Três elementos apartir do index 5
numbers.splice(5, 3);
console.log(numbers);

// Acrescentando valores específicos
// Três elementos apartir do index 5
numbers.splice(5, 0, 3, 4, 5);
console.log(numbers);
