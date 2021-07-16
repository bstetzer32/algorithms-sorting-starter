// Implement Insertion Sort

function insertionSort(list) {
  // your code here
  for (let i = 1; i < list.length; i++) {
    const ele1 = list[i];
    for (let j = i -1; j >= 0; j--) {
      const ele2 = list[j];
      console.log(ele1, ele2)
      if (ele1 < ele2) {
        list[j+1] = ele2;
        list[j] = ele1
      }
    }
  }
  return list
}

module.exports = {
  insertionSort
};
