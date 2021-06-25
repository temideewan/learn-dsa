// Check through a SORTED array and return an array of two numbers that their sum == 0;

function sumZero(arr) {
    // E.g if Arr = [-3,-2,-1,0,1,2,3]
  for (let i = 0; i < arr.length; i++) {
    //   loop over every element of the array
    // Arr[i] = -3
    for (let j = i+1; j < arr.length; j++) {
        // for the outer element loop over the rest of the array minus the current outer element
        // remaining arr = [-2,-1,0,1,2,3];
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
