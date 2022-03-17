import React from "react";
import { Link } from "react-router-dom";
import "./Initialpage.css";

export default function Initialpage() {
  return (
    <div className="initial">
      <div className="initialTB">
        <h1 className="welcometxt">WELCOME TO GAMES WORLD</h1>
        <Link to="/home">
          <button className="welcomebtn">PLAY THE GAME</button>
        </Link>
      </div>
      <h2 className="editor">By EdwardBarrero </h2>
    </div>
  );
}
