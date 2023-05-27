"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = exports.createUser = void 0;
const db = [
    {
        name: "Pedro",
        id: "1",
        password: "123"
    },
    {
        name: "Arthur",
        id: "2",
        password: "123"
    },
    {
        name: "admin",
        id: "3",
        password: "admin"
    }
];
const createUser = (user) => db.push(user);
exports.createUser = createUser;
const getUsers = () => db;
exports.getUsers = getUsers;
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
