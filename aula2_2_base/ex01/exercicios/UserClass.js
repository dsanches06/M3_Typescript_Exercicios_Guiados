export class UserClass {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isAtive = true;
    }
    desatived() {
        this.isAtive = false;
    }
}
