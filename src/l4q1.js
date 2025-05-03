export class HeapNode {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  toString() {
    return `{element: ${this.element}, priority: ${this.priority}}`;
  }
}

export default class MinHeap {
  constructor(capacity = 10) {
    this.capacity = capacity + 1;
    this.size = 0;
    this.heap = [];
    this.heap[0] = new HeapNode(null, Number.NEGATIVE_INFINITY);
  }

  insert(element, priority) {
    if(this.isFull()) throw Error("Heap Overflow");

    this.size++;
    this.heap[this.size] = new HeapNode(element, priority);
    let current = this.size;
    let parent = Math.floor(current / 2);
    while(this.heap[current].priority < this.heap[parent].priority) {
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
      let smaller = current;
      if (left <= this.size && this.heap[smaller].priority > this.heap[left].priority) {
        smaller = left;
      }

      if (right <= this.size && this.heap[smaller].priority > this.heap[right].priority) {
        smaller = right;
      }

      if(smaller === current) break;

      [this.heap[current], this.heap[smaller]] = [this.heap[smaller], this.heap[current]];
      current = smaller;
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
    let result = "-∞ ";
    for(let i = 1; i <= this.size; i++) {
      result += this.heap[i].priority + " ";
    }
    return result.trim();
  }
}