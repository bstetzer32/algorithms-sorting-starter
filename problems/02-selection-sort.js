// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  // your code here
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function selectionSort(list) {
  // your code here
  for (let i = 0; i < list.length; i++) {
    let swapped = false;
    let original = list[i];
    let smallest = original;
    let smallestIdx = 0;
    for (let j = i + 1; j < list.length; j++) {
      const el = list[j];
      if (el < smallest) {
        smallest = el
        swapped = true
        smallestIdx = j
      }
    }
    if (swapped) {
      swap(list, i, smallestIdx)
    }
  }
  return list
}

module.exports = {
  selectionSort,
  swap
};
