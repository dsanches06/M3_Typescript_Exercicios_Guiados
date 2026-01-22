import { UserClass } from "@models";

const users: UserClass[] = [];

export function addUser(user: UserClass) {
  users.push(user);
}

export function removeUser(id: number) {
  return users.filter((user) => user.id !== id);
}

export function getActiveUsers() {
  return users.filter((user) => user.active);
}
