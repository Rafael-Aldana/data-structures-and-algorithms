'use strict';

// class LinkedList {

// }

// const LinkedList = require('../index');

//   describe('linked list', () => {
//     it('should instatiate an empty linked list', () => {
//       const linked = new LinkedList();

//       expect(linked.head).toBeNull();
//     });
//   });

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  kthFromEnd(k) {
    let distanceToEnd = this.length - 1;
    let current = this.head;
    if(k > distanceToEnd) {
      return `List.legth===${this.length}, maxk===${distanceToEnd}`;
    }
    while (distanceToEnd > k ) {
      current = current.next;
      distanceToEnd--;
    } return current.value;
  };






  insert(value) {
    const oldHead = this.head;
    this.head = new Node(value,);
    // this.head = new Node(value, this.head);
    this.head.next = oldHead;
  }
  toString() {
    let current = this.head;
    let text = '';
    while (current) {
      // do something in here
      text += `{ ${current.value} } -> `;
      // move to next node
      current = current.next;
    }
    // return '{apple} -> {banana} -> NULL';
    return text + 'NULL';

  }
}

const ziplists = (list1, list2) => {
  let currentList1 = list1.head;
  let currentList2 = list2.head;
  let linkList3 = new LinkedList();
  while(currentList1 || currentList2) {
    if(currentList1) {
      linkList3.append(currentList1.value);
      currentList1 = currentList1.next;
    }
    if (currentList2) {
      linkList3.append(currentList2.value);
      currentList2 = currentList2.next;
    }
  }
  return linkList3;
};

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
