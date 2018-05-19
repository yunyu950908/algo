const { testSortFunc } = require('./sort_basic');

function mergeSort(array) {
  const length = array.length;
  if (length === 1) return array; // 只剩一项，直接返回
  const mid = length >> 1; // 二分
  const left = array.slice(0, mid); // 前半段数组
  const right = array.slice(mid); // 后半段数组
  return merge(mergeSort(left), mergeSort(right)); // 递归调用
}

function merge(leftArray, rightArray) {
  // 申请空间长度为两段数组总长
  const result = new Array(leftArray.length + rightArray.length);
  let l = 0, r = 0; // 两段数组的索引
  // 从小到大的排序
  while (l < leftArray.length && r < rightArray.length) {
    if (leftArray[l] <= rightArray[r]) {
      result[l + r] = leftArray[l++];
    } else {
      result[l + r] = rightArray[r++];
    }
  }
  while (l < leftArray.length) {
    result[l + r] = leftArray[l++];
  }
  while (r < rightArray.length) {
    result[l + r] = rightArray[r++];
  }
  return result;
}

describe('mergeSort(array) 测试', () => {
  it('归并排序测试...', () => {
    testSortFunc(mergeSort);
  });
});