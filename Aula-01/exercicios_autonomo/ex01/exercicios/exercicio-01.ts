/* Exercício 1 — Contador visual de tarefas */
//1. Cria uma variável `count` do tipo number fora da função.
//2. Cria uma função que incrementa `count` e atualiza a div com innerHTML.
//3. Chama a função sempre que necessário (ex: botão de adicionar).
const outputDiv_1 = document.querySelector("#output-1") as HTMLDivElement;
const btnCount = document.querySelector("#btnCount") as HTMLButtonElement;
let count: number = 0;

export default function exercicio_01() {
  outputDiv_1.innerHTML = `Tarefas: ${count}`;
  btnCount.addEventListener("click", contarTarefas);
}

function contarTarefas(): void {
  count += 1;
  outputDiv_1.innerHTML = `Tarefas: ${count}`;
}
