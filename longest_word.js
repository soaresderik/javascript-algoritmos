/**
 * Retirado do freeCodeCamp:https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
 *
 * Encontre a palavra mais longa de uma frase
 * */

function findLongestWordLength(str) {
  let words = str.split(" ");
  let max = 0;

  for (let i in words) {
    if (words[i].length > max) max = words[i].length;
  }

  return max;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
