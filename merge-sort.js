function mergeSortedArrays(leftHalf, rightHalf) {
  const sortedArray = new Array(leftHalf.length + rightHalf.length).fill(null);
  let k = 0;
  let l = 0;
  let r = 0;

  while (l < leftHalf.length && r < rightHalf.length) {
    if (leftHalf[l] <= rightHalf[r]) {
      sortedArray[k] = leftHalf[l];
      l += 1;
    } else {
      sortedArray[k] = rightHalf[r];
      r += 1;
    }

    k += 1;
  }

  while (l < leftHalf.length) {
    sortedArray[k] = leftHalf[l];
    l += 1;
    k += 1;
  }

  while (r < rightHalf.length) {
    sortedArray[k] = rightHalf[r];
    r += 1;
    k += 1;
  }

  return sortedArray;
}

// O(nlog(n)) time | O(nlog(n)) space
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex, array.length);

  return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

const input = [5, 2, 4, 6, 1, 3];
console.log(input);
const result = mergeSort(input);
console.log(result);
