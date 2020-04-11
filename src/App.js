import React, {Component} from 'react';
import tommy from './img/tommy.png';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Tommy',
      drink: 'Soda',
      consumed: 0
    }
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={tommy} className="App-logo" alt="logo" />
            <p>
              {this.state.name} drank {this.state.consumed} {this.state.drink}{(this.state.consumed != 1) ? "s" : ""} for lunch.
            </p>
            <button onClick={() => this.setState({consumed: this.state.consumed + 1})}>Earn PlayCoin</button>
          </header>
        </div>
    );
  }
}

export default App;
