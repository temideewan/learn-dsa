function productOfArr(arr){
    // base case
    if(arr.length === 0){
        return 1;
    }
    // different input
    return arr[0] * productOfArr(arr.slice(1));
}

console.log(productOfArr([1,2,3,4,5]));