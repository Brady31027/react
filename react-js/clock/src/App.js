import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      time: 'NULL'
    };

    setInterval(
      () => { this.setState({ time: new Date().toLocaleTimeString() }); }, 
      1000
    );
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          
        <h1>Hello World! {this.state.time}</h1>
      </div>
    );
  }
}

export default App;
