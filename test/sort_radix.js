function radixSort(array) {
  const queues = Array.from(new Array(10), () => []);
  const maxLen = Math.max.apply(null, array).toString().length;
  for (let i = 1; i <= maxLen; i++) {
    distribute(array, queues, i);
  }
  return array;
}

function distribute(array, queues, digit) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const strItem = item.toString();
    const digitItem = strItem[strItem.length - digit] || 0;
    queues[digitItem].push(item);
  }
  for (let i = 0; i < queues.length; i++) {
    const queue = queues[i];
    while (queue.length > 0) {
      array[count++] = queue.shift();
    }
  }
}

const { testSortFunc } = require('./sort_basic');

describe('radixSort(array) 测试', () => {
  it('基数排序测试...', () => {
    testSortFunc(radixSort);
  });
});