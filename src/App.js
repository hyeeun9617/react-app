import React from 'react';
import logo from './logo.svg';
import './App.css';

//현재 웹사이트 화면에 표기되는 정보를 담고 있다.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">리액트 세계에 오신거를 환영합니다. (예시 작성)</h1> 
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
