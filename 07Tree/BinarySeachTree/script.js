/**
 * Class for creating a node, left and right root values for tree;
 * @param val
 * @constructor
 */
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    };
};

/**
 * Create a Node in the Tree
 * @param {*} root 
 * @param {*} val 
 * @returns root
 */
function insert(root, val){
    if(!root) return new TreeNode(val);

    if(val < root.val){
        root.left = insert(root.left, val);
    } else {
        root.right = insert(root.right, val);
    };

    return root;
};

/**
 * Traversal in the tree 
 * 1. DFS(Preorder, inorder, postorder)
 * 2. BFS(level order traversal)
 */

// DFS(Depth First Search)
// 1. preorder Traversal
function preorder(root){
    let result = [];

    if(!root) return result;

    function dfs(node){
        if(!node) return;

        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return result;
}

// 2. Inorder Traversal
function inorder(root){
    let result = [];

    if(!root) return result;

    function dfs(node){
        if(!node) return;

        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return result;
}

// 3. Postorder Traversal
function postorder(root){
    let result = [];

    if(!root) return result;

    function dfs(node){
        if(!node) return;

        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }
    dfs(root);
    return result;
}

// BFS(Breadth First Search)
// Level Order Traversal
function levelOrderTraversal(root){
    let result = [];
    
    if(!root) return result;

    let queue = [root];

    while(queue.length > 0){
        let size = queue.length;
        let level = [];

        for(let i = 0; i < size; i++){
            let node = queue.shift()
            level.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
}

// Height of the tree
function height(root){
    if(!root) return 0;

    let left = height(root.left);
    let right = height(root.right);

    return Math.max(left, right) + 1;
}

// Search of the tree
function search(root, key){
    if(!root) return false;

    if(root.val ===  key) return true;

    if(root.val < key){
        return search(root.right, key);
    } else {
        return search(root.left, key);
    }
};

// Delete
function Delete(root, target){
    if(!root) return null;

    if(target < root.val){
        root.left = Delete(root.left, target);
    } else if(target > root.val){
        root.right = Delete(root.right, target);
    } else {
        
    }
}

// ================================== Testing =======================================
let root = null;
let values = [8,3,1,6,4,7,10,14,13,15,16];

values.forEach(val=>{
    root = insert(root, val);
});

// ================================== Logging ===========================================

// Traveral 
// Depth First Search(DFS)
console.log("Preorder Traversal: ", preorder(root));
console.log("Inorder Traversal: ", inorder(root));
console.log("Postorder Traversal: ", postorder(root));

// Breadth First Search(BFS)
console.log("Level Order Traversal: ", levelOrderTraversal(root));

// Height 
console.log("Height of the tree: ", height(root));

// Search
console.log("Search Value 2:", search(root, 2));
console.log("Search Value 3:", search(root, 3));
console.log("Search Value 41:", search(root, 41));

// Deletion
console.log("Delete value 3: ", Delete(root, 3));