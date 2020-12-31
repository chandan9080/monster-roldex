import './App.css'
import { CardList } from './components/card-list/cardlist.components'
import React, { Component } from 'react'
import { SearchBox } from './components/search-box/searchbox.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }
  handleChange =(e)=> {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filterdMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    )
    return (
      <div className="App">
        <h1 className="title">Monster Roldex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange} />
        <CardList monsters={filterdMonster}></CardList>
      </div>
    )
  }
}

export default App
