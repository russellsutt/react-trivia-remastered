const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const { TriviaGameManager } = require("./utils/TrviaGameManager");

let games = new TriviaGameManager()

server.listen(3000, () => {
    console.log('listening on 3000')
})


io.on('connection', (socket) => {
    console.log(`${socket.id} connected`)


    socket.on('createRoom', (config, callback) => {
        console.log(config)
        if (games.checkRoomName(config.roomName)) {
            games.addGame(socket.id, config.roomName, config.category, config.difficulty, config.amount)
            socket.join(config.roomName)
            callback({ code: "success"})
        } else {
            callback({
                code: "ROOMERROR",
                msg: `That room already exists.`
            })
        }
    })

    socket.on('addPlayer', (config, callback) => {
        
    }




})