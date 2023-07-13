function sort(arr) {
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

function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      return middle;
    }

    if (sortedArray[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

const input = [5, 2, 4, 6, 1, 3];
const sortedArray = sort(input);
const foundIndex = binarySearch(sortedArray, 2);
console.log(foundIndex);
