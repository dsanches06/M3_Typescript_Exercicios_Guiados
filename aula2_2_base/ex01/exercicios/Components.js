/*  Estrutura HTML (cartões) */
import { UserClass } from "./UserClass.js";
const usersContainer = document.querySelector("#usersContainer");
/* Criar cartão de utilizador */
function createUserCard(user, userList) {
    const divUserCard = document.createElement("div");
    divUserCard.className = "userCard";
    divUserCard.addEventListener("click", showUserDetails.bind(null, user));
    const divCardName = document.createElement("div");
    divCardName.textContent = `${user.name}`;
    divUserCard.appendChild(divCardName);
    const divCardEmail = document.createElement("div");
    divCardEmail.textContent = `${user.email}`;
    divUserCard.appendChild(divCardEmail);
    const divCardStatus = document.createElement("div");
    divCardStatus.textContent = `${user.isAtive ? "ativo" : "Inativo"}`;
    //Mostra o estado com texto ou cor diferente
    divCardStatus.style.color = user.isAtive ? "green" : "red";
    divUserCard.appendChild(divCardStatus);
    const divCardTasks = document.createElement("div");
    divCardTasks.className = "tasks";
    divCardTasks.textContent = "0 tarefas atribuídas";
    divUserCard.appendChild(divCardTasks);
    const bntDesativar = document.createElement("button");
    bntDesativar.textContent = "Desativar Utilizador";
    bntDesativar.addEventListener("click", desactivedUser.bind(null, user.id, userList));
    divUserCard.appendChild(bntDesativar);
    usersContainer.appendChild(divUserCard);
}
/* Função de renderização */
export function renderUsers(userList) {
    //Limpa o contentor HTML.
    usersContainer.innerHTML = "";
    userList.forEach((user) => 
    //Para cada utilizador, cria um cartão HTML.
    createUserCard(user, userList));
}
/* Desativar utilizador */
function desactivedUser(userID, userList) {
    const user = userList.find((user) => user.id === userID);
    if (user) {
        user.desativar();
        renderUsers(userList);
    }
}
/* Modal para visualização de detalhes do utilizador */
function showUserDetails(user) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "flex";
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.textContent = "×";
    modalContent.appendChild(closeBtn);
    const title = document.createElement("h2");
    title.textContent = user.name;
    modalContent.appendChild(title);
    const emailPara = document.createElement("p");
    emailPara.innerHTML = `<strong>Email:</strong> ${user.email}`;
    modalContent.appendChild(emailPara);
    const idPara = document.createElement("p");
    idPara.innerHTML = `<strong>ID:</strong> ${user.id}`;
    modalContent.appendChild(idPara);
    const statusPara = document.createElement("p");
    statusPara.innerHTML = `<strong>Status:</strong> ${user.isAtive ? "Ativo" : "Inativo"}`;
    modalContent.appendChild(statusPara);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    closeModal(modal);
}
/* Função para fechar o modal */
export function closeModal(modal) {
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", () => modal.remove());
    modal.addEventListener("click", (e) => {
        if (e.target === modal)
            modal.remove();
    });
}
/* Função para abrir o modal de formulario */
export function openFormModal() {
    const modalForm = document.querySelector("#modalForm");
    modalForm.style.display = "flex";
    closeModal(modalForm);
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
