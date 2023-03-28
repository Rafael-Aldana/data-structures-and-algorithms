'use strict';

const tree_intersection = (root1, root2) => {
  let table = new HashTable();
  let result = []// storing the key
  helper(root1, root2);
  for (let i = 0; i < table.length; i++) {
    result.push(table[i]);
  }
  return result;
}

const helper = (root1Val, root2val) => {
  if (root1val === root2Val) {
    table.set(root1Val, root2Val);
  }
  helper(root1val.left, root2val.left);
  helper(root1val.right, root2val.right);

};
