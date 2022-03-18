import React from "react";
import "./FilterAndOrder.css";

export default function Filter() {
  return (
    <div className="filter-order">
      <div className="filters">
        <div className="dropdown">
          <button className="dropbtn">Generos</button>
          <div className="dropdown-content">
            <p>Action</p>
            <p>Indie</p>
            <p>Adventure</p>
            <p>RPG</p>
            <p>Strategy</p>
            <p>Shooter</p>
            <p>Casual</p>
            <p>Simulation</p>
            <p>Puzzle</p>
            <p>Arcade</p>
            <p>Platformer</p>
            <p>Racing</p>
            <p>Massively Multiplayer</p>
            <p>Sports</p>
            <p>Fighting</p>
            <p>Family</p>
            <p>Board Games</p>
            <p>Educational</p>
            <p>Card</p>
          </div>
        </div>
        <button className="filter-btn">Juegos Creados</button>
        <button className="filter-btn">Juegos Existentes</button>
      </div>
      <div className="dropdown">
        <button className="dropbtn-order">Ordenar por:</button>
        <div className="dropdown-content-order">
          <p>Rating Asc</p>
          <p>Rating Desc</p>
          <p>Alfabético Asc</p>
          <p>alfabético Desc</p>
        </div>
      </div>
    </div>
  );
}
