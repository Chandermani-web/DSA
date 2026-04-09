    class TreeNode{
        constructor(val){
            this.val = val;
            this.left = null;
            this.right = null;
        };
    };

    function LCA(root, p, q){
        if(!root || root === p || root === q) return root;

        let left = LCA(root.left, p, q);
        let right = LCA(root.right, p, q);

        if(left && right){
            return root;
        } else if(left){
            return left;
        } else {
            return right;
        }
    }

    // ======================= Testing =========================

    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);

    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    // ========================= Lowest Common Ancestor ======================
    console.log("====================== Lowest Common Ancestor =========================");
    let node6 = root.right.left;   // 6
    let node7 = root.right.right;  // 7
    let node2 = root.left;         // 2
    let node4 = root.left.left;    // 4

    console.log(LCA(root, node6, node7)?.val); // 3
    console.log(LCA(root, node2, node4)?.val); // 2
    console.log("========================================================================");