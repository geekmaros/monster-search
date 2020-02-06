import React, { Component } from 'react';
// import logo from './logo.svg';


import { CardList } from './components/card-list/card-list.components'
import { SearchBar } from './components/search-bar/searchbar.components'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({ monsters: res })
    })
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  render() {
    //destructure so we can have our monster and searchField variable
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBar placeholder="Search Monster 👾" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
        {/* {eslint-disable-next-line} */}
        {filteredMonsters.length === 0 ? <h1>Monster Not Found <span role="img" aria-label="monster">👾🌝👾</span> </h1> : ''}
      </div>
    );
  }

}
export default App;