'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k).fill(null);
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }
}

// binary tree
class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const results = [];

    const traverse = (node) => {
      results.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);

    return results;
  }

  inOrder() {
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      console.log(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
  }

  postOrder() {
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      console.log(node.value);
    };
    traverse(this.root);
  }
}

let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

// tree.inOrder();
// tree.postOrder();
const results = tree.preOrder();
console.log('results:', results);

module.exports = { Node, Tree };


