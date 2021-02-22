import React, { Component } from 'react';



class CreateGame extends Component {

    state = {
        roomName: '',
        amount: 5,
        category: '',
        difficulty: '',

    }


    render() {
        return (
            <div>
                <h1>Create a Game</h1>
            </div>
        )
    }
}

export default CreateGame;