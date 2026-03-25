class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
};

class List {
    constructor(data){
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1;
    }

    appendNode(data){
        const newNode = new Node(data); 
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    deleteNode(value){

        // case 1: delete head
        if(this.head.value === value){
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current = this.head;

        while(current.next !== null){
            
            if(current.next.value === value){
                // if deleting tail
                if(current.next === this.tail){
                    this.tail = current
                }
                current.next = current.next.next;
                this.length--;
                return;
            }
            
            current = current.next;
        }
    }

    travesingNode(){
        let current = this.head;
        let result = " ";
        while(current !== null){
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    insertAtBeginning(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        console.log(`newNode: ${JSON.stringify(newNode)}`);
        this.head = newNode;
        this.length++;
    }

    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;

        this.tail = this.head;

        console.log(`\n-------Reverse the linkedlist---------`);
        // console.log(`${JSON.stringify(this.head)}\n${JSON.stringify(this.tail)}\n${this.length}`);

        while(current !== null){
            next = current.next;   // 1. save next
            current.next = prev;   // 2. reverse pointer

            prev = current;        // 3. move prev
            current = next;        // 4. move current
            
            // console.log(`\nNEXT: ${JSON.stringify(next)}\ncurrent: ${JSON.stringify(current)}\nprev: ${JSON.stringify(prev)} \n`)
        }

        this.head = prev;
    }
}

// creating an object of the List class
let list = new List(10);

// Append nodes
list.appendNode(20);
list.appendNode(30);    
list.appendNode(40);
list.appendNode(50);

// deleting node from the linkedlist
// list.deleteNode(30);

// list.insertAtBeginning(5);

list.reverse();

// Travesal / Print function
list.travesingNode();

console.log(list);