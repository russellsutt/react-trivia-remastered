const fetch = require("node-fetch");

class TriviaGameManager {

    constructor() {
        this.games = [];
    }

    addGame(hostID, roomName, category, difficulty, amount) {

        let game;
        let questions;

        const triviaUrl = () => {
            if(category !== '') {
                return `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
            } else {
                return `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
            }
        }

        fetch(triviaUrl())
            .then(resp => resp.json())
            .then(resp => {
                questions = resp;
                game = {
                    host: hostID,
                    room: roomName,
                    questions: questions,
                    players: [],
                    active: false
                };
                this.games.push(game);
                return game;
            })
            .catch(err => window.alert(err.message))
    };

    checkRoomName = (roomName) => {
        if (this.games.length === 0) {
            return true
        } else {
            return !this.games.filter(game => game.roomName !== roomName)
        }
    }

}

module.exports = {TriviaGameManager}