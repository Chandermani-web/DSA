class Node {
    constructor(value) {
        this.data = value;
        this.prev = null;
        this.next = null;
    }
}

// Driver Code
// Create the first node (head of the list)
let head = new Node(10);

// Create and link the second node
head.next = new Node(20);
head.next.prev = head;

// Create and link the third node
head.next.next = new Node(30);
head.next.next.prev = head.next;

// Create and link the fourth node
head.next.next.next = new Node(40);
head.next.next.next.prev = head.next.next;

// Traverse the list forward and print elements
let temp = head;
let output = "";
while (temp !== null) {
    output += temp.data;
    if (temp.next !== null) {
        output += " <-> ";
    }
    temp = temp.next;
}

console.log(output);

// Delete node in the linked link

function deleteNode(head, key){
    if(head == null) return false;

    if(head.data === key){
        head = head.next;
        if(head != null){
            head.prev = null
        }
        return head;
    }

    let curr = head;

    while(curr !== null){
        if(curr.data === key){
            if(curr.prev !== null){
                curr.prev.next = curr.next;
            }
            if(curr.next !== null){
                curr.next.prev = curr.prev
            }

            break;
        }
        curr = curr.next;
    }

    return head;
}

let d1 = deleteNode(head, 30)
console.log(d1);