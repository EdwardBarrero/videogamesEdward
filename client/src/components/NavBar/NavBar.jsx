import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "../../actions/index";

export default function NavBar() {
  const [buscar, setBuscar] = useState("");
  const dispatch = useDispatch();

  

  return (
    <div className="navBar">
      <div className="creandfav">
        <Link className="titlenav3" to={"/home/creategame"}>
          <h4>Create game</h4>
        </Link>
        <Link className="titlenav1" to={"/home/favorite"}>
          <h4>Favorite Games</h4>
        </Link>
      </div>
      <Link className="titlenav2" to={"/home"}>
        <h1>GAMES WORLD</h1>
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(getGame(buscar));
        }}
        className="buscadornav"
      >
        <input
          type="text"
          placeholder="     Buscar juegos..."
          onChange={(e) => setBuscar(e.target.value)}
        />
      </form>
    </div>
  );
}
