/* Exercício 6 — string ou null */
//1. Cria uma variável do tipo string | null.
let mensagem: string | null;
mensagem = "Olá, mundo!";
//2. Antes de mostrar, verifica se não é null.
//3. Se for string, mostra com innerHTML.
const outputDiv_5 = document.querySelector("#output-5") as HTMLDivElement;
if (mensagem !== null) {
  outputDiv_5.innerHTML += `Mensagem: ${mensagem}`;
}
