import { io } from "socket.io-client";

export const connectionIo = io("http://localhost:3000");
