/*  Estrutura HTML (cartões) */
const usersContainer = document.querySelector("#usersContainer");
function createUserCard(user, userList) {
    const divUserCard = document.createElement("div");
    const divCardName = document.createElement("div");
    divCardName.textContent = `${user.name}`;
    divUserCard.appendChild(divCardName);
    const divCardEmail = document.createElement("div");
    divCardEmail.textContent = `${user.email}`;
    divUserCard.appendChild(divCardEmail);
    const divCardStatus = document.createElement("div");
    divCardStatus.textContent = `${user.isAtive ? "active" : "deactived"}`;
    //Mostra o estado com texto ou cor diferente
    divCardStatus.style.color = user.isAtive ? "green" : "red";
    divUserCard.appendChild(divCardStatus);
    const bntDeactived = document.createElement("button");
    bntDeactived.textContent = "Deactivate";
    bntDeactived.addEventListener("click", deactivedUser.bind(null, user.id, userList));
    divUserCard.appendChild(bntDeactived);
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
/* Adicionar utilizador via formulário */
/* Desativar utilizador */
function deactivedUser(userID, userList) {
    const user = userList.find((user) => user.id === userID);
    if (user) {
        user.desatived();
        renderUsers(userList);
    }
}
