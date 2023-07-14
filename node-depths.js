class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Create nodes for the binary tree
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

// Connect the nodes to form a binary tree
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
// ---------------------------------------

// O(n) time
function findNodeDepthUsingStack(root) {
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const nodeInfo = stack.pop();
    const { node, depth } = nodeInfo;

    if (node === null) {
      continue;
    }

    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfDepths;
}

// O(n) time
function findNodeDepthRecursive(root, depth = 0) {
  if (root === null) {
    return 0;
  }

  return (
    depth +
    findNodeDepthRecursive(root.left, depth + 1) +
    findNodeDepthRecursive(root.right, depth + 1)
  );
}

const result1 = findNodeDepthUsingStack(root);
const result2 = findNodeDepthRecursive(root);
console.log(result1);
console.log(result2);
