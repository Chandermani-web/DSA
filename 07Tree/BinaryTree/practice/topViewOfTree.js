class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function topView(root){
    if(!root) return [];

    let map = new Map();
    let queue = [[root,0]];

    while(queue.length){
        let [node, hd] = queue.shift();
        
        if(!map.has(hd)){
            map.set(hd, node.val);
        }

        if(node.left) queue.push([node.left, hd - 1]);
        if(node.right) queue.push([node.right, hd + 1]);
    }

    // sort by hd
    let sortedKeys = [...map.keys()].sort((a,b)=>a-b);
    return sortedKeys.map(key => map.get(key)); 
}

// ================== Testing ======================

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(`======================================= Top View Of Tree =======================================`);
console.log("Top View of a tree: ", topView(root));
