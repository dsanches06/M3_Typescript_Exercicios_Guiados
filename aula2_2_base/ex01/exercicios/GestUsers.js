/* Array de utilizadores */
import { showUsers, openFormModal, addNewUser } from "./Components.js";
import { UserClass } from "./UserClass.js";
const usersList = [
    new UserClass(1, "Alice Morais", "alice@example.com"),
    new UserClass(2, "Bob Silva", "bob@example.com"),
];
/* Função principal de gestão de utilizadores */
export default function GestUsers() {
    showUsers(usersList);
}
/* Obter o último ID de utilizador */
function getLastUserId() {
    //
    let lastUserID = 0;
    //obter o ultimo utilizador no array
    const lastUser = usersList[usersList.length - 1];
    // Check if the last user exists and get the last user's ID
    if (lastUser) {
        lastUserID = lastUser.id;
    }
    return lastUserID;
}
/* Abrir modal de formulário */
const addUserBtn = document.querySelector("#addUserBtn");
addUserBtn.addEventListener("click", openFormModal);
/* Adicionar utilizador via formulário */
const formUser = document.querySelector("#formUser");
formUser.addEventListener("submit", (event) => {
    // Prevent form submissio
    event.preventDefault();
    // Obter valores dos inputs
    const nameInput = document.querySelector("#nameInput");
    const emailInput = document.querySelector("#emailInput");
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    // Obter elemento do banner de erro
    const errorBanner = document.querySelector("#errorBanner");
    // Limpar mensagens de erro anteriores
    errorBanner.textContent = "";
    errorBanner.style.display = "none";
    // Validações
    let isValid = true;
    let errorMessages = [];
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
    const modalForm = document.querySelector("#modalForm");
    modalForm.style.display = "none";
    //mostra todos os utilizadores
    showUsers(usersList);
});
/* Filtrar utilizadores ativos */
const filterActiveBtn = document.querySelector("#activeUsersBtn");
filterActiveBtn.addEventListener("click", () => {
    const activeUsers = usersList.filter((user) => user.isAtive);
    showUsers(activeUsers);
});
/* Procurar utilizador por nome */
const searchUser = document.querySelector("#searchUser");
searchUser.addEventListener("input", () => {
    //obter o nome inserido no input em minusculas
    const name = searchUser.value.toLowerCase();
    //filtrar a lista de utilizadores pelo nome
    const filteredUsers = usersList.filter((user) => user.name.toLowerCase().includes(name));
    //mostrar os utilizadores filtrados
    showUsers(filteredUsers);
});
/* Ordenar utilizadores por nome */
const sortUsersBtn = document.querySelector("#sortUsersBtn");
sortUsersBtn.addEventListener("click", () => {
    const sortedUsers = [...usersList].sort((a, b) => a.name.localeCompare(b.name));
    showUsers(sortedUsers);
});
