
'use strict';

describe(‘Tree-intersaction’, ()=>{
  let tree1 = new Tree();
  tree1.root = new Node(10);
  tree1.root.left = new Node(11);
  tree1.root.right = new Node(12);
  tree1.root.left.left = new Node(13);
  tree1.root.left.right = new Node(14);
  tree1.root.right.left = new Node(15);
  tree1.root.right.right = new Node(16);
  let tree2 = new Tree();
  tree2.root = new Node(10);
  tree2.root.left = new Node(1);
  tree2.root.right = new Node(12);
  tree2.root.left.left = new Node(13);
  tree2.root.left.right = new Node(19);
  tree2.root.right.left = new Node(15);
  tree2.root.right.right = new Node(20);
  it(‘can return the keys’, ()=>{
    let result = tree_intersection(tree1, tree2)
    expect(result).toEqual([10,12,13,15])
  });
})
