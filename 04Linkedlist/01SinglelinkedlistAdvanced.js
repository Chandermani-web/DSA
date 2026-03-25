class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class List{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    insertAtEnd(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    insertAtStart(value){
        const newNode = new Node(value);
        let current = this.head;
        this.head = newNode;
        this.head.next = current;
        this.length++;
        
    }

    print(){
        while(this.head !== null){
            process.stdout.write(this.head.data + "");
            if(this.head.next !== null) process.stdout.write(" -> ");
            this.head = this.head.next;
        }
    }
}

// create an object of List
const list = new List(1);

// insert at the end
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(4);

// insert at the start

list.insertAtStart(0);

// Print
list.print();