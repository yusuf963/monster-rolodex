import React, { Component } from 'react';
import CardList from './components/card-list/card-list.components.jsx'
import style from './components/card-list/card-list.style.css'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[ ]
    }
  }


   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(users =>this.setState({monsters: users}))
     
   }
  
  render(){
    return(
      <div className='card.list'>
        <CardList />
         {this.state.monsters.map(monster => <h3 key={monster.id}>{monster.name}</h3>)}
       
        <CardList/>
      </div>
    )

  }
}

  export default App;
