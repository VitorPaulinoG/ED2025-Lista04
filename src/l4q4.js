import MaxHeap from "./MaxHeap";


const sorteio = (sorteados, apostas) => {
  let heap = new MaxHeap(apostas.length);

  for(let i = 0; i < apostas.length; i++) {
    let count = 0;
    for(let num of apostas[i]) {
      for (let sorteado of sorteados) {
        if (num === sorteado) {
          count++;
        }
      }
    }
    heap.insert(i, count);
  }
  
  let first = heap.remove();
  let second = heap.remove();

  return {
    sena: first.priority === 6? first : null,
    quina: first.priority === 5? first : second.priority === 5? second : null
  }
} 
export default sorteio; 