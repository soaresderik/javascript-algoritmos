const Queue = require("./fila_p102");

function hotPotatos(nameList, num) {
  let queue = new Queue();

  for (let i = 0; i < nameList.length; i++) queue.enqueue(nameList[i]);

  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) queue.enqueue(queue.dequeue());

    eliminated = queue.dequeue();
    console.log(eliminated + " Foi eliminado do Jogo.");
  }

  return queue.dequeue();
}

let names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
let winner = hotPotatos(names, 7);
console.log("O vencedor é: " + winner);
