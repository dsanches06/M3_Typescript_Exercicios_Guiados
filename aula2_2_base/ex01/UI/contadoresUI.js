/* Contador de utilizadores ativos */
export function countActiveUsers(usersList) {
    const activeUsers = usersList.filter((user) => user.isAtive);
    const activeUsersElement = document.querySelector("#ActiveUsers");
    activeUsersElement.textContent = `Utilizadores Ativos: ${activeUsers.length}`;
}
/* Contador de utilizadores inativos */
export function countInactiveUsers(usersList) {
    const inactiveUsers = usersList.filter((user) => !user.isAtive);
    const inactiveUsersElement = document.querySelector("#InactiveUsers");
    inactiveUsersElement.textContent = `Utilizadores Inativos: ${inactiveUsers.length}`;
}
/* Contador de utilizadores */
export function countUsers(usersList) {
    const totalUsers = document.querySelector("#TotalUsers");
    totalUsers.textContent = `Total de utilizadores: ${usersList.length}`;
}
/* Percentagem de utilizadores ativos */
export function countActivePercentage(usersList) {
    const activeUsers = usersList.filter((user) => user.isAtive).length;
    const totalUsers = usersList.length;
    const percentage = totalUsers > 0 ? ((activeUsers / totalUsers) * 100).toFixed(2) : 0;
    const activePercentageElement = document.querySelector("#ActivePercentage");
    activePercentageElement.textContent = `Percentagem de utilizadores ativos: ${percentage}%`;
}
