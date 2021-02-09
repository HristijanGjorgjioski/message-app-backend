let io;

module.exports = {
    init: httpServer => {
        io = require("socket.io")(httpServer, {
            cors: {
              origin: "http://localhost:3000",
              methods: ["GET", "POST"],
              allowHeaders: ['Access-Control-Allow-Origin', '*']
            }
        });
        return io;
    },
    getIO: () => {
        if(!io) {
            throw new Error('Socket io NOT INITIALIZED');
        }
        return io;
    }
}