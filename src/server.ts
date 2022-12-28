// Import modules
import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connect", (socket) => {});

server.listen(9999, () => {
    console.log("[ -- STARTING -- ]");
});
