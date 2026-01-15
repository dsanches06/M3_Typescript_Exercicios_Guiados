import { UserClass } from "../Model/UserClass.js";
import { createUserCard } from "./userCardUI.js";
import { countUsers, countActiveUsers, countInactiveUsers, countActivePercentage, } from "./contadoresUI.js";
const usersContainer = document.querySelector("#usersContainer");
/* Mostrar utilizadores */
export function showUsers(usersList) {
    renderUsers(usersList);
    countUsers(usersList);
    countActiveUsers(usersList);
    countInactiveUsers(usersList);
    countActivePercentage(usersList);
}
/* Função de renderização */
export function renderUsers(userList) {
    //Limpa o contentor HTML.
    usersContainer.innerHTML = "";
    userList.forEach((user) => 
    //Para cada utilizador, cria um cartão HTML.
    createUserCard(user, userList));
}
/* Função para adicionar novo utilizador */
export function addNewUser(id) {
    //Lê os valores dos inputs.
    const nameInput = document.querySelector("#nameInput");
    const name = nameInput.value;
    const emailInput = document.querySelector("#emailInput");
    const email = emailInput.value;
    //Limpa os valores dos inputs.
    nameInput.value = "";
    emailInput.value = "";
    //retorna um novo objeto do tipo UserClass
    return new UserClass(id, name, email);
}
/* Alternar estado (ativo / inativo) */
export function toggleUserState(userID, userList) {
    //encontra o utilizador pelo ID
    const user = userList.find((user) => user.id === userID);
    //se o utilizador for encontrado
    if (user) {
        //alternar o estado do utilizador
        user.toggleEstado();
        //atualiza a exibição dos utilizadores
        showUsers(userList);
    }
}
/* Remover utilizador */
export function removeUserByID(userID, userList) {
    // Usa filter() para criar um novo array sem o utilizador com o ID especificado
    const updatedUserList = userList.filter((user) => user.id !== userID);
    //retorna a lista atualizada
    return updatedUserList;
}
