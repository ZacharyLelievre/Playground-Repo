import logo from './logo.svg';
import './App.css';
import MyName from './components/MyName'; 
import Prop from './components/Prop';
import TodoList from './components/TodoList';
import React, { useState } from 'react';
import Rendering from "./components/Rendering";
import {person1} from "./components/objects1"

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{setShow(!show)}}>Toggle</button>
        {show && (
          <>
        <MyName  className="hello"/>
        <Prop/>
        <TodoList/>

        </>
        )}
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Rendering/>
        <person1/>
      </header>
    </div>
  );
}

export default App;
