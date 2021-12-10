import logo from './logo.svg';
import './App.css';


//Components
import Greeting from './components/Greeting';
import FullName from './components/FullName';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Counter/>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
