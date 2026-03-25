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

function deleteNodeByPosition(head, position){
    let temp = head;

    if(position == 1) return head.next;

    let prev = null;
    for(let i = 1; i < position; i++){
        prev = temp;
        console.log(`On iteration: ${i}, prev: ${JSON.stringify(prev)}`);
        temp = temp.next;
        console.log(`On iteration: ${i}, temp: ${JSON.stringify(temp)}`);
    }

    console.log(`\nbefore change the prev is ${JSON.stringify(prev)} and temp is ${temp}`)
    // delete the node at the position
    prev.next = temp.next;
    console.log(`\nafter change the prev is ${JSON.stringify(prev)} and temp is ${temp}`)

    return head;
}

const d2 = deleteNodeByPosition(list, 2);
console.log(d2);