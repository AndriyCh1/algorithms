class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
  }

  // O(v + e) time
  breadthFirstSearch() {
    const nodesQueue = [this];
    const array = [];

    while (nodesQueue.length !== 0) {
      const currentNode = nodesQueue.shift();
      array.push(currentNode.name);

      for (const child of currentNode.children) {
        nodesQueue.push(child);
      }
    }

    return array;
  }
}

const root = new Node("A");
root.addChild("B");
root.addChild("C");
root.addChild("D");
root.children[0].addChild("E");
root.children[0].addChild("F");
root.children[2].addChild("G");
root.children[2].addChild("H");
root.children[0].children[1].addChild("I");
root.children[0].children[1].addChild("J");
root.children[2].children[0].addChild("K");

// Perform a breadth-first search on the tree
const result = root.breadthFirstSearch();
console.log(result); // Output: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
