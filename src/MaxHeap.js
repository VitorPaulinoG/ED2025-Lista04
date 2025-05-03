import { HeapNode } from "./l4q1";

export default class MaxHeap {
  constructor(capacity = 10) {
    this.capacity = capacity + 1;
    this.size = 0;
    this.heap = [];
    this.heap[0] = new HeapNode(null, Number.POSITIVE_INFINITY);
  }

  insert(element, priority) {
    if(this.isFull()) throw Error("Heap Overflow");

    this.size++;
    this.heap[this.size] = new HeapNode(element, priority);
    let current = this.size;
    let parent = Math.floor(current / 2);
    while(this.heap[current].priority > this.heap[parent].priority) {
      [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
      current = parent;
      parent = Math.floor(current / 2);
    } 
  }

  remove() {
    if(this.isEmpty()) throw Error("Heap Overflow");

    let removed = this.peek();
    this.heap[1] = this.heap[this.size];
    this.size--;
    let current = 1;
    while(true) {
      let left = 2 * current;
      let right = left + 1;
      let greater = current;
      if (left <= this.size && this.heap[greater].priority < this.heap[left].priority) {
        greater = left;
      }

      if (right <= this.size && this.heap[greater].priority < this.heap[right].priority) {
        greater = right;
      }

      if(greater === current) break;

      [this.heap[current], this.heap[greater]] = [this.heap[greater], this.heap[current]];
      current = greater;
    }
    return removed;
  }

  peek() {
    return this.heap[1];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity - 1;
  }

  toString() {
    let result = "+∞ ";
    for(let i = 1; i <= this.size; i++) {
      result += this.heap[i].priority + " ";
    }
    return result.trim();
  }
}