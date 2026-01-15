/*  Estrutura HTML (cartões) */
import { UserClass } from "../Model/UserClass.js";
import { showUsers } from "./UsersUI.js";
import { toggleUserState, removeUserByID } from "./UsersUI.js";
import { closeModal, modalUserContent, modalUserDetail } from "./ModalUI.js";

const usersContainer = document.querySelector(
  "#usersContainer"
) as HTMLDivElement;

/* Criar cartão de utilizador */
export function createUserCard(user: UserClass, userList: UserClass[]): void {
  const divUserCard = document.createElement("div") as HTMLDivElement;
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
function showUserDetails(user: UserClass) {
  const modal = document.createElement("div") as HTMLDivElement;
  modal.className = "modal";
  modal.style.display = "flex";

  const modalContent = document.createElement("div") as HTMLDivElement;
  modalContent.className = "modal-content";

  const closeBtn = document.createElement("span") as HTMLSpanElement;
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

function userCardBtn(user: UserClass, userList: UserClass[]): HTMLDivElement {
  const bntToggle = document.createElement("button") as HTMLButtonElement;
  bntToggle.textContent = user.isAtive
    ? "Desativar Utilizador"
    : "Ativar Utilizador";
  bntToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleUserState(user.id, userList);
  });

  const btnRemover = document.createElement("button") as HTMLButtonElement;
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
  const divUserCardBtn = document.createElement("div") as HTMLDivElement;
  divUserCardBtn.appendChild(bntToggle);
  divUserCardBtn.appendChild(btnRemover);

  return divUserCardBtn;
}
