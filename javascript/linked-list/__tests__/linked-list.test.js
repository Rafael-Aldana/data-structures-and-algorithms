'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('should insert a node at the beginning', () => {
    const linked = new LinkedList();
    linked.insert('apple');

    expect(linked.head.value).toEqual('apple');
    expect(linked.head.next).toBeNull();
  })
  it('should insert at the beggining of populated linked list', () => {
    const linked = new LinkedList();
    insert(linked, 'apple');
    linked.insert('banana');

    expect(linked.head.value).toEqual('banana');
    expect(linked.head.next.value).toEqual('apple');
    expect(linked.head.next.next).toBeNull();
  })
  it('should display a string properly', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    const linkedString = linked.toString();

    expect(linkedString).toEqual('{apple} -> {banana} -> NULL');
  })

});

