
import React from "react"
import './App.css';
// import Person from'./Person'
// import Job from'./Job'
import Template from "./template";
import Img1 from'./Images/img1.JPG'
import Img2 from'./Images/img2.JPG'
import Img3 from'./Images/img3.JPG'
import Img4 from'./Images/img4.JPG'

function App() {
  return (
    <div className="App">
      
      <Template Img = {Img1} imgalt="BigBird" Title = "Grey Heron" Info =" big dinosaur looking bird"/>
      <Template Img = {Img2} imgalt="LittleBird" Title = "Thursh?" Info =" cute litte birdy"/>  
      <Template Img = {Img3} imgalt="Squirrel" Title = "Grey Squirrel" Info =" Squirreliest of all the squirrel"/>  
      <Template Img = {Img4} imgalt="Dipper" Title = "Dipper" Info =" Dipping in dipping out"/>
    </div>
  );
}




export default App;
