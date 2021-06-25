// NAIVE SOLUTION
// function bubbleSort(arr){
//     for(let i =0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j]> arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 5, 6, 3, 2, 8, 9, 1, 0, 10]));

// for an array that's almost completely sorted

function optimizedBubbleSort(arr) {
  // this boolean flag is used to keep track of whether there was a swap of elements or not
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    // by default set the flag to true. Then update it to false if the swap happens
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // here because the swap flag has been changes to false the outer loop willl not need to continue
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}
