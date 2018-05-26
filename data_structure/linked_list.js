/**
 * Node 定义一个节点
 * @param element
 * @param next
 * */
class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}


/**
 * LinkedList 定义一个链表
 *
 * 属性
 * head 表头
 * tail 表尾
 *
 * 方法
 * insert 插入一个节点
 * remove 删除一个节点
 * find 查找一个节点
 * push 表尾添加一个节点
 * shift 表头删除一个节点
 * display 显示当前链表中的元素
 * */
class LinkedList {
  constructor({ head = null, tail = null, size = 0 } = {}) {
    this.tail = tail;
    this.head = head || new Node(null, this.tail); // 表头的 element 始终占 null
    this.size = size;
  }

  push(element) {
    const newNode = new Node(element, null);
    if (!this.tail) { // 空表
      this.tail = newNode;
      this.head.next = this.tail;
    } else { // 非空表
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this.size;
  }

  shift() {
    const targetNode = this.head.next;
    if (!targetNode) return null;
    this.head.next = targetNode.next;
    targetNode.next = null;
    this.size--;
    if (targetNode === this.tail) this.tail = null;
    return targetNode;
  }

  insert(element, after) {
    const newNode = new Node(element, null);
    const afterEle = this.find(after);
    if (!afterEle) return false;
    newNode.next = afterEle.next;
    afterEle.next = newNode;
    this.size++;
    return true;
  }

  remove(element) {
    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.element === element) {
        const prevNode = curNode;
        const targetNode = curNode.next;
        prevNode.next = targetNode.next;
        targetNode.next = null;
        this.size--;
      }
      curNode = curNode.next;
    }
  }

  find(element) {
    let curNode = this.head;
    while (curNode.next !== null) {
      curNode = curNode.next;
      if (curNode.element === element) return curNode;
    }
    return null;
  }

  display() {
    let curNode = this.head;
    while (curNode.next !== null) {
      curNode = curNode.next;
      console.log(curNode);
    }
  }
}

function competingTest() {
  console.time('generate a big Array from new Array');
  const newArr = new Array(1e7);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = i;
  }
  console.timeEnd('generate a big Array from new Array');

  console.time('generate a big Array form Array.prototype.push');
  const newArr2 = [];
  for (let i = 0; i < 1e7; i++) {
    newArr2.push(i);
  }
  console.timeEnd('generate a big Array form Array.prototype.push');

  console.time('operate a big Array');
  for (let i = 0; i < 100; i++) {
    newArr.shift();
  }
  console.timeEnd('operate a big Array');

  console.time('generate a big LinkedList');
  const newLinkedList = new LinkedList();
  for (let i = 0; i < 1e7; i++) {
    newLinkedList.push(i);
  }
  console.timeEnd('generate a big LinkedList');

  console.time('operate a big LinkedList');
  for (let i = 0; i < 100; i++) {
    newLinkedList.shift();
  }
  console.timeEnd('operate a big LinkedList');
}

competingTest();

module.exports = {
  LinkedList,
};
