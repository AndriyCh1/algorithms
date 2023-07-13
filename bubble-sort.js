function swapElements(firstIndex, secondIndex, arr) {
  const firstElement = arr[firstIndex];

  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = firstElement;
}

function bubbleSort(arr) {
  let isSwapped = true;

  while (isSwapped) {
    isSwapped = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapElements(j, j + 1, arr);
        isSwapped = true;
      }
    }
  }

  return arr;
}

const input = [5, 2, 4, 6, 1, 3];
console.log(input);
const result = bubbleSort(input);
console.log(result);
