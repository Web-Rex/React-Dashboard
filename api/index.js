import app from "./main.js";
import * as io from "socket.io";
import { createServer } from "http";
import { data } from "./db.js";

// [ initializing Socket.io ]
const server = createServer(app);
const socketIo = new io.Server(server, {
  // giving only the front-end access to the socket-api
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
  maxHttpBufferSize: 1e8,
  pingTimeout: 60000,
});

// setting up the methods that can be accessed when a connection is made to the api
socketIo.on("connection", (socket) => {
  console.log("connected");

  // ----------------------------------------------------------------------------- [ current-market price ]
  // this generate a random num and edits the data and then sends the data to socket-endpoint [ "current_market_price" ]
  // it does this every 10seconds
  setInterval(() => {
    const ran = Math.floor(Math.random() * 100) + 1;
    data.value = ran;

    // this sends data to socket-endpoint [ "current_market_price" ]
    socketIo.emit("current_market_price", { status: true, data: data.value });
  }, 10000);

  // ----------------------------------------------------------------------------- [ disconnect ]
  // if the front end disconnects from socket this functions runes
  //  this just sets the data to 100
  socket.on("disconnect", async () => {
    data.value = 100;
    console.log("disconnect");
  });
});

const port = process.env.port || 3000;
server.listen(port, () => {
  console.log(`Portal server is listening on ${port}`);
});
