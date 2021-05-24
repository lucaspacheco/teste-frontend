import React from 'react';
import './App.css';
import Label from './components/micro/Label'
import Dropdown from './components/micro/Dropdown'

function App() {
  return (
    <div className="App">
      <div className="Label">
        <h1> Componentes / Input text</h1>
        <Label/> 
      </div>  
      <div className="Dropdown">
        <h1>Componentes / Dropdown</h1>
        <Dropdown/>
      </div>          
    </div>
  );
}

export default App;
