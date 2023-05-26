"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const databaseLoca_1 = require("./db/databaseLoca");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true,
    },
});
io.on("connection", (socket) => {
    socket.on("createUser", (data) => {
        (0, databaseLoca_1.createUser)(data);
        io.emit("created User", true);
    });
    socket.on("getUser", (data) => {
        const getUserFilter = (0, databaseLoca_1.getUser)(data);
        console.log(getUserFilter, data);
        if (getUserFilter) {
            io.emit("getUser", getUserFilter);
            return;
        }
        return io.emit("getUser", "Usuario não encontrado");
    });
    socket.on("creatingRoomWithFilteredUser", (data) => {
        socket.join(`${data.user.id}/${data.otherUser.id}`);
        io.emit("creted room with user", `${data.user.id}/${data.otherUser.id}`);
    });
    socket.on("disconnect", () => {
        console.log("A client disconnected");
    });
});
