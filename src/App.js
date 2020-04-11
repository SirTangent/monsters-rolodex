import React, {Component} from 'react';
import tommy from './img/tommy.png';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Tommy',
      drink: 'Soda',
      limit: 8,
      consumed: 0,

      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          this.setState({monsters: users})
        })
  }

  render() {

    return (
        <div className="App">
          <div className="Tommy">
            <header className="App-header">
              <img src={tommy} className="App-logo" alt="logo" />
              <p>
                {this.state.name} drank {this.state.consumed} {this.state.drink}{(this.state.consumed != 1) ? "s" : ""} for lunch.
              </p>
              <button onClick={() => {
                if (this.state.consumed < this.state.limit) {
                  this.setState({consumed: this.state.consumed + 1})
                } else {
                  console.log('Tommy has had enough soda!')
                }}} disabled={this.state.consumed >= this.state.limit}>{(this.state.consumed < this.state.limit) ? "Drink Soda" : "Gordon, Im full"}</button>

              <div className="monsters d-block">

                <h3>Credits</h3>
                <hr/>
                {
                  this.state.monsters.map(value => <p key={value.id}> {value.name} </p>)
                }
              </div>
            </header>
          </div>
        </div>
    );
  }
}

export default App;
