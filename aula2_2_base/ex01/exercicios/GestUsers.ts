/* Array de utilizadores */
import { showUsers, openFormModal, addNewUser } from "./Components.js";
import { IUser } from "./IUser.js";
import { UserClass } from "./UserClass.js";

/* Array de utilizadores */
const usersList: IUser[] = [];

/* Função para carregar utilizadores iniciais */
function loadInitialUsers(): void {
  // Array de dados fake
  const fakeUsersData = [
    { id: 1, name: "João Martins", email: "joao@example.com" },
    { id: 2, name: "Isabela Rodrigues", email: "isabela@example.com" },
    { id: 3, name: "Henrique Alves", email: "henrique@example.com" },
    { id: 4, name: "Bob Silva", email: "bob@example.com" },
    { id: 5, name: "Fernando Costa", email: "fernando@example.com" },
    { id: 6, name: "Eva Oliveira", email: "eva@example.com" },
    { id: 7, name: "Diana Santos", email: "diana@example.com" },
    { id: 8, name: "Alice Morais", email: "alice@example.com" },
    { id: 9, name: "Carlos Pereira", email: "carlos@example.com" },
    { id: 10, name: "Gabriela Lima", email: "gabriela@example.com" },
  ];

  // Usar um ciclo para converter os dados em instâncias da classe
  for (const userData of fakeUsersData) {
    const user = new UserClass(userData.id, userData.name, userData.email);
    usersList.push(user);
  }
  // Mostrar os utilizadores
  showUsers(usersList as UserClass[]);
}

/* Função principal de gestão de utilizadores */
export default function GestUsers(): void {
  loadInitialUsers(); // Chama a função ao iniciar a aplicação
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

  // Obter valores dos inputs
  const nameInput = document.querySelector("#nameInput") as HTMLInputElement;
  const emailInput = document.querySelector("#emailInput") as HTMLInputElement;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Obter elemento do banner de erro
  const errorBanner = document.querySelector("#errorBanner") as HTMLDivElement;

  // Limpar mensagens de erro anteriores
  errorBanner.textContent = "";
  errorBanner.style.display = "none";

  // Validações
  let isValid = true;
  let errorMessages: string[] = [];
  if (name === "") {
    errorMessages.push("O nome não pode estar vazio.");
    isValid = false;
  }
  if (!email.includes("@")) {
    errorMessages.push("O email deve conter '@'.");
    isValid = false;
  }

  // Se não válido, mostrar banner de erro
  if (!isValid) {
    errorBanner.textContent = errorMessages.join(" ");
    errorBanner.style.display = "block";
    return;
  }

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

/* Ordenar utilizadores por nome */
const sortUsersBtn = document.querySelector(
  "#sortUsersBtn"
) as HTMLButtonElement;
//Crie uma variável de controle de estado
let isAscending = true;
sortUsersBtn.addEventListener("click", () => {
  const sortedUsers = [...usersList];
  //Ordenar com base no estado atual
  if (isAscending) {
    sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sortedUsers.sort((a, b) => b.name.localeCompare(a.name));
  }
  //Inverta o estado para o próximo clique
  isAscending = !isAscending;
  // Mostrar os utilizadores ordenados
  showUsers(sortedUsers as UserClass[]);
  // Atualize o texto ou ícone do botão
  sortUsersBtn.textContent = isAscending ? "Ordenar A-Z" : "Ordenar Z-A";
});
