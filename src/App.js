import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
// import Mainpage from './Main/Mainpage'  
import Welcomepage from './Pages/welcomepage/view/Welcomepage'
import Signin from './Pages/signin/view/Signin'
import Signup from './Pages/signup/view/Signup'
import Movie from './Pages/movie/view/Movie'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Movie />
    </div>
  );
}

export default App;
