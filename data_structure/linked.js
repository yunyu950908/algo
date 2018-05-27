/**
 * Node 定义一个节点
 * @param element
 * @param prev
 * @param next
 * */
class Node {
  constructor(element, prev = null, next = null) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}

/**
 * Linked 双向链表
 *
 * 属性
 * head 表头
 * tail 表尾
 *
 * 方法
 * push
 * pop
 * shift
 * unshift
 * clear
 * display 显示当前链表中的元素
 * */
class Linked {
  constructor({ head = null, tail = null, size = 0 } = {}) {
    this.head = head || new Node('Head');
    this.tail = tail || this.head;
    this.size = size;
  }

  push(element) {
    const newNode = new Node(element);
    if (this.tail === this.head) { // 空表
      this.tail = newNode;
      this.tail.prev = this.head;
      this.head.next = this.tail;
    } else { // 非空表
      const tempTail = this.tail;
      this.tail = newNode;
      this.tail.prev = tempTail;
      tempTail.next = this.tail;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.tail === this.head) return null;
    const tempTail = this.tail;
    this.tail = tempTail.prev;
    this.tail.next = null;
    tempTail.prev = null;
    this.size--;
    return tempTail;
  }

  shift() {
    const targetNode = this.head.next;
    if (!targetNode) return null;
    if (targetNode === this.tail) {
      this.tail = this.head;
    } else {
      this.head.next.prev = this.head;
    }
    this.head.next = targetNode.next;
    targetNode.next = null;
    targetNode.prev = null;
    this.size--;
    return targetNode;
  }

  unshift(element) {
    const newNode = new Node(element, this.head, this.head.next);
    if (this.tail === this.head) {
      this.tail = newNode;
    } else {
      this.head.next.prev = newNode;
    }
    this.head.next = newNode;
    return newNode;
  }

  clear() {
    if (this.head.next) {
      this.head.next.prev = null;
      this.head.next = null;
      this.tail = this.head;
      this.size = 0;
    }
    return this;
  }

  display() {
    const result = new Array(this.size);
    let count = 0;
    let curNode = this.head;
    while (curNode.next !== null) {
      curNode = curNode.next;
      result[count++] = curNode.element;
    }
    console.log(result);
    return result;
  }
}

// const l = new Linked();

// l.push('first node');
// l.push('second node');
// l.push('third node');
// l.pop();
// l.shift();
// l.unshift('new node');
// l.unshift('first node');
// l.push('last node');
// l.clear();
// l.display();
// console.log(l);


module.exports = {
  Linked,
  Node,
};
