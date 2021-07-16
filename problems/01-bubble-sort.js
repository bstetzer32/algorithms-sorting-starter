// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  // your code here
  let repeat = true;
  while (repeat) {
    let swapped = false
    for (let i = 0; i < array.length -1; i++) {
      const el1 = array[i];
      const el2 = array[i +1];
      if (el1 > el2) {
        swap(array, i, i + 1)
        swapped = true
      }
      
    }
    if (!swapped) {
      repeat = false
    }
  }
  return array
}

module.exports = {
  bubbleSort,
  swap
};
