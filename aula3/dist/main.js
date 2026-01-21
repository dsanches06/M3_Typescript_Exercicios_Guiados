import { UserClass } from "./models";
import { addUser, getActiveUsers } from "./services";
import { renderUser } from "./ui";
const user1 = new UserClass(1, "Alice", "alice@email.com");
const user2 = new UserClass(2, "Bob", "bob@email.com");
addUser(user1);
addUser(user2);
renderUser(getActiveUsers());
