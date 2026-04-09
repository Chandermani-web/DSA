class TreeNode{
    constructor(val){
        this.val = val,
        this.left = null,
        this.right = null
    };
};


var verticalTraversal = function(root) {
    let map = new Map(); // col -> [[row, val]]
    let queue = [[root, 0, 0]]; // node, row, col

    while(queue.length){
        let [node, row, col] = queue.shift();

        if(!map.has(col)) map.set(col, []);
        map.get(col).push([row, node.val]);

        if(node.left) queue.push([node.left, row + 1, col - 1]);
        if(node.right) queue.push([node.right, row + 1, col + 1]);
    }

    // sort columns
    let sortedCols = [...map.keys()].sort((a,b) => a-b);

    let result = [];

    for(let col of sortedCols){
        let arr = map.get(col);

        // sort by row, then value
        arr.sort((a,b) => {
            if(a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
        });

        result.push(arr.map(x => x[1]));
    }

    return result;
};

// ==============================================================
//                           Testing
// ==============================================================

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(verticalTraversal(root));