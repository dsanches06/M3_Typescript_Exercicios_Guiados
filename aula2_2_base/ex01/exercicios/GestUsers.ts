/* Array de utilizadores */
import { renderUsers } from "./Components.js";
import { IUser } from "./IUser.js";
import { UserClass } from "./UserClass.js";

const usersList: IUser[] = [
  new UserClass(1, "Alice Morais", "alice@example.com"),
  new UserClass(2, "Bob Silva", "bob@example.com"),
];

export default function showUsers(): void {
  renderUsers(usersList as UserClass[]);
}

function getLastUserId(): number {
  let lastUserID = 0;
  //obter o ultimo utilizador no array
  //const lastUser = usersList.at(-1);
  const lastUser = usersList[usersList.length - 1];
  console.log("ID1: ", lastUser.id);
  // Check if the last user exists and get the last user's ID
  if (lastUser) {
    lastUserID = lastUser.id++;
  }
  return lastUserID++;
}

export function addUser() {
  let newId = getLastUserId();
  const nameInput = document.getElementById("#nameInput") as HTMLInputElement;
  const name = nameInput.value;
  console.log(name)

  const emailInput = document.getElementById("#emailInput") as HTMLInputElement;
  const email = emailInput.value;
    console.log(email)

  const user = new UserClass(newId, name, email);

  usersList.push(user);
  showUsers();
}

function addNewUser(id: number): UserClass {
  //Lê os valores dos inputs.
  const nameInput = document.querySelector("#nameInput") as HTMLInputElement;
  const name = nameInput.value;

  const emailInput = document.querySelector("#emailInput") as HTMLInputElement;
  const email = emailInput.value;
  //retorna um novo objeto do tipo UserClass
  return new UserClass(id, name, email);
}
