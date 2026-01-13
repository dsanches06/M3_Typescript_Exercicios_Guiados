import exercicio_01 from "./exercicio-01.js";

/* Exercício 3 — Limpar campo de texto */
//1. Cria uma função que recebe um input.
//2. Define input.value = "" para limpar o campo.
function limparCampos(input: HTMLInputElement): void {
  input.value = "";
}
//teste função limpar campos de um input
const inputValue = document.querySelector("#inputValue") as HTMLInputElement;
//limparCampos(inputValue);

export default function exercicio_03() {
  const btnLimpar = document.querySelector("#inputBtn") as HTMLButtonElement;
  btnLimpar.addEventListener("click", limparCampos.bind(null, inputValue));
}
