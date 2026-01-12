/* Exercício 9 — Mensagem condicional */
export default function exercicio_09() {
    //1. Conta o número de tarefas (por exemplo, o tamanho da lista).
    const ulTarefas = document.querySelector("#ulTarefas");
    //2. Seleciona uma div para mostrar mensagem.
    const outputDiv_6 = document.querySelector("#output-6");
    //3. Usa if para mostrar mensagens diferentes dependendo do número de tarefas.
    if (ulTarefas.children.length === 0) {
        outputDiv_6.innerHTML = "Nenhuma tarefa adicionada.";
    }
    else if (ulTarefas.children.length === 1) {
        outputDiv_6.innerHTML = "Você tem 1 tarefa pendente.";
    }
    else {
        outputDiv_6.innerHTML = `Você tem ${ulTarefas.children.length} tarefas pendentes.`;
    }
}
