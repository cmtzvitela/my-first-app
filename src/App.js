import logo from './logo.svg';
import './App.css';


//Components
import Greeting from './components/Greeting';
import FullName from './components/FullName';
import Calculator from './components/Calculator';

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
        <Greeting name="Carlos"/>
        <FullName firstName= "Carlos" lastName="Martinez"/>
        <Calculator firstValue={5} secondValue= {3} operator = 'suma'/>
        <Calculator firstValue={5} secondValue= {3} operator = 'resta'/>
        <Calculator firstValue={5} secondValue= {3} operator = 'multiplicacion'/>
        <Calculator firstValue={5} secondValue= {3} operator = 'perro'/>
      </header>
    </div>
  );
}

export default App;
