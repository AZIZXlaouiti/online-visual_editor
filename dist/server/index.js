"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("express");
const http = require("http").Server(app);
const redis = require("socket.io-redis");
const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});
const InitialValue = [
    {
        type: "h1",
        children: [
            {
                text: "🧱 Elements"
            }
        ]
    }
];
const pubClient = {
    host: process.env.REDIS_HOST,
    port: 6379
};
const foo = redis(pubClient);
io.attach(http);
io.adapter(foo);
io.on('connection', async (socket) => {
    io.emit("init-value", InitialValue);
    socket.on('new-operations', (data) => {
        io.emit('new-remote-operations', data);
    });
});
http.listen(4000, async () => {
    console.log("listening on *:4000");
});
//# sourceMappingURL=index.js.map