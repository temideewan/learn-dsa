function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // set the smallest to the beginning of the array and keep updating it to increasing values in the outer loop
    let smallest = i;
    for (j = i + 1; j < arr.length; j++) {
      // keep going from the next value to the end of the array and check if there is a new smallest then update smallest to be that index
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }

    if (i != smallest) {
      // swap the values for every time you go through the loop
      swap(arr, i, smallest);
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
