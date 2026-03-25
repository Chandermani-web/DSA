// Queue implementation in JavaScript using an array
class queue{
    constructor(){
        this.q = [];
    }

    enqueue(value){
        this.q.push(value);
    }

    dequeue(){
        if(this.isEmpty()) return "Queue is Empty";
        return this.q.shift();
    }

    peek(){
        if(this.isEmpty()) return "Queue is Empty";
        return this.q[0];
    }

    isEmpty(){
        return this.q.length === 0;
    }
}

const queue1 = new queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
console.log("----------------Queue using Array----------------");
console.log("Peek:", queue1.peek()); // Output: 1
console.log("Dequeued:", queue1.dequeue());
console.log("Peek:", queue1.peek());
console.log("Is Empty:", queue1.isEmpty());

// Queue implementation in JavaScript using a linked list
class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class queueUsingLinkedList{
    constructor(){
        this.front = null;
        this.rear = null;
    }

    enqueue(value){
        const newNode = new Node(value);

        if(this.front === null){
            this.front = this.rear = newNode;
            return;
        }

        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue(){
        if(this.isEmpty()) return "Queue is Empty";

        const removed = this.front.data;
        this.front = this.front.next;

        if(this.front === null){
            this.rear = null;
        }

        return removed;
    }

    isEmpty(){
        return this.front === null;
    }

    peek(){
        if(this.isEmpty()) return "Queue is Empty";
        return this.front.data;
    }

    print(){
        let current = this.front;
        let result = "";
        while(current){
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

const queue2 = new queueUsingLinkedList();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
console.log("----------------Queue using Linked List----------------");
queue2.print();
console.log("Peek:", queue2.peek()); // Output: 1
console.log("Dequeued:", queue2.dequeue());
queue2.print();
console.log("Peek:", queue2.peek());
console.log("Dequeued:", queue2.dequeue());
console.log("Dequeued:", queue2.dequeue());
console.log("Is Empty:", queue2.isEmpty());


class QueueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x) {
        this.stack1.push(x);
    }

    dequeue() {
        if (this.isEmpty()) return null;

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    peek() {
        if (this.isEmpty()) return null;

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

const q = new QueueUsingStack();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.peek());    // 1
console.log(q.dequeue()); // 1
console.log(q.peek());    // 2
console.log(q.isEmpty()); // false