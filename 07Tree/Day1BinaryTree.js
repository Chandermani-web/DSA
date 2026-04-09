// Tree nodes
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Build BST(Binary Search Tree)
function insert(root,val){
    if(!root) return new TreeNode(val);

    if(val < root.val){
        root.left = insert(root.left, val);
    } else {
        root.right = insert(root.right, val);
    }

    return root;
}


// Traversal
// DFS
function inorder(root){
    if(!root) return;

    inorder(root.left);
    console.log(root.val);
    inorder(root.right)
}

function preorder(root){
    if(!root) return;

    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

function postorder(root){
    if(!root) return;

    postorder(root.left);
    postorder(root.right);
    console.log(root.val);  
}

// BFS
function levelOrder(root){
    if(!root) return;

    let queue = [root];
    while(queue.length){
        let node = queue.shift();
        console.log(node.val);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}

// Height
function height(root){
    if(!root) return 0;

    let left = height(root.left);
    let right = height(root.right);

    return Math.max(left, right) + 1;
}

// Diameter
function diameter(root){
    let dia = 0;

    function heightCalc(node){
        if(!node) return 0;

        let left = heightCalc(node.left);
        let right = heightCalc(node.right);

        dia = Math.max(dia, left + right + 1);

        return Math.max(left, right) + 1;
    }

    heightCalc(root);
    return dia;
}

// check balanced
function isBalanced(root){
    function check(node){
        if(!node) return 0;

        let left =  check(node.left);
        let right =  check(node.right);

        if(left === -1 || right === -1) return -1;
        if(Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    }

    return check(root) !== -1;
}

// find leaf nodes
function findLeafNodes(root){
    if(!root) return;

    if(!root.left && !root.right){
        console.log(root.val);
        return
    }

    findLeafNodes(root.left);
    findLeafNodes(root.right);
}

// find parent
function findParent(root, target){
    if(!root) return null;

    if(
        (root.left && root.left.val === target) ||
        (root.right && root.right.val === target)
    ) {
        return root.val;
    }

    let left = findParent(root.left, target);
    if(left) return left;

    return findParent(root.right, target);
}

// LCA (Longest Comon Ancestor)
function LCA(root, p, q){
    if(!root || root.val === p || root.val === q) return root;

    let left = LCA(root.left, p, q);
    let right = LCA(root.right, p, q);

    if(left && right) return root;

    return left ? left : right;
}

// 🌳 All Root-to-Leaf Paths
function allPaths(root, path = []){
    if(!root) return;

    path.push(root.val);

    if(!root.left && !root.right){
        console.log([...path]);
    }

    allPaths(root.left, path);
    allPaths(root.right, path);

    path.pop();
}

// Path Sum
function hasPathSum(root, target){
    if(!root) return false;

    if(!root.left && !root.right){
        return target === root.val;
    }
    
    let remaining = target - root.val;

    return hasPathSum(root.left, remaining) ||
           hasPathSum(root.right, remaining);
}

// Delete (BST)
function deleteNode(root, key){
    if(!root) return null;

    if(key < root.val){
        root.left = deleteNode(root.left, key);
    } else if(key >= root.val){
        root.right = deleteNode(root.right, key);
    } else {
        if(!root.left) return root.right;
        if(!root.right) return root.left;

        let min = findMin(root.right);
        root.val = min.val;
        root.right = deleteNode(root.right, min.val);
    }
}

function findMin(node){
    while(node.left){
        node = node.left;
    }
    return node;
}


// TESTING EVERYTHING

let root = null;
let values = [5,3,7,2,4,6,8];

values.forEach(val=>{
    root = insert(root,val);
});

console.log("Preorder");
preorder(root);

console.log("Inorder:");
inorder(root);

console.log("Postorder");
postorder(root);

console.log("Level Order:");
levelOrder(root);

console.log("Height: ", height(root));
console.log("Diameter: ", diameter(root));
console.log("Balanced: ", isBalanced(root));

console.log("Leaf Nodes:");
findLeafNodes(root);

console.log("Parent of 4: ", findParent(root, 4));

console.log("LCA of 2 and 4: ", LCA(root, 2, 4)?.val);

console.log("All Paths:");
allPaths(root);

console.log("Path Sum (target = 10)", hasPathSum(root, 10));