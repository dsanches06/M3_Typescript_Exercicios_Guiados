/* Array de utilizadores */
import { renderUsers, openFormModal, addNewUser } from "./Components.js";
import { UserClass } from "./UserClass.js";
const usersList = [
    new UserClass(1, "Alice Morais", "alice@example.com"),
    new UserClass(2, "Bob Silva", "bob@example.com"),
];
export default function showUsers() {
    renderUsers(usersList);
}
function getLastUserId() {
    //
    let lastUserID = 0;
    //obter o ultimo utilizador no array
    const lastUser = usersList[usersList.length - 1];
    // Check if the last user exists and get the last user's ID
    if (lastUser) {
        lastUserID = lastUser.id;
    }
    return lastUserID;
}
/* Abrir modal de formulário */
const addUserBtn = document.querySelector("#addUserBtn");
addUserBtn.addEventListener("click", openFormModal);
/* Adicionar utilizador via formulário */
const formUser = document.querySelector("#formUser");
formUser.addEventListener("submit", (event) => {
    event.preventDefault();
    let newId = getLastUserId() + 1;
    const user = addNewUser(newId);
    usersList.push(user);
    showUsers();
});
/*event.preventDefault(); // Prevent form submission
  let newId = getLastUserId();
  const user = addNewUser(newId);
  usersList.push(user);
  showUsers();*/
