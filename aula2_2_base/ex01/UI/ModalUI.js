/* Função para abrir o modal de formulario */
export function openFormModal() {
    const modalForm = document.querySelector("#modalForm");
    modalForm.style.display = "flex";
    closeModal(modalForm);
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
/* Função que cria o modal para mostrar detalhes do tulizador */
export function modalUserDetail(user) {
    const title = document.createElement("h3");
    title.textContent = "Detalhes do Utilizador";
    const detailName = document.createElement("p");
    detailName.id = "detailName";
    detailName.innerHTML = `<strong>Nome:</strong> ${user.name}`;
    const detailEmail = document.createElement("p");
    detailEmail.id = "detailEmail";
    detailEmail.innerHTML = `<strong>Email:</strong> ${user.email}`;
    const detailId = document.createElement("p");
    detailId.id = "detailId";
    detailId.innerHTML = `<strong>ID:</strong> ${user.id}`;
    const detailStatus = document.createElement("p");
    detailStatus.id = "detailStatus";
    detailStatus.innerHTML = `<strong>Status:</strong> ${user.isAtive ? "Ativo" : "Inativo"}`;
    const userDetails = document.createElement("div");
    userDetails.appendChild(title);
    userDetails.appendChild(detailId);
    userDetails.appendChild(detailName);
    userDetails.appendChild(detailEmail);
    userDetails.appendChild(detailStatus);
    return userDetails;
}
/*  */
export function modalUserContent(user) {
    const divCardId = document.createElement("div");
    divCardId.textContent = `ID do Utilizador: ${user.id}`;
    const divCardName = document.createElement("div");
    divCardName.textContent = `${user.name}`;
    const divCardEmail = document.createElement("div");
    divCardEmail.textContent = `${user.email}`;
    const divCardStatus = document.createElement("div");
    divCardStatus.textContent = `${user.isAtive ? "ativo" : "Inativo"}`;
    //Mostra o estado com texto ou cor diferente
    divCardStatus.style.color = user.isAtive ? "green" : "red";
    const divCardTasks = document.createElement("div");
    divCardTasks.className = "tasks";
    divCardTasks.textContent = "0 tarefas atribuídas";
    const divUserCardContent = document.createElement("div");
    divUserCardContent.appendChild(divCardId);
    divUserCardContent.appendChild(divCardName);
    divUserCardContent.appendChild(divCardEmail);
    divUserCardContent.appendChild(divCardStatus);
    divUserCardContent.appendChild(divCardTasks);
    return divUserCardContent;
}
