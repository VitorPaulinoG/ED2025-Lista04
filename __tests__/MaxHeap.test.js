import MaxHeap from "../src/MaxHeap";

let heap;

beforeEach(() => {
  heap = new MaxHeap();
})

test("Deve começar vazia", () => {
  expect(heap.isEmpty()).toBe(true);
});

test("Deve inserir elementos obedecendo a prioridade", () => {
  heap.insert('A', 25);
  heap.insert('B', 21);
  heap.insert('C', 28);
  heap.insert('D', 16);
  heap.insert('E', 10);
  heap.insert('F', 15);
  heap.insert('G', 16);
  heap.insert('H', 3);

  expect(heap.peek().priority).toBe(28);
  expect(heap.toString()).toBe("+∞ 28 21 25 16 10 15 16 3");
})

test("Deve remover o elemento de menor prioridade", () => {
  heap.insert('A', 25);
  heap.insert('B', 21);
  heap.insert('C', 28);
  heap.insert('D', 16);
  heap.insert('E', 10);
  heap.insert('F', 15);
  heap.insert('G', 16);
  heap.insert('H', 3);

  let removed = heap.remove();
  expect(removed.priority).toBe(28);
  expect(heap.toString()).toBe("+∞ 25 21 16 16 10 15 3");
  heap.remove();
  expect(heap.toString()).toBe("+∞ 21 16 16 3 10 15");
})