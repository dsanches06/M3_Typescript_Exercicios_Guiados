"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserCard = createUserCard;
var UsersUI_js_1 = require("./UsersUI.js");
var UsersUI_js_2 = require("./UsersUI.js");
var ModalUI_js_1 = require("./ModalUI.js");
var usersContainer = document.querySelector("#usersContainer");
/* Criar cartão de utilizador */
function createUserCard(user, userList) {
    var divUserCard = document.createElement("div");
    divUserCard.className = "userCard";
    divUserCard.addEventListener("click", function () { return showUserDetails(user); });
    var divUserCardContent = (0, ModalUI_js_1.modalUserContent)(user);
    divUserCardContent.className = "userCardContent";
    divUserCard.appendChild(divUserCardContent);
    var divUserCardBtn = userCardBtn(user, userList);
    divUserCardBtn.className = "userCardBtn";
    divUserCard.appendChild(divUserCardBtn);
    usersContainer.appendChild(divUserCard);
}
/* Modal para visualização de detalhes do utilizador */
function showUserDetails(user) {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "flex";
    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.textContent = "×";
    var userDetails = (0, ModalUI_js_1.modalUserDetail)(user);
    userDetails.id = "userDetails";
    userDetails.className = "user-details";
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(userDetails);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    (0, ModalUI_js_1.closeModal)(modal);
}
function userCardBtn(user, userList) {
    var bntToggle = document.createElement("button");
    bntToggle.textContent = user.isAtive
        ? "Desativar Utilizador"
        : "Ativar Utilizador";
    bntToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        (0, UsersUI_js_2.toggleUserState)(user.id, userList);
    });
    var btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "remove-btn";
    btnRemover.addEventListener("click", function (event) {
        event.stopPropagation();
        var updatedUserList = (0, UsersUI_js_2.removeUserByID)(user.id, userList);
        if (updatedUserList) {
            //atualiza a lista de utilizadores
            (0, UsersUI_js_1.showUsers)(updatedUserList);
        }
    });
    //para agrupar os botoes
    var divUserCardBtn = document.createElement("div");
    divUserCardBtn.appendChild(bntToggle);
    divUserCardBtn.appendChild(btnRemover);
    return divUserCardBtn;
}
