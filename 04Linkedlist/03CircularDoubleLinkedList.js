class Node{
    constructor(data){
        this.data = data,
        this.next = null,
        this.prev = null
    }
}; 

class ListNode{
    constructor(data) {
        const newNode = new Node(data);

        this.head = newNode;
        this.tail = newNode;

        this.head.next = this.head;
        this.head.prev = this.head;

        this.length = 1;
    }

    // insert at the end
    insertAtEnd(data){
        const newNode = new Node(data);

        newNode.prev = this.tail;
        newNode.next = this.head;
        
        this.tail.next = newNode;
        this.head.prev = newNode;

        this.tail = newNode;
        this.length++;
    }

     // ⭐ Print Forward
    printForward(){

        let temp = this.head;
        let result = "";

        do{
            result += temp.data + " ⇄ ";
            temp = temp.next;
        }while(temp !== this.head);

        console.log(result + "(back to head)");
    }

    // ⭐ Print Backward
    printBackward(){

        let temp = this.tail;
        let result = "";

        do{
            result += temp.data + " ⇄ ";
            temp = temp.prev;
        }while(temp !== this.tail);

        console.log(result + "(back to tail)");
    }
}

const list = new ListNode(0);

for(let i = 1; i < 30; i++){
    list.insertAtEnd(i);
}

list.printForward();
list.printBackward();