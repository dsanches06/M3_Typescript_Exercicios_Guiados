import Category from "./Category.js";
import { updateTaskList, styleTasks, showTaskCounter } from "./Components.js";
import ITask from "./ITask.js";
import TaskClass from "./TaskClass.js";

const inputElement = document.querySelector("#taskInput") as HTMLInputElement;
const addButton = document.querySelector("#addTaskBtn") as HTMLButtonElement;
const sortButton = document.querySelector("#sortTaskBtn") as HTMLButtonElement;
const categorySelect = document.querySelector(
  "#taskCategory"
) as HTMLSelectElement;

const completedTaskBtn = document.querySelector(
  "#completedTaskBtn"
) as HTMLButtonElement;

/*  Array de Tarefas */
const taskList: ITask[] = [];

/*  Função Principal para Mostrar Tarefas */
export default function showTasks(): void {
  showTaskCounter(taskList);
  updateTaskList(taskList);
  styleTasks(taskList);
}

/*  Adicionar tarefa via input */
addButton.addEventListener("click", () => {
  const title = inputElement.value.trim();
  const category = categorySelect.value as Category;
  if (title && category) {
    const newTask = new TaskClass(Date.now(), title, category);
    taskList.push(newTask);
    inputElement.value = "";
    showTasks();
  }
});

/*  Ordenação Alfabética */
sortButton.addEventListener("click", () => {
  taskList.sort((a, b) => a.title.localeCompare(b.title));
  showTasks();
});

/* Limpar Todas as Concluídas */
completedTaskBtn.style.backgroundColor = "red";
completedTaskBtn.addEventListener("click", () => {
  for (let i = taskList.length - 1; i >= 0; i--) {
    if (taskList[i].completed) {
      taskList.splice(i, 1);
    }
  }
  showTasks();
});

/* Pesquisa Dinâmica */
const searchInput = document.querySelector("#searchInput") as HTMLInputElement;
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTasks = taskList.filter((task) =>
    task.title.toLowerCase().includes(searchTerm)
  );
  updateTaskList(filteredTasks);
  styleTasks(filteredTasks);
});
