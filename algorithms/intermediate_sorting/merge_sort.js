function merge(arr1, arr2) {
  let returnedArr = [];
  let i = 0;
  let j = 0;
  // this makes sense
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      returnedArr.push(arr1[i]);
      i++;
    } else {
      returnedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    returnedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    returnedArr.push(arr2[j]);
    j++;
  }

  return returnedArr;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));

function mergeSort(arr1) {
  if (arr1.length <= 1) return arr1;
  let midpoint = Math.floor(arr1.length / 2);
  let firstHalf = mergeSort(arr1.slice(0, midpoint));
  let secondHalf = mergeSort(arr1.slice(midpoint));
  return merge(firstHalf, secondHalf);
}

console.log(mergeSort([1, 5, 4, 78, 9, 100]));
