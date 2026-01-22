"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClass = void 0;
var UserClass = /** @class */ (function () {
    function UserClass(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isAtive = true;
    }
    UserClass.prototype.desativar = function () {
        this.isAtive = false;
    };
    UserClass.prototype.toggleEstado = function () {
        this.isAtive = !this.isAtive;
    };
    return UserClass;
}());
exports.UserClass = UserClass;
