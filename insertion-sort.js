function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];

    let j = i - 1;
    while (value < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = value;
  }

  return arr;
}

const input = [5, 2, 4, 6, 1, 3];
const result = insertionSort(input);
console.log(input);
console.log(result);
