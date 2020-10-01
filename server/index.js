const server = require("./src/server");

server.listen(process.env.PORT, () => {
  console.log("Server is Running on port", process.env.PORT);
});
