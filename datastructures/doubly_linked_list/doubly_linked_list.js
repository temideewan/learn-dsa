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

  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length -= 1;
    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let midpoint = Math.floor(this.length / 2);
    let counter = 0;
    let current = this.head;
    if (index <= midpoint) {
      while (counter != index) {
        counter++;
        current = current.next;
      }
    } else if (index > midpoint) {
      counter = this.length - 1;
      current = this.tail;
      while (counter != index) {
        counter--;
        current = current.prev;
      }
    }
    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index == 0) {
      return !!this.unshift(value);
    }
    if (index === this.length) {
      return !!this.push(value);
    }
    let prev = this.get(index - 1);
    if (prev != null) {
      let insertedNode = new Node(value);
      let afterNode = prev.next;
      insertedNode.prev = prev;
      insertedNode.next = afterNode;
      afterNode.prev = insertedNode;
      prev.next = insertedNode;
    }
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == this.length - 1) return !!this.pop();
    if (index == 0) return !!this.shift();

    let removedNode = this.get(index);
    let prevNode = removedNode.prev,
      nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length -= 1;
    return true;
  }
}

let myList = new Doubly_linked_list();
myList.push("temidayo");
myList.push("moyinoluwa");
myList.push("daniel");
