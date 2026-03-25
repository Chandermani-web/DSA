class Node{
    constructor(data){
        this.data = data,
        this.next = null
        this.prev = null,
    }
};

class ListNode{
    constructor(data){
        const newNode = new Node(data);

        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    insertAtStart(data){
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head.prev = newNode;

        this.head = newNode;
        this.length++;
    }

    insertAtEnd(data){
        const newNode = new Node(data);
        
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    insertAtPosition(data, index){
        if(index < 0 || index > this.length) return "Invalid Index";

        if(index === 0) return this.insertAtStart(data);
        if(index === this.length) return this.insertAtEnd(data);

        const newNode = new Node(data);
        let temp = this.head;

        for(let i = 0; i < index - 1; i++){
            temp = temp.next;
        }

        newNode.next = temp.next;
        newNode.prev = temp;

        temp.next.prev = newNode;
        temp.next = newNode;

        this.length++;
    }
}