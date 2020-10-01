const express = require("express");

const server = express();

server.use(express.json());

server.use(require("cors")());

server.use("/songs", require("./routes/songs"));

module.exports = server;
