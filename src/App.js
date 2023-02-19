import React, {Component, useEffect, useState} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";
import MultiRange from "./MultiRange";



class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfied: ''
    }
  }

  filteredRobots = [];

  onRangeChange = () => {

  }

  onSearchChange = (event) => {
    this.setState({searchfied: event.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfied.toLowerCase())
    })

    
    return (
      <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <MultiRange />
       
        <CardList robots={filteredRobots} />

      </div>
    );
  }
};

const AppImpl = ({robots}) => {

  let filteredRobots = robots;

  const [setSearchField, searchFieldState] = useState("");
  const [setRatioRangeMax, ratioRangeMax] = useState(100);
  const [setRatioRangeMin, ratioRangeMin] = useState(0);


  useEffect(() => {
   filteredRobots = robots.filter((robot) => {
    
   }) 
  }, [searchFieldState])



  return (
    <div className="tc">
      <h1 className="f1">ROBOFRIENDS</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <MultiRange />
     
      <CardList robots={filteredRobots} />

    </div>
  );
}

export default App;


// in order to do interact SearchBox and CardList React has STATE
// STATE is a object, that object describes you application  
// STATE able to change the value of the searchbox and robots as well