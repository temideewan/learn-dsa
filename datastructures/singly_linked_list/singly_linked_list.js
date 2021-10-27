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
    let newTail  = current;

    while(current.next){
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

}

let list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("you");
list.push("Now");
list.push("bye");

console.log(list.length);
console.log(list);
list.pop();
list.pop();
console.log(list);

// var first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("How are ");
// first.next.next.next = new Node("you");
