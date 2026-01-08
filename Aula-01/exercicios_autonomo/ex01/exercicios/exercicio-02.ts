

/* Exercício 2 — Mensagens de erro */
//1. Seleciona uma div específica para erros.
const outputDiv_2 = document.querySelector("#output-2") as HTMLDivElement;
//2. Cria uma função que recebe a mensagem de erro.
function mensagemErro(error: string): void {
  outputDiv_2.innerHTML = `Erro: ${error}`;
  outputDiv_2.style.color = "red";
}
//3. Atribui o valor à div usando innerHTML.
mensagemErro("Tarefa inválida!");