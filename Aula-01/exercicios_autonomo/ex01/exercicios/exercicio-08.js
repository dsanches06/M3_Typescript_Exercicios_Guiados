/* Exercício 8 — Adicionar tarefa completa */
import criarElementoTarefa from "./exercicio-10.js";
import exercicio_09 from "./exercicio-09.js";
export default function exercicio_08() {
    const inputTarefa = document.querySelector("#inputTarefa");
    const btnAddTarefa = document.querySelector("#btnAdd");
    const ulTarefas = document.querySelector("#ulTarefas");
    btnAddTarefa.addEventListener("click", () => {
        //1. Lê o valor do input.
        const textoTarefa = inputTarefa.value;
        //2. Valida o texto (ex: tamanho >= 3).
        if (textoTarefa.length >= 3) {
            //3. Cria um elemento li com o texto.
            const li = criarElementoTarefa(textoTarefa);
            //4. Adiciona o li à lista com appendChild.
            ulTarefas.appendChild(li);
            //5. Limpa o input com input.value = "".
            inputTarefa.value = "";
            const buttonExcluir = criarButtonExcluir();
            li.appendChild(buttonExcluir);
            exercicio_09();
        }
        else {
            return;
        }
    });
}
function criarButtonExcluir() {
    const buttonExcluir = document.createElement("button");
    buttonExcluir.textContent = "Excluir";
    buttonExcluir.className = "btnExcluir";
    return buttonExcluir;
}
