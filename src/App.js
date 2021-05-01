import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <a
          className="App-link"
          href="https://codaisseur.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to code at Codaisseur!
        </a>
      </header>
    </div>
  );
}

export default App;
