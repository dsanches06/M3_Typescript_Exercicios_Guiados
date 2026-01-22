"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFormModal = openFormModal;
exports.closeModal = closeModal;
exports.modalUserDetail = modalUserDetail;
exports.modalUserContent = modalUserContent;
/* Função para abrir o modal de formulario */
function openFormModal() {
    var modalForm = document.querySelector("#modalForm");
    modalForm.style.display = "flex";
    closeModal(modalForm);
}
/* Função para fechar o modal */
function closeModal(modal) {
    var closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", function () { return modal.remove(); });
    modal.addEventListener("click", function (e) {
        if (e.target === modal)
            modal.remove();
    });
}
/* Função que cria o modal para mostrar detalhes do tulizador */
function modalUserDetail(user) {
    var title = document.createElement("h3");
    title.textContent = "Detalhes do Utilizador";
    var detailName = document.createElement("p");
    detailName.id = "detailName";
    detailName.innerHTML = "<strong>Nome:</strong> ".concat(user.name);
    var detailEmail = document.createElement("p");
    detailEmail.id = "detailEmail";
    detailEmail.innerHTML = "<strong>Email:</strong> ".concat(user.email);
    var detailId = document.createElement("p");
    detailId.id = "detailId";
    detailId.innerHTML = "<strong>ID:</strong> ".concat(user.id);
    var detailStatus = document.createElement("p");
    detailStatus.id = "detailStatus";
    detailStatus.innerHTML = "<strong>Status:</strong> ".concat(user.isAtive ? "Ativo" : "Inativo");
    var userDetails = document.createElement("div");
    userDetails.appendChild(title);
    userDetails.appendChild(detailId);
    userDetails.appendChild(detailName);
    userDetails.appendChild(detailEmail);
    userDetails.appendChild(detailStatus);
    return userDetails;
}
/*  */
function modalUserContent(user) {
    var divCardId = document.createElement("div");
    divCardId.textContent = "ID do Utilizador: ".concat(user.id);
    var divCardName = document.createElement("div");
    divCardName.textContent = "".concat(user.name);
    var divCardEmail = document.createElement("div");
    divCardEmail.textContent = "".concat(user.email);
    var divCardStatus = document.createElement("div");
    divCardStatus.textContent = "".concat(user.isAtive ? "ativo" : "Inativo");
    //Mostra o estado com texto ou cor diferente
    divCardStatus.style.color = user.isAtive ? "green" : "red";
    var divCardTasks = document.createElement("div");
    divCardTasks.className = "tasks";
    divCardTasks.textContent = "0 tarefas atribuídas";
    var divUserCardContent = document.createElement("div");
    divUserCardContent.appendChild(divCardId);
    divUserCardContent.appendChild(divCardName);
    divUserCardContent.appendChild(divCardEmail);
    divUserCardContent.appendChild(divCardStatus);
    divUserCardContent.appendChild(divCardTasks);
    return divUserCardContent;
}
