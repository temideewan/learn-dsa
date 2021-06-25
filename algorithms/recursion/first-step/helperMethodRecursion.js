// we basically wrap a recursive function with a normal function just in case we're gathering some data.
// preventing the reseting of the store wher the data is set over and over again

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}


console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]));