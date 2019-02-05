function findMinAndRemoveSorted(array) {
  let min = array[0];
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      index = i
    }
  }
  array.splice(index, 1);
  return min;
}

function minOfTwo(firstSubarray, secondSubArray) {
  if (firstSubarray[0] < secondSubArray[0]) {
    return firstSubarray.shift()
  } else {
    return secondSubArray.shift()
  }
}

function merge(firstSubarray, secondSubArray) {
  let sorted = [];
  while (firstSubarray.length > 0 && secondSubArray.length > 0) {
    sorted.push(minOfTwo(firstSubarray, secondSubArray))
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

function mergeSort(array) {
  let mid = Math.floor(array.length / 2)
  let firstHalf = array.slice(0, mid)
  let secondHalf = array.slice(mid, array.length)

  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}
