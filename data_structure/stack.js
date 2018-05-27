const { Linked } = require('./linked');

/**
 * Stack
 *
 * 方法
 * push
 * pop
 * */
class Stack {
  constructor() {
    return new Linked();
  }
}

// 回文测试
function reverse(str) {
  const stack = new Stack();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    result += stack.pop().element;
  }
  return result;
}

const str1 = 'hello world';
console.log(`original string: ${str1}`);
console.log(`reserve string: ${reverse(str1)}`);

// 递归测试
function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

console.log(`factorial: ${factorial(5)}`);

function fact(n) {
  const stack = new Stack();
  while (n > 1) {
    stack.push(n--);
  }
  let result = 1;
  while (stack.size > 0) {
    result *= stack.pop().element;
  }
  return result;
}

console.log(`stack factorial: ${fact(5)}`);

// 括号匹配测试
function checkBrace(target) {
  const result = {
    left: [],
    right: [],
  };
  const stack = new Stack();
  for (let i = 0; i < target.length; i++) {
    if (target[i] === '(') stack.push(i);
    if (target[i] === ')') {
      const flag = stack.pop();
      if (!flag) result.right.push(i);
    }
  }
  let curNode = stack.head;
  while (curNode.next) {
    curNode = curNode.next;
    result.left.push(curNode.element);
  }
  return result;
}

console.log(checkBrace('(2.3 + 23) / (12 + (3.14159×0.24)'));
console.log(checkBrace('(2.3 + 23) / (12 + (3.14159×0.24))))'));
console.log(checkBrace('(2.3 + 23) / (((((12 + (3.14159×0.24))))'));


/**
 现实生活中栈的一个例子是佩兹糖果盒。想象一下你有一盒佩兹糖果，里面塞满了红
 色、黄色和白色的糖果，但是你不喜欢黄色的糖果。使用栈（有可能用到多个栈）写一
 段程序，在不改变盒内其他糖果叠放顺序的基础上，将黄色糖果移出。
 * */

function rmCandy(candyStack, rmTarget) {
  logCandies(candyStack, 'original candies: ');
  const tempStack = new Stack();
  while (candyStack.tail !== candyStack.head) {
    const curNode = candyStack.pop();
    if (curNode.element !== rmTarget) {
      tempStack.push(curNode.element);
    }
  }
  while (tempStack.tail !== tempStack.head) {
    const curNode = tempStack.pop();
    candyStack.push(curNode.element);
  }
  logCandies(candyStack, 'result candies: ');
  return candyStack;
}

function logCandies(candyStack, desc = '') {
  const result = [];
  let curNode = candyStack.head;
  while (curNode.next) {
    curNode = curNode.next;
    result.push(curNode.element);
  }
  console.log(`${desc}${JSON.stringify(result)}`);
  return result;
}

const candies = new Stack();
for (let i = 0; i < 10; i++) {
  const r = Math.random();
  if (r < 0.333) {
    candies.push('red');
  } else if (r < 0.666) {
    candies.push('white');
  } else {
    candies.push('yellow');
  }
}

rmCandy(candies, 'yellow');

