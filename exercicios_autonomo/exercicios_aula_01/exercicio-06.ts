/* Exercício 6 — string ou null */

export default function exercicio_06() {
  //1. Cria uma variável do tipo string | null.
  let mensagem: string | null;
  mensagem = "Olá, mundo!";

  const outputDiv_5 = document.querySelector("#output-5") as HTMLDivElement;
  //2. Antes de mostrar, verifica se não é null.
  if (mensagem !== null) {
    //3. Se for string, mostra com innerHTML.
    outputDiv_5.innerHTML += `Mensagem: ${mensagem}`;
  }
}
