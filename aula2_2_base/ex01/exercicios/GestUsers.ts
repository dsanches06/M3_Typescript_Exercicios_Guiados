/* Array de utilizadores */
import { showUsers, openFormModal, addNewUser } from "./Components.js";
import { IUser } from "./IUser.js";
import { UserClass } from "./UserClass.js";

const usersList: IUser[] = [
  new UserClass(1, "Alice Morais", "alice@example.com"),
  new UserClass(2, "Bob Silva", "bob@example.com"),
];

/* Função principal de gestão de utilizadores */
export default function GestUsers(): void {
  showUsers(usersList as UserClass[]);
}

/* Obter o último ID de utilizador */
function getLastUserId(): number {
  //
  let lastUserID: number = 0;
  //obter o ultimo utilizador no array
  const lastUser = usersList[usersList.length - 1];
  // Check if the last user exists and get the last user's ID
  if (lastUser) {
    lastUserID = lastUser.id;
  }
  return lastUserID;
}

/* Abrir modal de formulário */
const addUserBtn = document.querySelector("#addUserBtn") as HTMLButtonElement;
addUserBtn.addEventListener("click", openFormModal);

/* Adicionar utilizador via formulário */
const formUser = document.querySelector("#formUser") as HTMLFormElement;
formUser.addEventListener("submit", (event: Event) => {
  // Prevent form submissio
  event.preventDefault();
  //obter um novo id a partir do ultimo
  let newId = getLastUserId() + 1;
  //cria um novo user com os dados inseridos no formulario
  const user = addNewUser(newId);
  //adiciona a lista de utilizadores
  usersList.push(user);
  //fecha o modal
  const modalForm = document.querySelector("#modalForm") as HTMLDivElement;
  modalForm.style.display = "none";
  //mostra todos os utilizadores
  showUsers(usersList as UserClass[]);
});

/* Filtrar utilizadores ativos */
const filterActiveBtn = document.querySelector(
  "#activeUsersBtn"
) as HTMLButtonElement;
filterActiveBtn.addEventListener("click", () => {
  const activeUsers = usersList.filter((user) => user.isAtive);
  showUsers(activeUsers as UserClass[]);
});

/* Procurar utilizador por nome */
const searchUser = document.querySelector("#searchUser") as HTMLInputElement;
searchUser.addEventListener("input", () => {
  //obter o nome inserido no input em minusculas
  const name = searchUser.value.toLowerCase();
  //filtrar a lista de utilizadores pelo nome
  const filteredUsers = usersList.filter((user) =>
    user.name.toLowerCase().includes(name)
  );
  //mostrar os utilizadores filtrados
  showUsers(filteredUsers as UserClass[]);
});




