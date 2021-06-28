// const { console } = require("@ungap/global-this");


// function checkSumPresent(arr, num){

//     //  Going through the array.
//     //  Subtract the current number from the given number
//     // check if the result of subtraction is present in the rest of the array
//     // if so then return true otherwise return false and do that over again

//         let remaining;
//         let present;
//         let remainder;
//         let isRemainderPresent;
//         let response;

//         for(let i =0; i<arr.length; i++){
//             present = arr[i];
//             remaining = arr.slice(i+1);
//             remainder = num - present;
//             isRemainderPresent = remaining.includes(remainder);

//             if(isRemainderPresent){
//                 response = true;
//                 break;
//             } else{
//                 response =  false;
//             }

//         }

//         return response;
//     }

// given a list of numbers and a number k, return whether any two number in the list add up to k
// EG [10,15,3,7];

function frequencyCheckSumPresent(arr, num) {
  if (arr.length < 1) {
    return false;
  }

  let arrayElems = {};

  for (let val of arr) {
    arrayElems[val] = (arrayElems[val] || 0) + 1;
  }

  for (let key in arrayElems) {
      console.log(key);
      // if there is a key in that object that is a result of num passed in - current key then we know that two keys in that object sum up to that number
    if (arrayElems[num - key]) {
      return true;
    }
  }
}

console.log(frequencyCheckSumPresent([10, 15, 3, 7, -2, 1], 8));
