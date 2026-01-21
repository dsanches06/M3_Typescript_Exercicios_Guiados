const users = [];
export function addUser(user) {
    users.push(user);
}
export function removeUser(id) {
    return users.filter((user) => user.id !== id);
}
export function getActiveUsers() {
    return users.filter((user) => user.active);
}
