
/* Exercício 10 — Função reutilizável */
//1. Cria uma função que recebe texto.
//2. Dentro da função, cria um elemento li com esse texto.


//3. Retorna o elemento criado para poder ser usado em várias listas.
export default function criarElementoTarefa(texto: string): HTMLLIElement {
  const li = document.createElement("li");
  li.textContent = texto;
  return li;
}
