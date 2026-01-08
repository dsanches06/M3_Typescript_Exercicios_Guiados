

/* Exercício 5 — Union Types */
//1. Cria uma função que recebe um parâmetro do tipo number | string.
//2. Mostra o valor na página usando innerHTML.
const outputDiv_4 = document.querySelector("#output-4") as HTMLDivElement;
function mostrarValor(valor: number | string): void {
  outputDiv_4.innerHTML = `Valor: ${valor}`;
}
//3. Testa a função com ambos os tipos.
mostrarValor(42);
mostrarValor("Quarenta e dois");
