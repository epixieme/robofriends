import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'


class App extends Component{
constructor(){
super()
this.state={
  robots:robots,
  searchfield:'' // this is the only area that can chnage
}
}
onSearchChange=(event)=>{ // always use an arrow here on your own funcitonality esel it will error
this.setState({searchfield: event.target.value})
}

render(){
const filteredRobots =this.state.robots.filter(robot=>{
return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
})

return (
<div className ='tc'>
  <h1>RoboFriends</h1>
  <SearchBox SearchChange = {this.onSearchChange}/>
  <CardList robots={filteredRobots}/>
</div>
  );
  }


}

export default App;
