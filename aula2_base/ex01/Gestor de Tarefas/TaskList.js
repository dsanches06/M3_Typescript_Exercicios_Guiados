import TaskClass from "./TaskClass.js";
const taskListElement = document.querySelector("#taskList");
const inputElement = document.querySelector("#taskInput");
const addButton = document.querySelector("#addTaskBtn");
const sortButton = document.querySelector("#sortTaskBtn");
const categorySelect = document.querySelector("#taskCategory");
const taskList = [];
export function createElementLI(texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    return li;
}
export default function Exercicio_01() {
    taskList.forEach((task) => {
        var _a;
        let result = "";
        if (task.completed) {
            result = `${task.title} (Concluída em: ${(_a = task.completeDate) === null || _a === void 0 ? void 0 : _a.toLocaleDateString()})`;
        }
        else {
            result = `${task.id} - ${task.title} - ${task.category}`;
        }
        const li = createElementLI(result);
        taskListElement.appendChild(li);
        /* Remover tarefa */
        const buttonRemover = document.createElement("button");
        buttonRemover.textContent = "Remover";
        taskListElement.appendChild(buttonRemover);
        buttonRemover.addEventListener("click", () => {
            const index = taskList.findIndex((t) => t.id === task.id);
            if (index !== -1) {
                taskList.splice(index, 1);
                updateTaskList();
                styleTasks();
            }
        });
    });
}
/*  Adicionar tarefa via input */
addButton.addEventListener("click", () => {
    const title = inputElement.value.trim();
    const category = categorySelect.value;
    if (title && category) {
        const newTask = new TaskClass(Date.now(), title, category);
        //newTask.markCompleted();
        taskList.push(newTask);
        inputElement.value = "";
        updateTaskList();
        styleTasks();
    }
});
/*  Ordenação Alfabética */
sortButton.addEventListener("click", () => {
    taskList.sort((a, b) => a.title.localeCompare(b.title));
    updateTaskList();
    styleTasks();
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
