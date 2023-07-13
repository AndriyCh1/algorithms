function swapElements(firstIndex, secondIndex, arr) {
  const firstElement = arr[firstIndex];

  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = firstElement;
}

function selectionSort(arr) {
  let currentSmallestIndex;

  for (let i = 0; i < arr.length; i++) {
    currentSmallestIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[currentSmallestIndex] > arr[j]) {
        currentSmallestIndex = j;
      }
    }

    if (currentSmallestIndex !== i) {
      swapElements(i, currentSmallestIndex, arr);
    }
  }

  return arr;
}

const input = [5, 2, 4, 6, 1, 3];
console.log(input);
const result = selectionSort(input);
console.log(result);
