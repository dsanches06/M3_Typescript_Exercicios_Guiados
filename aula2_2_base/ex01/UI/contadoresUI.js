"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countActiveUsers = countActiveUsers;
exports.countInactiveUsers = countInactiveUsers;
exports.countUsers = countUsers;
exports.countActivePercentage = countActivePercentage;
/* Contador de utilizadores ativos */
function countActiveUsers(usersList) {
    var activeUsers = usersList.filter(function (user) { return user.isAtive; });
    var activeUsersElement = document.querySelector("#ActiveUsers");
    activeUsersElement.textContent = "Utilizadores Ativos: ".concat(activeUsers.length);
}
/* Contador de utilizadores inativos */
function countInactiveUsers(usersList) {
    var inactiveUsers = usersList.filter(function (user) { return !user.isAtive; });
    var inactiveUsersElement = document.querySelector("#InactiveUsers");
    inactiveUsersElement.textContent = "Utilizadores Inativos: ".concat(inactiveUsers.length);
}
/* Contador de utilizadores */
function countUsers(usersList) {
    var totalUsers = document.querySelector("#TotalUsers");
    totalUsers.textContent = "Total de utilizadores: ".concat(usersList.length);
}
/* Percentagem de utilizadores ativos */
function countActivePercentage(usersList) {
    var activeUsers = usersList.filter(function (user) { return user.isAtive; }).length;
    var totalUsers = usersList.length;
    var percentage = totalUsers > 0 ? ((activeUsers / totalUsers) * 100).toFixed(2) : 0;
    var activePercentageElement = document.querySelector("#ActivePercentage");
    activePercentageElement.textContent = "Percentagem de utilizadores ativos: ".concat(percentage, "%");
}
