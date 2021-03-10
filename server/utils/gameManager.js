const { GameManager } = require("js-gamemanager");

class TriviaManager extends GameManager {

    constructor() {
        super();
        this.quizzes = {};
    }

    addGame(hostID, roomName) {
        let game = {
            host: hostID,
            room: roomName,
            active: false
        }
        this.games.push(game);
        return game

    };

}

module.exports = {TriviaManager}