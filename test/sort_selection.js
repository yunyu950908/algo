const { swap, testSortFunc } = require('./sort_basic');

function selectionSort(array) {
  // 外循环 n - 1 次操作排完 n 个元素
  for (let i = 0; i < array.length - 1; i++) {
    let minimum = i; // 记录下标
    for (let j = i; j < array.length; j++) {
      // 内循环遍历其他元素，替换正确的最小值下标
      if (array[j] < array[minimum]) minimum = j;
    }
    // 内循环结束后交换 正确的最小值 到 最初记录的未排序元素的位置
    swap(i, minimum, array);
  }
  return array;
}

describe('selectionSort(array) 测试', () => {
  it('正向 for... ', () => {
    testSortFunc(selectionSort);
  });
});