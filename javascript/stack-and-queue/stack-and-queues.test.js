'use strict';

const { Stack, Queue } = require('./');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);
  });
  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

  });
  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    let poppedValue = stack.pop();
    expect(poppedValue).toEqual(3);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();

  });
});

describe('Queue Test', () => {
  it('can enqueue and dequeue', () => {
    let q = new Queue();
    q.enqueue(1);
    expect(q.front.value).toEqual(1);
    expect(q.back.value).toEqual(1);

    q.enqueue(2);
    expect(q.front.next.value).toEqual(2);
    expect(q.back.value).toEqual(2);

    q.enqueue(3);
    expect(q.front.next.next.value).toEqual(3);
    expect(q.back.value).toEqual(3);

    q.dequeue();
    expect(q.front.value).toEqual(2);
    expect(q.back.value).toEqual(3);

    q.dequeue();
    expect(q.front.value).toEqual(3);
    expect(q.back.value).toEqual(3);

    q.dequeue();
    expect(q.front).toBeNull();
    expect(q.back).toBeNull();
  });
});


