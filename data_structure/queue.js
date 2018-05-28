const { Linked } = require('./linked');

/**
 * Queue
 *
 * 属性
 * head 队头
 * tail 队尾
 * size
 *
 * 方法
 * push
 * shift
 * clear
 * */

class Queue {
  constructor() {
    return new Linked();
  }
}

/**
 * 基数排序 0~99
 * */
function radix(array) {
  const queues = Array.from(new Array(10), () => new Queue());
  distribute(array, queues, 1);
  distribute(array, queues, 10);
  return array;
}

/**
 * distribute 辅助函数，分布队列
 * @param array 要排序的数组
 * @param queues 容纳数组元素的队列
 * @param digit 当前精度 默认：个位
 * */
function distribute(array, queues, digit = 1) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    digit === 1 ? queues[item % 10].push(item) : queues[Math.floor(item / 10)].push(item);
  }
  for (let i = 0; i < queues.length; i++) {
    const queue = queues[i];
    while (queue.size > 0) {
      array[count++] = queue.shift().element;
    }
  }
}

function genArr(count) {
  return Array.from(new Array(count), () => Math.random() * 100 >>> 0);
}

console.log(radix(genArr(10)));