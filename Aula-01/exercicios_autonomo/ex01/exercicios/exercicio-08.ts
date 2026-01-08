/* Exercício 8 — Adicionar tarefa completa */
//1. Lê o valor do input.
//2. Valida o texto (ex: tamanho >= 3).
//3. Cria um elemento li com o texto.
//4. Adiciona o li à lista com appendChild.
//5. Limpa o input com input.value = "".
const inputTarefa = document.querySelector("#inputTarefa") as HTMLInputElement;
const btnAddTarefa = document.querySelector("#btnAdd") as HTMLButtonElement;
const ulTarefas = document.querySelector("#ulTarefas") as HTMLUListElement;
let count: number = 0;

btnAddTarefa.addEventListener("click", () => {
  const textoTarefa: string = inputTarefa.value;
  if (textoTarefa.length >= 3) {
    const li = document.createElement("li");
    li.textContent = textoTarefa + " - " + (count += 1);
    ulTarefas.appendChild(li);
    inputTarefa.value = "";
  } else {
    return;
  }
});
