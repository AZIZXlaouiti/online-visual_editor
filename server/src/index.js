const app = require("express")
const http = require("http").Server(app)
const io = require("socket.io")(http , {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  })
io.on('connection', async(socket) => {
    console.log("user connected")
    socket.on('new-operations', (msg) => {
    socket.broadcast.emit('new-remote-operations', msg);
    });
});

// listen for socket connection
http.listen(4000 , async()=>{
    console.log("listening on *:4000")
})
