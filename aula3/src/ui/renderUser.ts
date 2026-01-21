import { UserClass } from "../models";

export function renderUser(users: UserClass[]) {
  const container = document.getElementById("user-container")!;
  container.innerHTML = "";
  users.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = "";
    div.className = "user-card";
    div.innerHTML = `
      <strong>${user.name}</strong>
      (${user.active ? "Activo" : "Inactivo"})
      <button id="toggle-${user.id}">Toggle Active</button>
    `;
    container.appendChild(div);
    const button = document.getElementById(`toggle-${user.id}`)!;
    button.addEventListener("click", () => {
      user.toggleActive();
      renderUser(users);
    });
  });
}
