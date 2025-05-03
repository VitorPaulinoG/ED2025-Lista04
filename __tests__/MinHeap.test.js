import MinHeap from "../src/l4q1";

let heap;

beforeEach(() => {
  heap = new MinHeap();
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

  expect(heap.peek().priority).toBe(3);
  expect(heap.toString()).toBe("-∞ 3 10 15 16 21 28 16 25");
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
  expect(removed.priority).toBe(3);
  expect(heap.toString()).toBe("-∞ 10 16 15 25 21 28 16");
  heap.remove();
  expect(heap.toString()).toBe("-∞ 15 16 16 25 21 28");
})