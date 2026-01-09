/* Exercício 1 — Contador visual de tarefas */
export default function exercicio_01() {
    //1. Cria uma variável `count` do tipo number fora da função.
    let count = 0;
    //2. Cria uma função que incrementa `count` e atualiza a div com innerHTML.
    const outputDiv_1 = document.querySelector("#output-1");
    outputDiv_1.innerHTML = `Tarefas: ${count}`;
    const btnCount = document.querySelector("#btnCount");
    //3. Chama a função sempre que necessário (ex: botão de adicionar).
    btnCount.addEventListener("click", () => {
        count += 1;
        outputDiv_1.innerHTML = `Tarefas: ${count}`;
    });
}
