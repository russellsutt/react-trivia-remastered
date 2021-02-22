import React, { Component } from 'react';


class LandingPage extends Component {

    



            
    render() {
        return (
            <div>
                <h1> Multiplayer Trivia</h1>
                <button onClick={()=> this.props.history.push('/create')}>Create</button>
                <button>Join </button>
            </div>
        )
    }
}

export default LandingPage