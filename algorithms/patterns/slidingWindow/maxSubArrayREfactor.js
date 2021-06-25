function maxSubArrSumRefactor(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  // get the sum of the first three values
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // store in a remporary variable
  tempSum = maxSum;

  // the gorgeous sliding window

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArrSumRefactor([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));