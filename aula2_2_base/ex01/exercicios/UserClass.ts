/*  Classe UtilizadorClass */
import { IUser } from "./IUser.js";

export class UserClass implements IUser {
  id: number;
  name: string;
  email: string;
  isAtive: boolean;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isAtive = true;
  }

  desatived(): void {
    this.isAtive = false;
  }
}
