import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css'

class App extends Component{// App.js is a smart component as it has state whihc describes the app
	//and has the class syntax
constructor(){
  super() 
  this.state={
    robots:[],
    searchfield:'' // this is the only area that can chnage but it should not be chnaged directly
  //instead use setstate
}
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')// fetch is a window object notice it doesnt attacch to anything - means its native
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}))
  }
 

onSearchChange=(event)=>{ // always use an arrow here on your own funcitonality esel it will error
  this.setState({searchfield: event.target.value}) // this stops state from being modified directly
// notice we have chnaged the  key searchfield value - changes this field to whatever we type
}

render(){
  const filteredRobots =this.state.robots.filter(robot=>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
})
  if (this.state.robots.length === 0){
  	  return <h1>Loading...</h1>
  }else {

return (
  <div className ='tc'>
    <h1 className ='f1'>RoboFriends</h1>
    <SearchBox SearchChange = {this.onSearchChange}/>
    <CardList robots={filteredRobots}/>
 </div>
  );
  }
}
}

export default App;
