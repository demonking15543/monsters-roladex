import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monsters:[],
       searchFeild : ""


    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters:users}))
  }
    
  render() {
    const { monsters, searchFeild } = this.state;
    const fiterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    )
    return (
    <div className='App'>
      <SearchBox 
      placeholder="search Box" 
      handleChange={e=>this.setState({searchFeild:e.target.value})} />
      <CardList monsters={fiterMonsters} />
      


    </div>
    );
  }
}
