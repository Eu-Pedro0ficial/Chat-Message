import express from "express";
import { Server, Socket } from "socket.io";
import cors from "cors";
import { createUser, getUser } from "./db/databaseLoca";

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

  socket.on("createUser", (data: any) => {
    createUser(data);
    io.emit("created User", true);
  });
  
  socket.on("getUser", (data: any) => {
    const getUserFilter =  getUser(data);
    console.log(getUserFilter, data)
    if(getUserFilter){
      io.emit("getUser", getUserFilter);
      return;
    }
    return io.emit("getUser","Usuario não encontrado")
  });

  socket.on("creatingRoomWithFilteredUser",(data:any) => {
    socket.join(`${data.user.id}/${data.otherUser.id}`);

    io.emit("creted room with user", `${data.user.id}/${data.otherUser.id}`)
  })

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});
