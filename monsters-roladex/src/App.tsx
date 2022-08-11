import './App.css';
import { useState,useEffect, ChangeEvent } from 'react';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';
import { getData } from './utils/data.utils'
export type  Monster = {
  id:string,
  name:string,
  email:string
}
const App = () => {
  const [searchField, setsearchField] = useState('')
  const [monsters, setMonsters] = useState<Monster[]>([]);
   const [filterMonsters, setFilterMonsters] = useState(monsters)

 useEffect(() => {
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then((response) => response.json())
  // .then((users) => setMonsters(users));

  const fetchUsers = async () => {
    const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
    setMonsters(users);


  }
  fetchUsers();

 }, [])

 useEffect(() => {
  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  setFilterMonsters(newFilteredMonsters);

 }, [monsters, searchField]);


 const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setsearchField(searchFieldString);
 }
    

    
  
    return (

    <div className="App">
      <h1>Monsters Roladex</h1>
      <SearchBox 
      placeholder="search Box" 
      onChangeHandler={onSearchChange} />
      <CardList monsters={filterMonsters} />
      


    </div>
    )
  }


export default App;