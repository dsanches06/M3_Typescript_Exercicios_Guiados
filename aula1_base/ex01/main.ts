const input = document.querySelector("#taskInput") as HTMLInputElement;
const button = document.querySelector("#addBtn") as HTMLButtonElement;
const list = document.querySelector("#taskList") as HTMLUListElement;
const output = document.querySelector("#output") as HTMLDivElement;

/*  Exercício 1 — Mostrar texto na página */
let texto: string = "Meu nome é Danilson Sanches";
output.innerHTML = texto;

/* Exercício 2 — Contador simples */

//1. Cria uma variável `count` do tipo number inicializada a 0.
let count: number = 0;
//2. Seleciona uma div para mostrar o total de tarefas.
const output_1 = document.querySelector("#output-1") as HTMLDivElement;
output_1.innerHTML = "Total de tarefas: " + count;
//3. Cria um botão e adiciona um event listener de click.
const btn_contador = document.querySelector("#contador") as HTMLButtonElement;
//4. Dentro do listener, incrementa `count` e atualiza o conteúdo da div usando innerHTML.
//5. Assim, cada clique vai aumentar o contador e atualizar a página.
btn_contador.addEventListener("click", () => {
  count++;
  output_1.innerHTML = "Total de tarefas: " + count;
});

/* Exercício 3 — Estado booleano */

//1. Cria uma variável `temTarefas` do tipo boolean (começa como `false`).
let temTarefas: boolean = false;
//2. Seleciona uma div para mostrar a mensagem.
const output_2 = document.querySelector("#output-2") as HTMLDivElement;
//3. Cria uma função que verifica se `temTarefas` é true ou false.
function atualizarTarefa(tarefas: boolean): void {
  //- Se true, mostra `"Existem tarefas pendentes!"`.
  if (tarefas) {
    output_2.innerHTML = "Existem tarefas pendentes!";
  } /*- Se false, mostra `"Não há tarefas no momento."` */ else {
    output_2.innerHTML = "Não há tarefas no momento.";
  }
}
//4. Adiciona um botão que alterna `temTarefas = !temTarefas` e chama a função de atualização.
const btn_tarefa = document.querySelector("#tarefasBtn") as HTMLButtonElement;
btn_tarefa.addEventListener("click", () => {
  temTarefas = !temTarefas;
  atualizarTarefa(temTarefas);
});

//5. Chama a função de atualização ao carregar a página para mostrar o estado inicial.
atualizarTarefa(temTarefas);

/* Exercício 4 — Função tipada */
//1. Cria uma função que recebe um parâmetro do tipo string.
//2. Seleciona uma div onde vais mostrar o texto.
const output_3 = document.querySelector("#output-3") as HTMLDivElement;
//3. Dentro da função, atribui o parâmetro à div usando innerHTML.
function tipada(texto: string): void {
  output_3.innerHTML = texto;
}
//4. Chama a função passando diferentes mensagens para testar.
tipada("Frontend");
tipada("Typescript");

/* Exercício 5 — Validação de texto */
//1. Cria uma função que recebe um texto.
//2. Verifica se o comprimento do texto é >= 3.
//3. Seleciona uma div para mostrar a mensagem.
//4. Se válido, mostra `"Texto válido"`; se não, mostra `"Texto inválido"` usando innerHTML.
const output_4 = document.querySelector("#output-4") as HTMLDivElement;

function tresCaracteres(texto: string): void {
  if (texto.length >= 3) {
    output_4.innerHTML = "Texto válido";
  } else {
    output_4.innerHTML = "Texto inválido";
  }
}

tresCaracteres("ana");
tresCaracteres("oi");

/* Exercício 6 — Ler valor de um input */
//1. Seleciona o input usando querySelector e faz cast para HTMLInputElement.
//2. Cria um botão para ler o valor.
//3. No click do botão, lê o valor do input (`input.value`).
//4. Mostra o valor na página usando innerHTML.
const output_5 = document.querySelector("#output-5") as HTMLDivElement;
const valueInput = document.querySelector("#valueInput") as HTMLInputElement;
const valueBtn = document.querySelector("#valueBtn") as HTMLButtonElement;

valueBtn.addEventListener("click", () => {
  output_5.innerHTML = valueInput.value;
  valueInput.value = "";
});

/* Exercício 7 — Evento de botão */
//1. Seleciona o botão usando querySelector e faz cast para HTMLButtonElement.
//2. Seleciona uma div onde a mensagem vai aparecer.
//3. Adiciona um event listener para click.
//4. Dentro do listener, altera o conteúdo da div usando innerHTML.
const output_6 = document.querySelector("#output-6") as HTMLDivElement;
const btn = document.querySelector("#btn") as HTMLButtonElement;
btn.addEventListener("click", () => {
  output_6.innerHTML = "Este botão foi clicado!";
});

/* Exercício 8 — Criar elemento dinamicamente */
//1. Seleciona a lista (ul ou ol) onde o item vai ser adicionado.
//2. Cria um novo elemento com document.createElement("li").
//3. Define o conteúdo do elemento (`textContent` ou `innerHTML`).
//4. Adiciona o elemento à lista usando appendChild.
button.addEventListener("click", () => {
  const taskText: string = input.value;

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText + " - " + (count += 1);

  list.appendChild(li);
  input.value = "";
});

/* Exercício 9 — Verificação de null */
//1. Seleciona o elemento HTML.
//2. Antes de alterar, verifica se não é null.
//3. Se existir, atualiza o conteúdo com innerHTML.
const output_7 = document.querySelector("#output-7") as HTMLDivElement;
if (output_7) {
  output_7.innerHTML = "Elemento existe!";
}

/* Exercício 10 — Tipo unknown */
//1. Cria uma variável do tipo unknown.
let idade: unknown;
idade = 43;
const output_8 = document.querySelector("#output-8") as HTMLDivElement;

//2. Antes de usar, verifica o tipo com typeof.
//3. Se for string ou number, mostra o valor usando innerHTML na página.

if (typeof idade === "string" || typeof idade === "number") {
  output_8.innerHTML = String(idade);
}
