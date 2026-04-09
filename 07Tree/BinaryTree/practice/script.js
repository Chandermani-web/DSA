class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sum(root){
    if(!root) return 0;

    let left = sum(root.left);
    let right = sum(root.right);

    return left + right + root.val;
}

// ================== Testing ======================

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(`======================================= Sum =======================================`)
console.log(sum(root));