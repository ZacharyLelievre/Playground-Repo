import logo from './logo.svg';
import './App.css';
import MyName from './components/MyName'; 
import Prop from './components/Prop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyName  className="hello"/>
        <Prop/>
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
      </header>
    </div>
  );
}

export default App;
