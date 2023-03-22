import logo from './logo.svg';
import './App.css';
import Name from './Name';
import GuestList from './GuestList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Name name="Runqiu"></Name>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GuestList></GuestList>
      </header>
    </div>
  );
}

export default App;
