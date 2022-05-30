const http = require("http")
const express = require("express")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

// Serve public folder to our application
app.use(express.static('public'))

// Creating port to listen on 3000 or the port created by hosting applications
var port = process.env.PORT || 3000;

// create on method with connection so that if new client connection is set up it logs a msg 
io.on("connection", (socket) => {
    console.log("New web socket connection");
  });

// Listen on port 3000
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});