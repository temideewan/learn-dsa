function getDigit(num, pos = 1){
  let stringNum = num.toString();
  return parseInt(stringNum[stringNum.length - 1 - pos]) || 0;
}
// function getDigitAgain(num, pos = 1){
//   return Math.floor((Math.abs(num) / Math.pow(10, pos)))  % 10;
// }

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

console.log(mostDigits([7323, 111111,23456,234567,213456909876543,654332213456789]));
