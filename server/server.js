const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const { TriviaManager } = require("./utils/triviaGameManager");

let games = new TriviaManager()

server.listen(3000, () => {
    console.log('listening on 3000')
})


io.on('connection', (socket) => {
    console.log(`${socket.id} connected`)


    socket.on('createRoom', (config, callback) => {
        if (games.checkRoomName(config.roomName)) {
            games.addGame(socket.id, config.roomName)
            socket.join(config.roomName)
            callback({ code: "success"})
        } else {
            callback({
                code: "ROOMERROR",
                msg: `Cannot use empty string for room name.`
            })
        }
    })




})