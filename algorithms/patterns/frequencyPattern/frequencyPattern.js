// Given two arrays write a function that returns true if and only if;
// The two arrays have the same length and thet second array contains the square of elements of the first array


// Nested loops lead to quadratic O(n)
// function same(arr1, arr2){
//     // check their length to short circuit immediately
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     for(let i = 0; i< arr1.length; i++){
//         // go through the second array to see if there is an occurrence of the squared of the current element of the first array inside of it.
//         let correctIndex = arr2.indexOf(arr1[i]**2);
//         if(correctIndex == -1){
//             // this means that the square of that element is not presesnt in the second array.
//             return false;
//         }
//         console.log(arr2);
//         // keep reducing the array
//         arr2.splice(correctIndex,1);
//     }

//     return false;
// }



// now using the frequency counter pattern;

function frequencySame(arr1, arr2) {
  // short circuit again
  if (arr1.length !== arr2.length) {
    return false;
  }

  // create objects to keep track of the frequencies.

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // use two loops instead of a nested loop;
  for (let val of arr1) {
    // if the element is there increase the value by 1 or set it to 0 and then increase it by 1;
    // tapping into javascript || short circuitory
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    // if the element is there increase the value by 1 or set it to 0 and then increase it by 1;
    // tapping into javascript || short circuitory
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // if a double of that key is not present as a key in frequencyCounter2 return false.

    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if the frequency of both of them are not the same then also return falsle

    if (!(frequencyCounter2[key ** 2] == frequencyCounter1[key])) {
      return false;
    }
  }
   console.log(true)
  // if all these did not happen then it's true
  return true;
}


frequencySame([1, 2, 3, 2], [9, 1, 4, 4]);