// function binarySearch(arr, elem) {
//   let start = 0;
//   let end = arr.length - 1;

//   let midPoint = Math.floor((start + end) / 2);
//   while (arr[midPoint] !== elem && start <= end) {
//     if (elem < arr[midPoint]) end = midPoint - 1;
//    else start = midPoint + 1;
//     midPoint = Math.floor((start + end) / 2);
//   }

//   return arr[midPoint] == elem? midPoint: -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 5));

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;

  let midPoint = Math.floor((start + end) / 2);
  while (arr[midPoint] !== elem && start <= end) {
    console.log(start, midPoint, end);
    if (elem < arr[midPoint]) {
      end = midPoint - 1;
    } else {
      start = midPoint + 1;
    }
    midPoint = Math.floor((start + end) / 2);
  }

  if (arr[midPoint] == elem) {
    return midPoint;
  }

  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 5));

function otherBinarySearch(arr, item) {
  let start = 0;
  end = arr.length - 1;

  while (start <= end) {
    let midPoint = Math.floor((start + end) / 2);

    if (arr[midPoint] == item) return midPoint;

    if (arr[midPoint] > item) {
      end = midpoint - 1;
    } else {
      start = midPoint + 1;
    }
  }

  return -1;
}

console.log(otherBinarySearch([1, 2, 3, 4, 5], 5));
