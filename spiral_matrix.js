/**
 * Retornar elementos de uma matrix em ordem aspiral
 * */

const spiralOrder = function(matrix, result = []) {
  if (matrix.length === 0) return result;

  for (let i = 0; i < matrix.length; i++) {
    if (i === 0) result = result.concat(matrix[i]);
    else {
      let last = matrix[i].pop();
      if (!last) return result;

      result.push(last);
      matrix[i].reverse();
    }
  }

  matrix.shift();
  return spiralOrder(matrix.reverse(), result);
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
