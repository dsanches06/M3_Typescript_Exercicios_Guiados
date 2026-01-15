import { UserClass } from "../Model/UserClass.js";

/* Função para abrir o modal de formulario */
export function openFormModal() {
  const modalForm = document.querySelector("#modalForm") as HTMLDivElement;
  modalForm.style.display = "flex";
  closeModal(modalForm);
}

/* Função para fechar o modal */
export function closeModal(modal: HTMLDivElement) {
  const closeBtn = modal.querySelector(".close") as HTMLSpanElement;
  closeBtn.addEventListener("click", () => modal.remove());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

/* Função que cria o modal para mostrar detalhes do tulizador */
export function modalUserDetail(user: UserClass): HTMLDivElement {
  const title = document.createElement("h3") as HTMLHeadingElement;
  title.textContent = "Detalhes do Utilizador";

  const detailName = document.createElement("p") as HTMLParagraphElement;
  detailName.id = "detailName";
  detailName.innerHTML = `<strong>Nome:</strong> ${user.name}`;

  const detailEmail = document.createElement("p") as HTMLParagraphElement;
  detailEmail.id = "detailEmail";
  detailEmail.innerHTML = `<strong>Email:</strong> ${user.email}`;

  const detailId = document.createElement("p") as HTMLParagraphElement;
  detailId.id = "detailId";
  detailId.innerHTML = `<strong>ID:</strong> ${user.id}`;

  const detailStatus = document.createElement("p") as HTMLParagraphElement;
  detailStatus.id = "detailStatus";
  detailStatus.innerHTML = `<strong>Status:</strong> ${
    user.isAtive ? "Ativo" : "Inativo"
  }`;

  const userDetails = document.createElement("div") as HTMLDivElement;
  userDetails.appendChild(title);
  userDetails.appendChild(detailId);
  userDetails.appendChild(detailName);
  userDetails.appendChild(detailEmail);
  userDetails.appendChild(detailStatus);

  return userDetails;
}

/*  */
export function modalUserContent(user: UserClass): HTMLDivElement {
  const divCardId = document.createElement("div") as HTMLDivElement;
  divCardId.textContent = `ID do Utilizador: ${user.id}`;

  const divCardName = document.createElement("div") as HTMLDivElement;
  divCardName.textContent = `${user.name}`;

  const divCardEmail = document.createElement("div") as HTMLDivElement;
  divCardEmail.textContent = `${user.email}`;

  const divCardStatus = document.createElement("div") as HTMLDivElement;
  divCardStatus.textContent = `${user.isAtive ? "ativo" : "Inativo"}`;

  //Mostra o estado com texto ou cor diferente
  divCardStatus.style.color = user.isAtive ? "green" : "red";

  const divCardTasks = document.createElement("div") as HTMLDivElement;
  divCardTasks.className = "tasks";
  divCardTasks.textContent = "0 tarefas atribuídas";

  const divUserCardContent = document.createElement("div") as HTMLDivElement;
  divUserCardContent.appendChild(divCardId);
  divUserCardContent.appendChild(divCardName);
  divUserCardContent.appendChild(divCardEmail);
  divUserCardContent.appendChild(divCardStatus);
  divUserCardContent.appendChild(divCardTasks);

  return divUserCardContent;
}
