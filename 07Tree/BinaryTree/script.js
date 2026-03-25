class BinarySearchTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addChild(data) {
        if (data === this.data) return;

        if (data < this.data) {
            if (this.left) {
                this.left.addChild(data);
            } else {
                this.left = new BinarySearchTreeNode(data);
            }
        } else {
            if (this.right) {
                this.right.addChild(data);
            } else {
                this.right = new BinarySearchTreeNode(data);
            }
        }
    }

    inOrderTraversal() {
        let elements = [];

        if (this.left) {
            elements = elements.concat(this.left.inOrderTraversal());
        }

        elements.push(this.data);

        if (this.right) {
            elements = elements.concat(this.right.inOrderTraversal());
        }

        return elements;
    }

    search(val) {
        if (this.data === val) return true;

        if (val < this.data) {
            return this.left ? this.left.search(val) : false;
        }

        if (val > this.data) {
            return this.right ? this.right.search(val) : false;
        }
    }

    findMin() {
        return this.left ? this.left.findMin() : this.data;
    }

    findMax() {
        return this.right ? this.right.findMax() : this.data;
    }

    delete(val) {
        if (val < this.data) {
            if (this.left) {
                this.left = this.left.delete(val);
            }
        } else if (val > this.data) {
            if (this.right) {
                this.right = this.right.delete(val);
            }
        } else {
            // Case 1 & 2
            if (!this.left) return this.right;
            if (!this.right) return this.left;

            // Case 3 (two children)
            let minVal = this.right.findMin();
            this.data = minVal;
            this.right = this.right.delete(minVal);
        }
        return this;
    }
}

// Build Tree
function buildTree(elements) {
    let root = new BinarySearchTreeNode(elements[0]);

    for (let i = 1; i < elements.length; i++) {
        root.addChild(elements[i]);
    }

    return root;
}

// ====== Testing ======

let numbers = [17, 4, 1, 20, 9, 23, 18, 34];
let numberTree = buildTree(numbers);

console.log("Inorder (sorted):", numberTree.inOrderTraversal());

console.log("Search 20:", numberTree.search(20));

console.log("Min:", numberTree.findMin());
console.log("Max:", numberTree.findMax());

numberTree.delete(20);
console.log("After deleting 20:", numberTree.inOrderTraversal());

// String Example
let countries = ["India","Pakistan","Germany","USA","China","India","UK","USA"];
let countryTree = buildTree(countries);

console.log("Countries sorted:", countryTree.inOrderTraversal());