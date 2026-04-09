class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  // Depth First Search(DFS)
  // preorder traversal
  preorder(root) {
    let result = [];

    function dfs(node) {
      if (!node) return;

      result.push(node.val);
      dfs(node.left);
      dfs(node.right);
    }

    dfs(root);
    return result;
  }

  // inorder traversal
  inorder(root) {
    let result = [];

    function dfs(node) {
      if (!node) return;

      dfs(node.left);
      result.push(node.val);
      dfs(node.right);
    }

    dfs(root);
    return result;
  }

  // postorder traversal
  postorder(root) {
    let result = [];

    function dfs(node) {
      if (!node) return;

      dfs(node.left);
      dfs(node.right);
      result.push(node.val);
    }

    dfs(root);
    return result;
  }

  // Breadth First Search (BFS)
  // Level order traversal
  levelOrderTraversal(root) {
    let result = [];

    if (!root) return result;

    let queue = [root];

    while (queue.length) {
      let size = queue.length; // current level size
      let level = [];

      for (let i = 0; i < size; i++) {
        let node = queue.shift();

        level.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      result.push(level);
    }

    return result;
  }

  //   Height of the Tree
  height(root){
    if(!root) return 0;

    let left = this.height(root.left);
    let right = this.height(root.right);


    return Math.max(left, right) + 1;
  }

  count(root){
    if(!root) return 0;

    let left = this.count(root.left);
    let right = this.count(root.right);

    return left + right + 1;
  }

  // find the diameter of the root
  diameter(root){
    let dia = 0;

    function heightCalc(node){
      if(!node) return 0;

      let left = heightCalc(node.left);
      let right = heightCalc(node.right);

      dia = Math.max(dia, left + right);

      return Math.max(left, right) + 1;
    }

    heightCalc(root);
    return dia;
  }

  // Search 
  search(root,key){
    if(!root) return false;

    if(root.val === key) return true;

    return this.search(root.left, key) || this.search(root.right, key);
  }

  // Delete
  delete(root, key) {
    if (!root) return null;

    // single node case
    if (root.val === key && !root.left && !root.right) return null;

    let queue = [root];
    let target = null;
    let last = null;
    let parentOfLast = null;

    // Step 1: find target and last node
    while (queue.length > 0) {
      let curr = queue.shift();

      if (curr.val === key) {
        target = curr;
      }

      if (curr.left) {
        parentOfLast = curr;
        queue.push(curr.left);
      }

      if (curr.right) {
        parentOfLast = curr;
        queue.push(curr.right);
      }

      last = curr;
    }

    // Step 2: replace & delete
    if (target) {
      target.val = last.val;

      if (parentOfLast.right === last) {
        parentOfLast.right = null;
      } else {
        parentOfLast.left = null;
      }
    }

    return root;
  }

  // is tree isbalanced?
  isBalanced(root) {
    function height(node) {
      if (!node) return 0;

      let left = height(node.left);
      let right = height(node.right);

      if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
      }

      return Math.max(left, right) + 1;
    }

    return height(root) !== -1;
  }

}

// ================== Testing ======================

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("================================ Depth First Search ================================");
console.log("Preorder Traversal: ", root.preorder(root)); // preorder traversal
console.log("Inorder Traversal: ", root.inorder(root)); // inorder traversal
console.log("Postorder Traversal: ", root.postorder(root)); // postorder traversal
console.log("=====================================================================================");

console.log("================================ Breadth First Search ================================");
console.log("Level order traversal: ", root.levelOrderTraversal(root));
console.log("=====================================================================================");

console.log("================================ Height of the tree ================================");
console.log("Height of the tree: ", root.height(root));
console.log("=====================================================================================");

console.log("================================ Count of the tree ================================");
console.log("Count of the tree: ", root.count(root));
console.log("=====================================================================================");

console.log("================================ Diameter of the tree ================================");
console.log("Diameter of the tree: ", root.diameter(root));
console.log("=====================================================================================");

console.log("=============================== Search Node ================================");
console.log("Search element 4 in tree: ", root.search(root,4));
console.log("Search element 10 in tree: ", root.search(root,10));
console.log("=====================================================================================");

console.log("=============================== Delete element from the root ================================");
console.log("Delete node 4 in tree: ", root.delete(root,4));
console.log("=====================================================================================");