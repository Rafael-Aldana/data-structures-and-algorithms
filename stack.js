'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // adds a new node with that value to the top of the stack with an O(1) time performance
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  // returns the value of the node from the top of the stack and removes refrence to that node
  pop() {
    let removedValue = this.top ? this.top.value : this.top;
    if (this.top) {
      this.top = this.top.next;
    }
    return removedValue;
  }

  peek() {
    return this.top.value;
  }

  isEmpty(){
    return this.top === null;
  }
}

class Queue {
constructor(){
  this.front = null;
  this.back = null;

}

enqueue(value) {
  let newNode = new Node(value);
  // if it has a front
  if(this.front){
    // get ready to get in line
    this.back.next = newNode;
  } else {
    // you are at the front of the line
    this.front = newNode
  }
  // either way buddy, you are the back of the line
  this.back = newNode
}
dequeue(){
  let removedValue = null;
  // if theres a front remove the front
  if(this.front) {
    removedValue = this.front.value;
    if(this.front === this.back){
      this.back = null;
    }
    this.front = this.front.next;
  }
  return removedValue;
}

}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(JSON.stringify(q))


export.modules = { Stack, Queue }
