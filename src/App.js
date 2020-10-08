import React, { Component } from 'react';
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
      <div className='App'>
        {this.state.monsters.map(monster => <h3 key={monster.id}>{monster.name}</h3>)}
      </div>
    )

  }
}

  export default App;
