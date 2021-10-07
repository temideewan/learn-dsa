function swap(arr, i, j){
  let temp = arr[i];
  arr[i] =arr[j];
  arr[j] = temp;
}
function pivotHelper(arr, startIndex = 0, endIndex = arr.length -1){
 let pivot = arr[startIndex];
 let pivotIndex = startIndex;
 for (let i = startIndex + 1; i<= endIndex; i++) {
  if (pivot > array[i]){
    pivotIndex += 1;
    swap(arr, i , pivotIndex);
  }
 }
  swap(arr, startIndex, pivotIndex);
  return pivotIndex;
}

function quickSort(arr, left= 0, right= array.length - 1){
  if(left < right){

    let pivotIndex = pivotHelper(arr,left, right)
    quickSort(arr,left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right)
  }

  return arr;
}
