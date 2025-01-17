import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styleField = {
      width: '300px'
    };

    return <input
            placeholder={holder}
            type='text'
            style={styleField}/>
  };
}

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
      </header>
    </div>
  );
}

export {Field}
export default App;
