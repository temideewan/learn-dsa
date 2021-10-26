// function getDigit(num, pos = 1){
//   let stringNum = num.toString();
//   return parseInt(stringNum[stringNum.length - 1 - pos]) || 0;
// }
function getDigitAgain(num, pos = 1){
  return Math.floor((Math.abs(num) / Math.pow(10, pos)))  % 10;
}

function digitCount(num){
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
  let highest = 0;
  for (let i = 0; i < arr.length; i ++){
    let currentHighest = digitCount(arr[i]);
    highest = Math.max(highest, currentHighest)
  }

  return highest;
}

function radixSort(arr){
  let longest = mostDigits(arr);
  for(let i = 0; i < longest; i++){
    let bucket = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++){
      let currentBucketIndex = getDigitAgain(arr[j], i);
      bucket[currentBucketIndex].push(arr[j]);
    }
    console.log(bucket);
    arr = [].concat(...bucket);

    console.log(arr);
  }
  return arr;
}

console.log(radixSort([7323,111,2311,654567,]));
