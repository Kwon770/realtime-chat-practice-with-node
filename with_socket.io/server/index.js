// use require() from NodeJs
const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Server Socket
io.on("connection", (socket) => {
  console.log("We have a new connection !!");

  // Socket Listenr
  // (LISTENER KEYWORD, DATA, DATA, ...)
  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);

    // const error = true;
    // if (error) {
    //   callback({ error: "error" });
    // }
  });

  socket.on("disconnect", () => {
    console.log("User had left !!");
  });
});

app.use(router);

// (PORT, CALLBACK)
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
