/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
};

class ListNode{
    constructor(data) {
        const newNode = new Node(data);

        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    
    insertAtEnd(data){
        const newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
}

const head = new ListNode(1);
head.insertAtEnd(1)
head.insertAtEnd(2)
head.insertAtEnd(2)
head.insertAtEnd(3)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    if(head === null) return null;

    let current = head;

    while(current && current.next){

        if(current.data === current.next.data){
            // remove duplicate node
            current.next = current.next.next;
        }
        else{
            current = current.next;
        }
    }

    return head;
};


const result = deleteDuplicates(head);

function printList(head){
    let current = head;
    let result = "";

    while(current){
        result += current.data;
        if(current.next) result += " -> ";
        current = current.next;
    }

    console.log(result);
}

printList(result);