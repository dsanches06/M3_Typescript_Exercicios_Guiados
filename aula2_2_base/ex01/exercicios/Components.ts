/*  Estrutura HTML (cartões) */

import { UserClass } from "./UserClass.js";

const usersContainer = document.querySelector(
  "#usersContainer"
) as HTMLDivElement;

function createUserCard(user: UserClass, userList: UserClass[]): void {
  const divUserCard = document.createElement("div") as HTMLDivElement;

  const divCardName = document.createElement("div") as HTMLDivElement;
  divCardName.textContent = `${user.name}`;
  divUserCard.appendChild(divCardName);

  const divCardEmail = document.createElement("div") as HTMLDivElement;
  divCardEmail.textContent = `${user.email}`;
  divUserCard.appendChild(divCardEmail);

  const divCardStatus = document.createElement("div") as HTMLDivElement;
  divCardStatus.textContent = `${user.isAtive ? "active" : "deactived"}`;
  //Mostra o estado com texto ou cor diferente
  divCardStatus.style.color = user.isAtive ? "green" : "red";
  divUserCard.appendChild(divCardStatus);

  const bntDeactived = document.createElement("button") as HTMLButtonElement;
  bntDeactived.textContent = "Deactivate";
  bntDeactived.addEventListener(
    "click",
    deactivedUser.bind(null, user.id, userList)
  );
  divUserCard.appendChild(bntDeactived);

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

/* Adicionar utilizador via formulário */



/* Desativar utilizador */
function deactivedUser(userID: number, userList: UserClass[]) {
  const user = userList.find((user) => user.id === userID);
  if (user) {
    user.desatived();
    renderUsers(userList);
  }
}
