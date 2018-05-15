const { swap, testSortFunc } = require('./sort_basic');

function insertionSort(array) {
  let lastSortedIndex = 0; // 最后一个已排序元素下标
  for (let i = 1; i < array.length; i++) { // 外循环遍历未排序元素
    const unsortedX = array[i]; // 存档当前外循环游标指定的未排序元素
    for (let j = lastSortedIndex; j >= 0; j--) { // 内循环遍历已排序元素
      if (array[j] > unsortedX) { // 如果已排序元素大于未排序元素，则交换位置
        swap(j, j + 1, array);
        array[j] = unsortedX;
      } else {
        break; // 否则代表已被交换到相对正确的位置，退出本轮内循环
      }
    }
    lastSortedIndex++; // 最后一个已排序元素下标 + 1
  }
  return array;
}

describe('insertionSort(array) 测试,', () => {
  it('负向 for... ', () => {
    testSortFunc(insertionSort);
  });
});
