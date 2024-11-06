import app from "./main.js";
import * as io from "socket.io";
import { createServer } from "http";
import { data } from "./db.js";

// [ Socket.io ]
const server = createServer(app);
const socketIo = new io.Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
  maxHttpBufferSize: 1e8,
  pingTimeout: 60000,
});

socketIo.on("connection", (socket) => {
  // ----------------------------------------------------------------------------- [ Add-New-User ]
  setInterval(() => {
    const ran = Math.floor(Math.random() * 100) + 1;
    data.value = ran;

    socketIo.emit("current_market_price", { status: true, data: data.value });
  }, 10000);

  // ----------------------------------------------------------------------------- [ Add-New-User ]
  socketIo.emit("connect_socket", { status: true, data: data.value }, () => {
    console.log("connected");
  });

  // ----------------------------------------------------------------------------- [ Disconnect-User ]
  socket.on("disconnect", async () => {
    data.value = 100;
    console.log("disconnect");
    socketIo.emit("getMarketPrice", { status: true, data: data });
  });

  // ----------------------------------------------------------------------------- [ New-User-Message ]
  socket.on("sendMessage", async (data) => {
    socketIo.to(session.socketId).emit("getMessage", data.msg);
  });
});

const port = process.env.port || 3000;
server.listen(port, () => {
  console.log(`Portal server is listening on ${port}`);
});
