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
  console.log(socket.id)
  socket.on("chat message", (data):void =>{
    data = {...data, "id": socket.handshake.issued}
    io.emit("chat message", data);
  })

  socket.on("create user", ():void =>{
    io.emit("create user", socket.handshake.issued);
  })

  socket.on("disconnect", ():void => {
    console.log("A client disconnected");
  });
});
