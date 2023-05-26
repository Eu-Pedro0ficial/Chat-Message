"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const db = [];
const createUser = (user) => db.push(user);
exports.createUser = createUser;
const getUser = (user) => db.filter(u => u === user);
exports.getUser = getUser;
