import { showUsers } from "./UsersUI.js";
import { toggleUserState, removeUserByID } from "./UsersUI.js";
import { closeModal, modalUserContent, modalUserDetail } from "./ModalUI.js";
const usersContainer = document.querySelector("#usersContainer");
/* Criar cartão de utilizador */
export function createUserCard(user, userList) {
    const divUserCard = document.createElement("div");
    divUserCard.className = "userCard";
    divUserCard.addEventListener("click", () => showUserDetails(user));
    const divUserCardContent = modalUserContent(user);
    divUserCardContent.className = "userCardContent";
    divUserCard.appendChild(divUserCardContent);
    const divUserCardBtn = userCardBtn(user, userList);
    divUserCardBtn.className = "userCardBtn";
    divUserCard.appendChild(divUserCardBtn);
    usersContainer.appendChild(divUserCard);
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
    const userDetails = modalUserDetail(user);
    userDetails.id = "userDetails";
    userDetails.className = "user-details";
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(userDetails);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    closeModal(modal);
}
function userCardBtn(user, userList) {
    const bntToggle = document.createElement("button");
    bntToggle.textContent = user.isAtive
        ? "Desativar Utilizador"
        : "Ativar Utilizador";
    bntToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleUserState(user.id, userList);
    });
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "remove-btn";
    btnRemover.addEventListener("click", (event) => {
        event.stopPropagation();
        const updatedUserList = removeUserByID(user.id, userList);
        if (updatedUserList) {
            //atualiza a lista de utilizadores
            showUsers(updatedUserList);
        }
    });
    //para agrupar os botoes
    const divUserCardBtn = document.createElement("div");
    divUserCardBtn.appendChild(bntToggle);
    divUserCardBtn.appendChild(btnRemover);
    return divUserCardBtn;
}
