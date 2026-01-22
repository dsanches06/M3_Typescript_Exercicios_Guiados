"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showUsers = showUsers;
exports.renderUsers = renderUsers;
exports.addNewUser = addNewUser;
exports.toggleUserState = toggleUserState;
exports.removeUserByID = removeUserByID;
var UserClass_js_1 = require("../Model/UserClass.js");
var userCardUI_js_1 = require("./userCardUI.js");
var contadoresUI_js_1 = require("./contadoresUI.js");
var usersContainer = document.querySelector("#usersContainer");
/* Mostrar utilizadores */
function showUsers(usersList) {
    renderUsers(usersList);
    (0, contadoresUI_js_1.countUsers)(usersList);
    (0, contadoresUI_js_1.countActiveUsers)(usersList);
    (0, contadoresUI_js_1.countInactiveUsers)(usersList);
    (0, contadoresUI_js_1.countActivePercentage)(usersList);
}
/* Função de renderização */
function renderUsers(userList) {
    //Limpa o contentor HTML.
    usersContainer.innerHTML = "";
    userList.forEach(function (user) {
        //Para cada utilizador, cria um cartão HTML.
        return (0, userCardUI_js_1.createUserCard)(user, userList);
    });
}
/* Função para adicionar novo utilizador */
function addNewUser(id) {
    //Lê os valores dos inputs.
    var nameInput = document.querySelector("#nameInput");
    var name = nameInput.value;
    var emailInput = document.querySelector("#emailInput");
    var email = emailInput.value;
    //Limpa os valores dos inputs.
    nameInput.value = "";
    emailInput.value = "";
    //retorna um novo objeto do tipo UserClass
    return new UserClass_js_1.UserClass(id, name, email);
}
/* Alternar estado (ativo / inativo) */
function toggleUserState(userID, userList) {
    //encontra o utilizador pelo ID
    var user = userList.find(function (user) { return user.id === userID; });
    //se o utilizador for encontrado
    if (user) {
        //alternar o estado do utilizador
        user.toggleEstado();
        //atualiza a exibição dos utilizadores
        showUsers(userList);
    }
}
/* Remover utilizador */
function removeUserByID(userID, userList) {
    // Usa filter() para criar um novo array sem o utilizador com o ID especificado
    var updatedUserList = userList.filter(function (user) { return user.id !== userID; });
    //retorna a lista atualizada
    return updatedUserList;
}
