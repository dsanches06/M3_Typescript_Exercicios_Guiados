/* Exercício 5 — Union Types */
const outputDiv_4 = document.querySelector("#output-4") as HTMLDivElement;

//1. Cria uma função que recebe um parâmetro do tipo number | string.
function mostrarValor(valor: number | string): void {
  //2. Mostra o valor na página usando innerHTML.
  outputDiv_4.innerHTML = `Valor: ${valor}`;
}
//3. Testa a função com ambos os tipos.
export default function exercicio_05() {
  mostrarValor(42);
  mostrarValor("Quarenta e dois");
}
