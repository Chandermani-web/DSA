// Stack implementation in JavaScript using array
class stackUsingArray{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        if(this.isEmpty()) return "Stack is Empty";
        return this.stack.pop();
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }
}

const stack1 = new stackUsingArray();

stack1.push(1);
stack1.push(2);
stack1.push(3);

console.log("----------------Stack using Array----------------");
console.log("Peek:", stack1.peek()); // Output: 3
console.log("Popped:", stack1.pop());
console.log("Peek:", stack1.peek()); // Output: 2
console.log("Is Empty:", stack1.isEmpty()); // Output: false


// Stack implementation in JavaScript using linked list
class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class stackUsingLinkedList{
    constructor(){
        this.top = null;
    }

    push(value){
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(this.isEmpty()) return "Stack is Empty";
        const poppedNode = this.top;
        this.top = this.top.next;
        return poppedNode.data;
    }

    isEmpty(){
        return this.top === null;
    }

    peek(){
        if(this.isEmpty()) return "Stack is Empty";
        return this.top.data;
    }
}

const stack2 = new stackUsingLinkedList();

stack2.push(1);
stack2.push(2);
stack2.push(3);

console.log("----------------Stack using Linked List----------------");
console.log("Peek:", stack2.peek()); // Output: 3
console.log("Popped:", stack2.pop());
console.log("Peek:", stack2.peek());
console.log("Is Empty:", stack2.isEmpty());


// Stack implementation in JavaScript using a queues
class stackUsingQueue{
    constructor(){
        this.queue = [];
    }

    push(value){
        this.queue.push(value);
        for(let i = 0 ; i < this.queue.length - 1; i++){
            this.queue.push(this.queue.shift());
        }
    }
    
    pop(){
        if(this.isEmpty()) return "Stack is Empty";
        return this.queue.shift();
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    peek(){
        if(this.isEmpty()) return "Stack is Empty";
        return this.queue[0];
    }

    print(){
        console.log(this.queue);
    }
}

console.log("----------------Stack using Queue----------------");
const stack3 = new stackUsingQueue();
stack3.push(1);
stack3.push(2);
stack3.push(3);
console.log("Peek:", stack3.peek()); // Output: 3
console.log("Popped:", stack3.pop());
console.log("Peek:", stack3.peek());
console.log("Is Empty:", stack3.isEmpty());
stack3.print();


// Stack implementation in JavaScript using two queues

class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  // PUSH
  push(x) {
    // step 1
    this.q2.push(x);

    // step 2
    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }

    // step 3 (swap)
    [this.q1, this.q2] = [this.q2, this.q1];
  }

  // POP
  pop() {
    if (this.isEmpty()) return "Empty";
    return this.q1.shift();
  }

  // PEEK
  peek() {
    if (this.isEmpty()) return "Empty";
    return this.q1[0];
  }

  isEmpty() {
    return this.q1.length === 0;
  }
}