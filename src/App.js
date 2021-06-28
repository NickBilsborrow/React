
import React from "react"
import './App.css';
import Person from'./Person'
import Job from'./Job'

function App() {
  return (
    <div className="App">
      
        <Person name="Nick" age = {23} />
        <Job job = "dinosaur hunter"/>
        <Person name="jacob" age = {23}/>
        <Job job = "loser"/>
        
        
      
    </div>
  );
}




export default App;
