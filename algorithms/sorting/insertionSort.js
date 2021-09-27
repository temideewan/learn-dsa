function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i-1;
    for(; j >= 0 && arr[j] > currentVal; j--) {
      console.log(arr[j+1], arr[j]);
      arr[j + 1] = arr[j];
    }
    arr[ j + 1 ] = currentVal;
  }

  return arr;
}


console.log(insertionSort([23,4,1,18,0,6]));
