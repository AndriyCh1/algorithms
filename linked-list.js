class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const tail = new Node(5);

root.next = node2;

node2.next = node3;
node2.prev = root;

node3.next = node4;
node3.prev = node2;

node4.next = tail;
node4.prev = node3;

tail.prev = node4;

// ------------------------

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;

      return;
    }

    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }

    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }

    this.remove(nodeToInsert);

    nodeToInsert.next = node;
    nodeToInsert.prev = node.prev;

    if (node.prev === this.head) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }

    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }

    this.remove(nodeToInsert);

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    if (node.prev === this.tail) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }

    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let currentPosition = 2;
    let node = this.head.next;

    while (node !== null && currentPosition === position) {
      node = node.next;
      currentPosition++;
    }

    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    let node = this.head;

    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;

      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    this._removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    let node = this.head;

    while (node !== null && node.value !== value) {
      node = node.next;
    }

    return node !== null;
  }

  _removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    node.prev = null;
    node.next = null;
  }

  printConsole() {
    let output = "";

    let node = this.head;

    while (node !== null) {
      output += node.value;

      if (node.next !== null) {
        output += " <--> ";
      }

      node = node.next;
    }

    console.log(output || "The list is empty");
  }
}

// ---------- Usage
const list = new DoublyLinkedList();
list.setHead(root);
list.printConsole();
list.removeNodesWithValue(2);
list.printConsole();
list.insertAfter(node4, node3);
list.printConsole();
// ------------------------
