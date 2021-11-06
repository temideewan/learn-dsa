class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class Doubly_linked_list {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentTail = this.tail;

      this.tail = currentTail.prev;
      currentTail.prev = null;
      this.tail.next = null;
      this.length -= 1;
    }

    return currentTail;
  }
}
