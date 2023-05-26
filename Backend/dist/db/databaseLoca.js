"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const db = [
    {
        name: "pedro",
        id: "888",
        password: "123"
    }
];
const createUser = (user) => db.push(user);
exports.createUser = createUser;
const getUser = (data) => {
    const loginFieldName = data.name;
    const loginFieldPassword = data.password;
    const userFound = db.filter(user => {
        if (user.name === loginFieldName) {
            if (user.password === loginFieldPassword) {
                return user;
            }
        }
    });
    if (userFound) {
        return userFound;
    }
    return false;
};
exports.getUser = getUser;
