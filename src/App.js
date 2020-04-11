import React, {Component} from 'react';
import tommy from './img/tommy.png';
import './App.css';

import {CardList} from "./components/card-list/card-list";
import {Tommy} from "./components/tommy";

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
            <header className="App-header">
              <CardList name="Gordon" monsters={this.state.monsters}/>
            </header>
        </div>
    );
  }
}

export default App;
