import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <h4 className="titlenav1">Favorite Games</h4>
      {/* <a className="titlenav2" href="/home">GAMES WORLD</a> */}
      <Link className="titlenav2" to={"/home"}>
        <h1>GAMES WORLD</h1>
      </Link>

      <form className="buscadornav">
        <input type="text" placeholder="     Buscar juegos..." />
      </form>
    </div>
  );
}
