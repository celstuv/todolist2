import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import List from './component/body/list';
import NumberList from './component/body/numberlist';


const numbers = [1, 2, 3, 4, 5];
function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>*/}


    <Header />
    <List />
    <NumberList numbers={numbers} />
</div>
  );
}

export default App;
