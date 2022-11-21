import React from 'react';
import SideBar from './SideBar'
import './App.css';
import Feed from "./Feed.js"
import Widgets from "./Widgets"

function App() {
  return (

    <div className="App">
    
       <SideBar /> 
       
      <Feed />

      <Widgets /> 

    </div>
  );
}

export default App;
