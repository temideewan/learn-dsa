// [1,2,3,4,4,4,7,7,12,12,13]
// find the unique values using a pointer

function uniqueValues(arr) {
  if (arr.length == 0) {
    return 0;
  }
  // we are updating the array that was given in
  // so we set a pointer at the beginning of the array (it has to be a sorted array)
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    //   we start looping through from the second element in the array
    if (arr[i] != arr[j]) {
      // if it's not equal to the value at array[i] then it is a unique value
      i++;
      //   increase the position of i
      arr[i] = arr[j];
      //   set whatever is at i now to what is at position j
      // and we're done
    }
    console.log(i, j);
  }

  return i + 1;
}

console.log(uniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
