import Category from "./Category.js";
import Task from "./ITask.js";
import TaskClass from "./TaskClass.js";

const taskListElement = document.querySelector("#taskList") as HTMLUListElement;
const inputElement = document.querySelector("#taskInput") as HTMLInputElement;
const addButton = document.querySelector("#addTaskBtn") as HTMLButtonElement;
const sortButton = document.querySelector("#sortTaskBtn") as HTMLButtonElement;
const categorySelect = document.querySelector(
  "#taskCategory"
) as HTMLSelectElement;

const taskList: Task[] = [];

export function createElementLI(texto: string): HTMLLIElement {
  const li = document.createElement("li");
  li.textContent = texto;
  return li;
}

export default function Exercicio_01(): void {
  taskList.forEach((task) => {
    let result: string = "";
    if (task.completed) {
      result = `${
        task.title
      } (Concluída em: ${task.completeDate?.toLocaleDateString()})`;
    } else {
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
  const category = categorySelect.value as Category;

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
export function updateTaskList(): void {
  taskListElement.innerHTML = "";
  Exercicio_01();
}

/*  Exercício 6 — Estilização por estado */
export function styleTasks(): void {
  const listItems = taskListElement.querySelectorAll("li");
  listItems.forEach((li, index) => {
    if (taskList[index].completed) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "black";
    }
  });
}
