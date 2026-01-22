"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadInitialUsers;
var UserClass_js_1 = require("../Model/UserClass.js");
var fakeUsersData_js_1 = require("../helpers/fakeUsersData.js");
var ModalUI_js_1 = require("./ModalUI.js");
var UsersUI_js_1 = require("./UsersUI.js");
/* Array de utilizadores */
var usersList = [];
/* Função principal para carregar utilizadores iniciais */
function loadInitialUsers() {
    // Usar um ciclo para converter os dados em instâncias da classe
    for (var _i = 0, fakeUsersData_1 = fakeUsersData_js_1.fakeUsersData; _i < fakeUsersData_1.length; _i++) {
        var userData = fakeUsersData_1[_i];
        var user = new UserClass_js_1.UserClass(userData.id, userData.name, userData.email);
        usersList.push(user);
    }
    // Mostrar os utilizadores
    (0, UsersUI_js_1.showUsers)(usersList);
}
/* Obter o último ID de utilizador */
function getLastUserId() {
    //
    var lastUserID = 0;
    //obter o ultimo utilizador no array
    var lastUser = usersList[usersList.length - 1];
    // Check if the last user exists and get the last user's ID
    if (lastUser) {
        lastUserID = lastUser.id;
    }
    return lastUserID;
}
/* Abrir modal de formulário */
var addUserBtn = document.querySelector("#addUserBtn");
addUserBtn.addEventListener("click", ModalUI_js_1.openFormModal);
/* Adicionar utilizador via formulário */
var formUser = document.querySelector("#formUser");
formUser.addEventListener("submit", function (event) {
    // Prevent form submissio
    event.preventDefault();
    // Obter valores dos inputs
    var nameInput = document.querySelector("#nameInput");
    var emailInput = document.querySelector("#emailInput");
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    // Obter elemento do banner de erro
    var errorBanner = document.querySelector("#errorBanner");
    // Limpar mensagens de erro anteriores
    errorBanner.textContent = "";
    errorBanner.style.display = "none";
    // Validações
    var isValid = true;
    var errorMessages = [];
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
    var newId = getLastUserId() + 1;
    //cria um novo user com os dados inseridos no formulario
    var user = (0, UsersUI_js_1.addNewUser)(newId);
    //adiciona a lista de utilizadores
    usersList.push(user);
    //fecha o modal
    var modalForm = document.querySelector("#modalForm");
    modalForm.style.display = "none";
    //mostra todos os utilizadores
    (0, UsersUI_js_1.showUsers)(usersList);
});
/* Filtrar utilizadores ativos */
var filterActiveBtn = document.querySelector("#activeUsersBtn");
filterActiveBtn.addEventListener("click", function () {
    var activeUsers = usersList.filter(function (user) { return user.isAtive; });
    (0, UsersUI_js_1.showUsers)(activeUsers);
});
/* Procurar utilizador por nome */
var searchUser = document.querySelector("#searchUser");
searchUser.addEventListener("input", function () {
    //obter o nome inserido no input em minusculas
    var name = searchUser.value.toLowerCase();
    //filtrar a lista de utilizadores pelo nome
    var filteredUsers = usersList.filter(function (user) {
        return user.name.toLowerCase().includes(name);
    });
    //mostrar os utilizadores filtrados
    (0, UsersUI_js_1.showUsers)(filteredUsers);
});
/* Ordenar utilizadores por nome */
var sortUsersBtn = document.querySelector("#sortUsersBtn");
//Crie uma variável de controle de estado
var isAscending = true;
sortUsersBtn.addEventListener("click", function () {
    var sortedUsers = __spreadArray([], usersList, true);
    //Ordenar com base no estado atual
    if (isAscending) {
        sortedUsers.sort(function (a, b) { return a.name.localeCompare(b.name); });
    }
    else {
        sortedUsers.sort(function (a, b) { return b.name.localeCompare(a.name); });
    }
    //Inverta o estado para o próximo clique
    isAscending = !isAscending;
    // Mostrar os utilizadores ordenados
    (0, UsersUI_js_1.showUsers)(sortedUsers);
    // Atualize o texto ou ícone do botão
    sortUsersBtn.textContent = isAscending ? "Ordenar A-Z" : "Ordenar Z-A";
});
