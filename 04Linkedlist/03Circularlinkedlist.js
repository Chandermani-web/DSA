class Node{
    constructor(data) {
        this.data = data,
        this.next = null
    }
};

class ListNode {

    constructor(data){
        const newNode = new Node(data);

        this.head = newNode;
        this.tail = newNode;

        this.tail.next = this.head; // circular link
        this.length = 1;
    }

    // Insert At End
    insertAtEnd(data){

        const newNode = new Node(data);

        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.next = this.head;

        this.length++;
    }

    // Print List
    print(){

        let temp = this.head;
        let result = "";

        do{
            result += temp.data + " -> ";
            temp = temp.next;
        } while(temp !== this.head);

        console.log(result + "(back to head)");
    }
}

const list1 = new ListNode(0);
for(let i = 1; i < 200; i++){
    list1.insertAtEnd(i);
}

list1.print();