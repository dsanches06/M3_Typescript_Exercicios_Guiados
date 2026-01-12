/* Exercício 3 — Array de objetos */
import TaskClass from "./TaskClass.js";
const taskListElement = document.querySelector("#taskList");
const inputElement = document.querySelector("#taskInput");
const addButton = document.querySelector("#addTaskButton");
/* Cria um array chamado listaTarefas que armazene vários objetos do tipo Tarefa.
Dica lógica passo a passo:
1. Declare o array com o tipo explícito: Tarefa[].
2. Adicione 2 ou 3 tarefas de exemplo manualmente.
3. Percorra o array e mostre apenas os títulos numa div ou ul.*/
const taskList = [
    { id: 1, title: "Estudar TypeScript", completed: false },
    { id: 2, title: "Fazer exercícios", completed: true },
    { id: 3, title: "Ler documentação", completed: false },
];
export function createElementLI(texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    return li;
}
export default function Exercicio_01() {
    taskList.forEach((task) => {
        const li = createElementLI(`${task.id} - ${task.title} - ${task.completed}`);
        taskListElement.appendChild(li);
        /*Exercício 7 — Remover tarefa */
        const buttonRemover = document.createElement("button");
        buttonRemover.textContent = "Remover";
        taskListElement.appendChild(buttonRemover);
        buttonRemover.addEventListener("click", (id) => {
            const index = taskList.findIndex((t) => t.id === task.id);
            if (index !== -1) {
                taskList.splice(index, 1);
                updateTaskList();
                styleTasks();
            }
        });
    });
}
/* Exercício 4 — Adicionar tarefa via input */
addButton.addEventListener("click", () => {
    const task = inputElement.value;
    if (task) {
        const newTask = new TaskClass(Date.now(), task);
        taskList.push(newTask);
        inputElement.value = "";
        updateTaskList();
        styleTasks();
    }
});
/* Exercício 5 — Renderização dinâmica */
export function updateTaskList() {
    taskListElement.innerHTML = "";
    Exercicio_01();
}
/*  Exercício 6 — Estilização por estado */
export function styleTasks() {
    const listItems = taskListElement.querySelectorAll("li");
    listItems.forEach((li, index) => {
        if (taskList[index].completed) {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";
        }
        else {
            li.style.textDecoration = "none";
            li.style.color = "black";
        }
    });
}
