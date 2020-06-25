import React from 'react';
import './App.css';
import MasterForm from './MasterForm';
import 'react-dropdown/style.css';
import logo from './adopt_logo_white.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} className="logo" alt="Adopt logo"/>
        <MasterForm/>
      </header>
    </div>
  );
}

export default App;
