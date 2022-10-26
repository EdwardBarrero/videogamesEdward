import React from "react";
import { Link } from "react-router-dom";
import "./Initialpage.css";
import axios from "axios";

export default function Initialpage() {
  function getGenres () {
    axios.get("http://localhost:3002/api/genres/")
  }
  
  return (
    <div className="initial">
      <div className="initialTB">
        <h1 className="welcometxt">WELCOME TO GAMES WORLD</h1>
        <Link to="/home">
          <button onClick={getGenres} className="btn-welcome">PLAY THE GAME</button>
        </Link>
      </div>
      <h2 className="editor" >By EdwardBarrero </h2>
    </div>
  );
}
