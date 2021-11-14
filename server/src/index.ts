// import { Server } from 'socket.io';
// import { createAdapter } from '@socket.io/redis-adapter';
// import { RedisClient } from 'redis';
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
// const pubClient = new RedisClient({ host: 'localhost', port: 6379 });
// const subClient = pubClient.duplicate();

// io.adapter(createAdapter(pubClient, subClient));
interface Adapter {
   host: string,
   port: number

}
const InitialValue = 
  [
    {
        type: "h1",
        children: [
            {
                text: "🧱 Elements"
            }
        ]
    }
  ]  


const pubClient = <Adapter>{
    host : process.env.REDIS_HOST,
    port : 6379
}
const foo = redis(pubClient)
io.attach(http)
io.adapter(foo)
io.on('connection', async(socket: any) => {
    io.emit("init-value", InitialValue)
    socket.on('new-operations', (data:any) => {
      //  basicNodesInitialValue = data
       io.emit('new-remote-operations', data);
    });
});

// listen for socket connection
http.listen(4000 , async()=>{
    console.log("listening on *:4000")
})
console.log("hello")
