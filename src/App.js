import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Category from './component/Category';

{// function App() {
//   return (
//     <div className="App">
      /*<header className="App-header">
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
      // </header>*/
      // </div>
      //)
    //}
//}
    }

class App extends Component {

  state = {
    titre : "Ma Super ToDoList !"
  }
  render() {
    return(
      <div className='toto'>
        <Header title={this.state.titre}/>
        <Category />
      </div>
    );
  }
}

export default App;
