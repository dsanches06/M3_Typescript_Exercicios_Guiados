/* Exercício 2 — Mensagens de erro */
//1. Seleciona uma div específica para erros.
const outputDiv_2 = document.querySelector("#output-2");
//2. Cria uma função que recebe a mensagem de erro.
function mensagemErro(error) {
    outputDiv_2.innerHTML = `Erro: ${error}`;
    outputDiv_2.style.color = "red";
}
//3. Atribui o valor à div usando innerHTML.
export default function exercicio_02() {
    mensagemErro("Tarefa inválida!");
}
