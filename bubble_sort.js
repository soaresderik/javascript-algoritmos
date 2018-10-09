function bubbleSort(arr) {
  let aux = 0;
  for (i in arr) {
    for (j in arr) {
      j = parseInt(j);
      if (arr[j] > arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([8, 9, 3, 5, 1]));
console.log(
  bubbleSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ])
);
