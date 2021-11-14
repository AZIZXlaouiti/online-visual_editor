import { port } from "../../globals"
const app = require("express")
const http = require("http").Server(app)
const redis = require("socket.io-redis")

const io = require("socket.io")(http , {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  })
  
let basicNodesInitialValue = 
  [
    {
        type: "h1",
        children: [
            {
                text: "🧱 Elements"
            }
        ]
    },
    {
        type: "h2",
        children: [
            {
                text: "🔥"
            },
            {
                text: " Basic Elements",
                highlight: true
            }
        ]
    },
    {
        type: "blockquote",
        children: [
            {
                text: "Blockquote"
            }
        ]
    },
    {
        type: "p",
        children: [
            {
                text: "This text is bold."
            }
        ]
    },
    {
        type: "p",
        children: [
            {
                text: "This text is italic.",
                italic: true
            }
        ]
    },
    {
        type: "p",
        children: [
            {
                text: "This text is underlined.",
                code: true
            }
        ]
    },
    {
        type: "p",
        children: [
            {
                text: "This text is bold, italic and underlined.",
                italic: true,
                underline: true
            }
        ]
    }

  ]

// io.adapter(redis( { host: 'localhost' , port: 6379 }))  
io.on('connection', async(socket) => {
    io.emit("init-value", basicNodesInitialValue)
    socket.on('new-operations', (data) => {
       basicNodesInitialValue = data
       io.emit('new-remote-operations', data);
    });
});

// listen for socket connection
http.listen(4000 , async()=>{
    console.log("listening on *:4000")
})

