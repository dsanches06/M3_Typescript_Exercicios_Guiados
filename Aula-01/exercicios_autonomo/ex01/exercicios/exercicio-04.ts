/* Exercício 4 — Estado da lista */

export default function exercicio_04() {
  //1. Cria uma variável boolean indicando se existem tarefas.
  let temTarefas: boolean = true;
  //2. Seleciona uma div para mostrar a mensagem.
  const outputDiv_3 = document.querySelector("#output-3") as HTMLDivElement;
  //3. Usa if para mostrar mensagem diferente dependendo do valor.
  if (temTarefas) {
    outputDiv_3.innerHTML = "Você tem tarefas pendentes.";
  } else {
    outputDiv_3.innerHTML = "Nenhuma tarefa pendente. Bom trabalho!";
  }
}
