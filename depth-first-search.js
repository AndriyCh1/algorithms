class Node {
  constructor(name) {
    this.children = [];
    this.name = name;
  }

  addChild(name) {
    this.children.push(new Node(name));
  }

  // O(v + e) time
  depthFirstSearch(array = []) {
    array.push(this.name);

    for (const child of this.children) {
      child.depthFirstSearch(array);
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

// Perform a depth-first search on the tree
const result = root.depthFirstSearch();
console.log(result); // Output: ['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']
