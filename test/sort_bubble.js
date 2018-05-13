const assert = require('assert');

function genArr() {
  return Array.from(new Array(100), () => Math.random() * 100 >>> 0);
}

function swap(a, b, array) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return null;
}

function bubbleSrot(array) {
  // 为方便比较，拷贝一份副本
  const resultArr = [].concat(array);
  // 判断是否交换的 flag
  let swapped = false;
  // 最后一个未排序元素的下标
  let indexOfLastUnsortedElement = resultArr.length - 1;
  do {
    swapped = false;
    // i 的范围 [0, indexOfLastUnsortedElement - 1]
    for (let i = 0; i < indexOfLastUnsortedElement; i += 1) {
      // 如果当前项比后一项大，交换位置
      if (resultArr[i] > resultArr[i + 1]) {
        swap(i, i + 1, resultArr);
        swapped = true;
      }
    }
    // 内循环结束后最后一项为数组最大的元素，之后的内循环元素无需与之比较
    indexOfLastUnsortedElement -= 1;
  } while (swapped);
  return resultArr;
}

function bubbleSort2(array) {
  // 同样拷贝一份副本，为了后续对比方便
  const resultArr = [].concat(array);
  // 外循环，最多需要 n-1 次排完 n 个元素
  for (let i = 0; i < resultArr.length - 1; i += 1) {
    let isSwap = false;
    // 内循环，最多比较 n - 1 -i 次能得到一个最大的元素
    for (let j = 0; j < resultArr.length - 1 - i; j += 1) {
      if (resultArr[j] > resultArr[j + 1]) {
        swap(j, j + 1, resultArr);
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return resultArr;
}

function bubbleSort3(array) {
  const resultArr = [].concat(array); // 没错，又是没用的拷贝副本
  let len = resultArr.length;
  for (let i = 0; i < resultArr.length >> 1;) {
    let isSwap = false;
    // 最小的冒泡到最前面
    for (let j = len - 1; j > i; j -= 1) {
      if (resultArr[j] < resultArr[j - 1]) {
        swap(j, j - 1, resultArr);
        isSwap = true;
      }
    }
    if (!isSwap) break;
    isSwap = false;
    // 此时第 i 项已经排好，下一次正向冒泡游标向后移动一位
    i += 1;
    // 最大的冒泡到最后面
    for (let k = i; k < len - 1; k += 1) {
      if (resultArr[k] > resultArr[k + 1]) {
        swap(k, k + 1, resultArr);
        isSwap = true;
      }
    }
    if (!isSwap) break;
    // 此时第 len - 1 项已经排好，下一次负向冒泡起始游标向前移动一位
    len -= 1;
  }
  return resultArr;
}

function testSortFunc(sortFn) {
  for (let i = 0; i < 100; i += 1) {
    const newArr = genArr();
    const sortedArr = sortFn(newArr); // 自己的先排，因为自己的函数操作和返回拷贝的副本，原生 sort API 直接变原数组
    const chromeSort = newArr.sort((a, b) => a - b);
    assert.deepEqual(sortedArr, chromeSort);
  }
}

describe('bubbleSrot(array) 测试, 循环生成 100 组长度为 100，元素为随机 [0, 100) 的整数数组，与Chrome sort 的结果做比较', () => {
  it('正向 while ', () => {
    testSortFunc(bubbleSrot);
  });
  it('正向 for ', () => {
    testSortFunc(bubbleSort2);
  });
  it('正负双向 for ', () => {
    testSortFunc(bubbleSort3);
  });
});
