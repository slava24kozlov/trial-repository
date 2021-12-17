import logo from './logo.svg';
import './App.css';
import Profile from "./Profile";
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Trial project</h1>
        <p>Slava Kozlov</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Git
        </a>
        <Profile/>
        <Message/>
      </header>
    </div>
  );
}

export default App;
