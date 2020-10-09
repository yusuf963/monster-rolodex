import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.components.jsx'
import {SearchBox} from './components/search-box/search-box.component.jsx'
import './components/card-list/card-list.style.css'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[ ],
      searchField:''
    }
  }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=> res.json())
     .then(users => this.setState({monsters: users})) 
   }
  
  render(){
    const{monsters, searchField}=this.state;
    const filteredMonsters = monsters.filter(monsters=>
      monsters.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div>
        <SearchBox
          placeholder = 'search monster'
          handelChange = {e=> {
          this.setState({searchField:e.target.value})}}
        />
        <CardList monsters={filteredMonsters}/>
        
      </div>
    )

  }
}

  export default App;
