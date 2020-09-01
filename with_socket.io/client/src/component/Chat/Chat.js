import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

// location comes from react router, given as props
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    // parse data from path(url) [return as Object]
    const { name, room } = queryString.parse(location.search);

    // Create client socket
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    // Emit message with data to backend
    // (MESSAGE, DATA, DATA, ...)
    socket.emit("join", { name, room }, ({ error }) => {
      // alert(error);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  return <h1>Chat</h1>;
};

export default Chat;
