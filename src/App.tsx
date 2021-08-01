import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useFlexibleLocalStorage from "./useLocalStorage";

function App() {
  const [state, setState] = useFlexibleLocalStorage("app", "Hi");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="textInput">Save it locally: </label>
        <input
          id="textInput"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <p>{state}</p>
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
