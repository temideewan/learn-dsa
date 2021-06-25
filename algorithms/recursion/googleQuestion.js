function findmaximumRange(arr, num) {
  let maxArr = [];
  function maxSubSum(arr, num) {
    if (num > arr.length) return;

    let subSum = 0;
    let maxSum = 0;

    for (let i = 0; i < num; i++) {
      subSum = arr[i];
      maxSum = Math.max(maxSum, subSum);
    }
    maxArr.push(maxSum);
    return maxSubSum(arr.slice(1), num);
  }
  
  maxSubSum(arr,num);

  return maxArr;
}

console.log(findmaximumRange([10, 5, 2, 7, 8, 7], 3));
