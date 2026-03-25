class Node{
    constructor(value){
        this.data = value,
        this.next = null
    }
};

class LinkedList{
    constructor(data){
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1;
    }

    insertAtEnd(data){
        const newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    print(){
        let current = this.head;
        let result = "";
        while(current !== null){
            result += current.data;
            if(current.next !== null) result += " -> ";
            current = current.next;
        }
        console.log(result);
    }
}

// list 1
const list1 = new LinkedList(1);
for(let i = 2; i < 10; i++){
    list1.insertAtEnd(i);
}

// list 2
const list2 = new LinkedList(2);
for(let i = 2; i < 10; i++){
    list2.insertAtEnd(i*2);
}

list1.print();
list2.print();

// Add Two Numbers

var addTwoNumbers = function(l1, l2) {
    let dummy = new Node(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.data : 0;
        let v2 = l2 ? l2.data : 0;

        let sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new Node(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};

let result = addTwoNumbers(list1.head, list2.head);

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