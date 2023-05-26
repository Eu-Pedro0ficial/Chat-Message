import express from "express";
import { Server, Socket } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());
const server = app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

const io = new Server(server, {
  cors: {
    origin: "*", // Replace with the origin of your client application
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

io.on("connection", (socket: Socket) => {
  console.log("A client connected");

  socket.on("message", (data: Socket) => {
    console.log("Received message:", data);
    io.emit("message", data); // Envia a mensagem para todos os clientes conectados
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});
