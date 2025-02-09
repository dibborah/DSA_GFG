class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
    };

    printLL() {
        let curr = this.head;
        let result = '';
        while (curr != null) {
            result += curr.val + ' -> ';
            curr = curr.next;
        }
        console.log(result.slice(0, -4)); // Remove trailing ' -> '
    };

    search(key) {
        let curr = this.head;
        while (curr != null) {
            if (curr.val === key) {
                console.log(`${key}: Key found`);
                return;
            }
            curr = curr.next;
        }
        console.log(`${key}: Not found`);
    };

    length() {
        let curr = this.head;
        let count = 0;
        while (curr != null) {
            count++;
            curr = curr.next;
        }
        console.log(`Length of the LL is: ${count}`);
    };

    insertAtHead(ele) {
        const newNode = new Node(ele);
        newNode.next = this.head;
        this.head = newNode;
    };

    insertAtTail(ele) {
        if (this.head === null) {
            this.head = new Node(ele);
            return;
        }
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = new Node(ele);
    };

    insertAtPos(ele, pos) {
        const newNode = new Node(ele);

        if (pos === 1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let prev = null, curr = this.head, count = 1;

        while (count !== pos && curr != null) {
            prev = curr;
            curr = curr.next;
            count++;
        }

        if (curr === null) {
            console.log('Position out of bounds');
            return;
        }

        prev.next = newNode;
        newNode.next = curr;
    };
};

const list = new LinkedList();

list.insertAtHead(5);
list.insertAtTail(6);
list.insertAtTail(7);
list.insertAtTail(1);
list.insertAtTail(13);
list.insertAtHead(100);

// console.log('Initial List:');
// list.printLL();