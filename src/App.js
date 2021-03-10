import './App.css';
import React, { Component } from 'react';
import AppRouter from './router/AppRouter'
import io from 'socket.io-client'

export const socket = io('localhost:3000')

class App extends Component {



  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
