import React from 'react';
import './App.css';
import Initialpage from './components/Initialpage/Initialpage.jsx';
import Home from './components/Home/Home.jsx';
import Favorite from './components/Favorite/Favorite.jsx';
import CreateGame from './components/CreateGame/CreateGame.jsx';
import {Route} from 'react-router-dom';
import NavOrganismHeader from './app/nav/domain/organims/nav-organism-header/nav-organism-header';
import GameDetail from './components/GameDetail/GameDetail.jsx'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component= {Initialpage} />
      <Route path ="/home" component={NavOrganismHeader} />
      <Route exact path="/home" component={Home} />
      <Route path="/home/favorite" component={Favorite}/> 
      <Route path="/home/creategame" component={CreateGame}/>
      <Route path="/home/game/:id" component={GameDetail} />   
    </React.Fragment>
  );
}

export default App;
