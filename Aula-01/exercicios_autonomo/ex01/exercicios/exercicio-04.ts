

/* Exercício 4 — Estado da lista */
//1. Cria uma variável boolean indicando se existem tarefas.
//2. Seleciona uma div para mostrar a mensagem.
//3. Usa if para mostrar mensagem diferente dependendo do valor.
let temTarefas: boolean = true;
const outputDiv_3 = document.querySelector("#output-3") as HTMLDivElement;
if (temTarefas) {
  outputDiv_3.innerHTML = "Você tem tarefas pendentes.";
} else {
  outputDiv_3.innerHTML = "Nenhuma tarefa pendente. Bom trabalho!";
}

