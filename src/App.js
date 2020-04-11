import React, {Component} from 'react';
import tommy from './img/tommy.png';
import './App.css';

import {CardList} from "./components/card-list/card-list";
import {SearchBox} from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Tommy',
      drink: 'Soda',
      limit: 8,
      consumed: 0,

      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          this.setState({monsters: users})
        })
  }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    };

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <div className="App">
            <header className="App-header">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
            </header>
        </div>
    );
  }
}

export default App;
