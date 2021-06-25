// a function that receives an array and aan integer. It should return the maximum sum of n consecutive elements in the array

// naive solution
function maxSubArrSum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;

  // The array stop at the last place we could get a sum of n numbers without running out of indexes
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }

  return max;
}

console.log(maxSubArrSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
