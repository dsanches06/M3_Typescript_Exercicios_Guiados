/*  Estrutura HTML (cartões) */

import { UserClass } from "./UserClass.js";

const usersContainer = document.querySelector(
  "#usersContainer"
) as HTMLDivElement;

/* Criar cartão de utilizador */
function createUserCard(user: UserClass, userList: UserClass[]): void {
  const divUserCard = document.createElement("div") as HTMLDivElement;
  divUserCard.className = "userCard";
  divUserCard.addEventListener("click", showUserDetails.bind(null, user));

  const divCardName = document.createElement("div") as HTMLDivElement;
  divCardName.textContent = `${user.name}`;
  divUserCard.appendChild(divCardName);

  const divCardEmail = document.createElement("div") as HTMLDivElement;
  divCardEmail.textContent = `${user.email}`;
  divUserCard.appendChild(divCardEmail);

  const divCardStatus = document.createElement("div") as HTMLDivElement;
  divCardStatus.textContent = `${user.isAtive ? "ativo" : "Inativo"}`;
  //Mostra o estado com texto ou cor diferente
  divCardStatus.style.color = user.isAtive ? "green" : "red";
  divUserCard.appendChild(divCardStatus);

  const divCardTasks = document.createElement("div") as HTMLDivElement;
  divCardTasks.className = "tasks";
  divCardTasks.textContent = "0 tarefas atribuídas";
  divUserCard.appendChild(divCardTasks);

  const bntDesativar= document.createElement("button") as HTMLButtonElement;
  bntDesativar.textContent = "Desativar Utilizador";
  bntDesativar.addEventListener(
    "click",
    desactivedUser.bind(null, user.id, userList)
  );
  divUserCard.appendChild(bntDesativar);

  usersContainer.appendChild(divUserCard);
}

/* Função de renderização */
export function renderUsers(userList: UserClass[]) {
  //Limpa o contentor HTML.
  usersContainer.innerHTML = "";
  userList.forEach((user) =>
    //Para cada utilizador, cria um cartão HTML.
    createUserCard(user, userList)
  );
}

/* Desativar utilizador */
function desactivedUser(userID: number, userList: UserClass[]) {
  const user = userList.find((user) => user.id === userID);
  if (user) {
    user.desativar();
    renderUsers(userList);
  }
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
  modalContent.appendChild(closeBtn);

  const title = document.createElement("h2") as HTMLHeadingElement;
  title.textContent = user.name;
  modalContent.appendChild(title);

  const emailPara = document.createElement("p") as HTMLParagraphElement;
  emailPara.innerHTML = `<strong>Email:</strong> ${user.email}`;
  modalContent.appendChild(emailPara);

  const idPara = document.createElement("p") as HTMLParagraphElement;
  idPara.innerHTML = `<strong>ID:</strong> ${user.id}`;
  modalContent.appendChild(idPara);

  const statusPara = document.createElement("p") as HTMLParagraphElement;
  statusPara.innerHTML = `<strong>Status:</strong> ${
    user.isAtive ? "Ativo" : "Inativo"
  }`;
  modalContent.appendChild(statusPara);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  closeModal(modal);
}

/* Função para fechar o modal */
export function closeModal(modal: HTMLDivElement) {
  const closeBtn = modal.querySelector(".close") as HTMLSpanElement;
  closeBtn.addEventListener("click", () => modal.remove());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

/* Função para abrir o modal de formulario */
export function openFormModal() {
  const modalForm = document.querySelector("#modalForm") as HTMLDivElement;
  modalForm.style.display = "flex";
  closeModal(modalForm);
}

/* Função para adicionar novo utilizador */
export function addNewUser(id: number): UserClass {
  //Lê os valores dos inputs.
  const nameInput = document.querySelector("#nameInput") as HTMLInputElement;
  const name = nameInput.value;
  const emailInput = document.querySelector("#emailInput") as HTMLInputElement;
  const email = emailInput.value;
  //Limpa os valores dos inputs.
  nameInput.value = "";
  emailInput.value = "";
  //retorna um novo objeto do tipo UserClass
  return new UserClass(id, name, email);
}