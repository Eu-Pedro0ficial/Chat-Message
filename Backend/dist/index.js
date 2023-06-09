"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
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
    console.log(socket.id);
    socket.on("chat message", (data) => {
        data = { ...data, "id": socket.handshake.issued };
        io.emit("chat message", data);
    });
    socket.on("create user", () => {
        io.emit("create user", socket.handshake.issued);
    });
    socket.on("disconnect", () => {
        console.log("A client disconnected");
    });
});
