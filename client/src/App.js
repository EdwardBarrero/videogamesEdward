import React from 'react';
import './App.css';
import Initialpage from './components/Initialpage';
import Home from './components/Home.jsx';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component= {Initialpage} />
      <Route path ="/home" component={NavBar} />
      <Route exact path="/home" component={Home} />      
    </React.Fragment>
  );
}

export default App;
