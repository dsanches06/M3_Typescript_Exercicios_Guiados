import { UserClass } from "@models/index";
import { addUser, getActiveUsers } from "@services/index";
import { renderUser } from "@ui/index";
const user1 = new UserClass(1, "Alice", "alice@email.com");
const user2 = new UserClass(2, "Bob", "bob@email.com");
addUser(user1);
addUser(user2);
renderUser(getActiveUsers());
