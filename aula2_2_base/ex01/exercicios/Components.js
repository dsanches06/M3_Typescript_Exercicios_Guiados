/*  Estrutura HTML (cartões) */
import { UserClass } from "./UserClass.js";
const usersContainer = document.querySelector("#usersContainer");
/* Mostrar utilizadores */
export function showUsers(usersList) {
    renderUsers(usersList);
    countUsers(usersList);
    countActiveUsers(usersList);
    countInactiveUsers(usersList);
    countActivePercentage(usersList);
}
/* Criar cartão de utilizador */
function createUserCard(user, userList) {
    const divUserCard = document.createElement("div");
    divUserCard.className = "userCard";
    divUserCard.addEventListener("click", () => showUserDetails(user));
    //para mostrar dados de utilizador
    const divUserCardContent = document.createElement("div");
    divUserCardContent.className = "userCardContent";
    divUserCard.appendChild(divUserCardContent);
    const divCardId = document.createElement("div");
    divCardId.textContent = `ID do Utilizador: ${user.id}`;
    divUserCardContent.appendChild(divCardId);
    const divCardName = document.createElement("div");
    divCardName.textContent = `${user.name}`;
    divUserCardContent.appendChild(divCardName);
    const divCardEmail = document.createElement("div");
    divCardEmail.textContent = `${user.email}`;
    divUserCardContent.appendChild(divCardEmail);
    const divCardStatus = document.createElement("div");
    divCardStatus.textContent = `${user.isAtive ? "ativo" : "Inativo"}`;
    //Mostra o estado com texto ou cor diferente
    divCardStatus.style.color = user.isAtive ? "green" : "red";
    divUserCardContent.appendChild(divCardStatus);
    const divCardTasks = document.createElement("div");
    divCardTasks.className = "tasks";
    divCardTasks.textContent = "0 tarefas atribuídas";
    divUserCardContent.appendChild(divCardTasks);
    //para agrupar os botoes
    const divUserCardBtn = document.createElement("div");
    divUserCardBtn.className = "userCardBtn";
    divUserCard.appendChild(divUserCardBtn);
    const bntToggle = document.createElement("button");
    bntToggle.textContent = user.isAtive
        ? "Desativar Utilizador"
        : "Ativar Utilizador";
    bntToggle.addEventListener("click", () => toggleUserState(user.id, userList));
    divUserCardBtn.appendChild(bntToggle);
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "remove-btn";
    btnRemover.addEventListener("click", () => {
        const updatedUserList = removeUserByID(user.id, userList);
        if (updatedUserList) {
            //atualiza a lista de utilizadores
            showUsers(updatedUserList);
        }
    });
    divUserCardBtn.appendChild(btnRemover);
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
/* Alternar estado (ativo / inativo) */
function toggleUserState(userID, userList) {
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
/* Desativar utilizador */
function desactivedUser(userID, userList) {
    //encontra o utilizador pelo ID
    const user = userList.find((user) => user.id === userID);
    //se o utilizador for encontrado
    if (user) {
        //desativa o utilizador
        user.desativar();
        //atualiza a exibição dos utilizadores
        showUsers(userList);
    }
}
/* Remover utilizador */
function removeUserByID(userID, userList) {
    // Usa filter() para criar um novo array sem o utilizador com o ID especificado
    const updatedUserList = userList.filter((user) => user.id !== userID);
    //retorna a lista atualizada
    return updatedUserList;
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
    const userDetails = document.createElement("div");
    userDetails.id = "userDetails";
    userDetails.className = "user-details";
    const title = document.createElement("h3");
    title.textContent = "Detalhes do Utilizador";
    userDetails.appendChild(title);
    const detailName = document.createElement("p");
    detailName.id = "detailName";
    detailName.innerHTML = `<strong>Nome:</strong> ${user.name}`;
    userDetails.appendChild(detailName);
    const detailEmail = document.createElement("p");
    detailEmail.id = "detailEmail";
    detailEmail.innerHTML = `<strong>Email:</strong> ${user.email}`;
    userDetails.appendChild(detailEmail);
    const detailId = document.createElement("p");
    detailId.id = "detailId";
    detailId.innerHTML = `<strong>ID:</strong> ${user.id}`;
    userDetails.appendChild(detailId);
    const detailStatus = document.createElement("p");
    detailStatus.id = "detailStatus";
    detailStatus.innerHTML = `<strong>Status:</strong> ${user.isAtive ? "Ativo" : "Inativo"}`;
    userDetails.appendChild(detailStatus);
    modalContent.appendChild(userDetails);
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
/* Contador de utilizadores ativos */
function countActiveUsers(usersList) {
    const activeUsers = usersList.filter((user) => user.isAtive);
    const activeUsersElement = document.querySelector("#ActiveUsers");
    activeUsersElement.textContent = `Utilizadores Ativos: ${activeUsers.length}`;
}
/* Contador de utilizadores inativos */
function countInactiveUsers(usersList) {
    const inactiveUsers = usersList.filter((user) => !user.isAtive);
    const inactiveUsersElement = document.querySelector("#InactiveUsers");
    inactiveUsersElement.textContent = `Utilizadores Inativos: ${inactiveUsers.length}`;
}
/* Contador de utilizadores */
function countUsers(usersList) {
    const totalUsers = document.querySelector("#TotalUsers");
    totalUsers.textContent = `Total de utilizadores: ${usersList.length}`;
}
/* Percentagem de utilizadores ativos */
function countActivePercentage(usersList) {
    const activeUsers = usersList.filter((user) => user.isAtive).length;
    const totalUsers = usersList.length;
    const percentage = totalUsers > 0 ? ((activeUsers / totalUsers) * 100).toFixed(2) : 0;
    const activePercentageElement = document.querySelector("#ActivePercentage");
    activePercentageElement.textContent = `Percentagem de utilizadores ativos: ${percentage}%`;
}
