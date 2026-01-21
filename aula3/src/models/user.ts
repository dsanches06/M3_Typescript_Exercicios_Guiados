export interface IUser {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

export class UserClass implements IUser {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public active: boolean = true,
  ) {}

  toggleActive() {
    this.active = !this.active;
  }
}
