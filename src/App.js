import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'
import './App.css'

class App extends Component{
constructor(){
super()
this.state={
  robots:robots,
  searchfield:'' // this is the only area that can chnage but it should not be chnaged directly
  //instead use setstate
}
}
onSearchChange=(event)=>{ // always use an arrow here on your own funcitonality esel it will error
this.setState({searchfield: event.target.value}) // this stops state from being modified directly
// notice we have chnaged the  key searchfield value - changes this field to whatever we type
}

render(){
const filteredRobots =this.state.robots.filter(robot=>{
return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
})

return (
<div className ='tc'>
  <h1 className ='f1'>RoboFriends</h1>
  <SearchBox SearchChange = {this.onSearchChange}/>
  <CardList robots={filteredRobots}/>
</div>
  );
  }


}

export default App;
