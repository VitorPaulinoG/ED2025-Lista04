import sorteio from "../src/l4q4";


test("Deve encontrar apenas vencedor de sena", () => {
  let sorteados = [2, 6, 10, 12, 20, 30];
  let apostas = [
    [1, 7, 9, 10, 11, 15, 16, 20, 24, 26, 30, 35, 40, 42, 46],
    [5, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
  ];
  let result = sorteio(sorteados, apostas);
  expect(result.sena.toString()).toBe("{element: 3, priority: 6}");
  expect(result.quina).toBeNull();
})

test("Deve encontrar apenas vencedor de quina", () => {
  let sorteados = [25, 30, 35, 40, 45, 52];
  let apostas = [
    [1, 7, 9, 10, 11, 15, 16, 20, 24, 26, 30, 35, 40, 42, 46],
    [5, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
  ];
  let result = sorteio(sorteados, apostas);
  expect(result.sena).toBeNull();
  expect(result.quina.toString()).toBe("{element: 1, priority: 5}");
})