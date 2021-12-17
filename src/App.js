import logo from './logo.svg';
import './App.css';
import Profile from "./Profile";

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
          <p style={{color: "red", fontStyle: 'italic'}}>Information in pre-prod</p>
        </a>
        <Profile/>
      </header>
    </div>
  );
}

export default App;
