// node that has data and reference to next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
  }
  push(val) {
    // special condition
    // if it's inserting at the tail, check if the head is null
    // that means it's the first element in the list. Set both head and tail to that node.
    /// Else
    // set the current tail's next to that node to insert
    // then set the tail of the SinglyLinkedList to that node too
    let currentNode = new Node(val);
    if (!this.head) {
      this.head = currentNode;
      this.tail = currentNode;
    } else {
      this.tail.next = currentNode;
      this.tail = currentNode;
    }

    this.length += 1;

    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    if (this.length === 0) {
      this.tail = null;
    }

    this.length -= 1;

    return current;
  }

  unshift(value) {
    let newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (typeof index !== "number") return null;
    if (index < 0 || index >= this.length) return null;
    let currentCounter = 0;
    let current = this.head;
    while (current) {
      if (currentCounter == index) {
        return current;
      }
      currentCounter++;
      current = current.next;
    }
    return null;
  }

  set(index, value) {
    let current = this.get(index);
    if (current) {
      current.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    let thisNode = new Node(value);
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(value);
    }
    if (index === this.length) {
      return !!this.push(value);
    }
    let prev = this.get(index - 1);
    thisNode.next = prev.next;
    prev.next = thisNode;
    this.length += 1;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) {
      return !!this.pop(index);
    }
    if (index === 0) {
      return !!this.shift();
    }
    let prevNode = this.get(index - 1);
    let removed = prev.next;
    prevNode.next = removed.next;
    this.length -= 1;
    return true;
  }

  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++){
      // these lines deal with actual reversal
      next = node.next;
      node.next = prev;
      //  these lines deal with traversing down the list
      prev = node;
      node = next;
    }
    // [ 1  , 2  ,  3  ,  4  ,  5  ];
                // node  next
          // prev  node
    // 2 ->  1 -> null
  }

  print(){
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.val);
      current = current.next
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("you");
list.push("Now");
list.push("bye");

console.log(list.length);
list.print();
list.reverse();
list.print();
