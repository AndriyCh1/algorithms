function doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray) {
  let k = startIndex;
  let l = startIndex;
  let r = middleIndex + 1;

  while (l <= middleIndex && r <= endIndex) {
    if (auxiliaryArray[l] <= auxiliaryArray[r]) {
      mainArray[k] = auxiliaryArray[l];
      l += 1;
    } else {
      mainArray[k] = auxiliaryArray[r];
      r += 1;
    }

    k += 1;
  }

  while (l <= middleIndex) {
    mainArray[k] = auxiliaryArray[l];
    l += 1;
    k += 1;
  }

  while (r <= endIndex) {
    mainArray[k] = auxiliaryArray[r];
    r += 1;
    k += 1;
  }
}

function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray) {
  if (startIndex === endIndex) {
    return mainArray;
  }

  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray);
  mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray);
  doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray);
}

// O(nlog(n)) time | O(n) space
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const auxiliaryArray = [...array];
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
  return array;
}

const input = [5, 2, 4, 6, 1, 3];
console.log(input);
const result = mergeSort(input);
console.log(result);
