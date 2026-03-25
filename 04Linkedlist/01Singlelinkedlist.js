// creating a Node
class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

const list = new Node(10);
list.next = new Node(20);
list.next.next = new Node(30);
list.next.next.next = new Node(40);
list.next.next.next.next = new Node(50);

// print linked list
let temp = list;

while(temp !== null){
    process.stdout.write(temp.value + "");
    if(temp.next !== null) process.stdout.write(" -> ");
    temp = temp.next;
}

// length of the linkedlist

function length(head){
    let count = 0;
    
    let curr = head;
    
    while(curr !== null){
        count++;
        curr = curr.next;
    }

    return count;
}

console.log(`\nLength of the linked list: ${length(list)}`)


// search element in the single linked list

function searchNode(head,key){
    let curr = head;

    while(curr !== null){
        if(curr.value == key){
            return true;
        }
        curr = curr.next;
    }

    return false;
}

console.log(`Search element 10 in the Linkedlist from normal function: ${searchNode(list, 10)}`);
console.log(`Search element 12 in the Linkedlist from normal function: ${searchNode(list, 12)}\n`);

// search element in the single linked list

function searchNode2(head,key){
    if(head === null) return false;

    if(head.value == key) return true;

    return searchNode2(head.next, key);
}

console.log(`Search element 10 in the Linkedlist from recursion: ${searchNode2(list, 10)}`);
console.log(`Search element 12 in the Linkedlist from recursion: ${searchNode2(list, 12)}\n`);

// Delete any specific element from the linked list

function deleteNode(head, key){
    if(head == null) return null;

    if(head.value == key) return head.next;

    let curr = head;

    while(curr.next !== null){
        if(curr.next.value === key){
            curr.next = curr.next.next;
            return head;
        }
        curr = curr.next;
    }
    return head;
}
const d1 = deleteNode(list, 20);
console.log(d1);

// Delete the element from position

function deleteNodeByPosition(head, position){
    let temp = head;

    if(position == 1) return head.next;

    let prev = null;
    for(let i = 1; i < position; i++){
        prev = temp;
        temp = temp.next;
    }

    // delete the node at the position
    prev.next = temp.next;

    return head;
}

const d2 = deleteNodeByPosition(list, 2);
console.log(d2);