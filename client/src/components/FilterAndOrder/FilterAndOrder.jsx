import React, { useState } from "react";
import "./FilterAndOrder.css";
import { useDispatch } from "react-redux";
import { getGames } from "../../actions";

export default function Filter() {
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");
  const [filterGames, setFilterGames] = useState("");

  const onClick = (g) => {
    setFilter(g);
  };
  const orderbtn = ["Rating-Desc", "Rating-Asc", "A-Z", "Z-A"];
  const genres = [
    "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Racing",
    "Massively Multiplayer",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card",
  ];
  const dispatch = useDispatch();

  return (
    <div className="filter-order">
      <div className="filters">
        <div className="dropdown">
          <button className="dropbtn">Generos</button>
          <div className="dropdown-content">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => {
                  onClick(g);
                  dispatch(getGames(`${g}`, `${order}`, "", `${filterGames}`));
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <button
          className="filter-btn"
          onClick={(e) => {
            e.preventDefault();
            setFilterGames("juegosCreados");
            dispatch(getGames(`${filter}`, `${order}`, "", `juegosCreados`));
          }}
        >
          Juegos Creados
        </button>
        <button
          className="filter-btn"
          onClick={async (e) => {
            e.preventDefault();
            setFilterGames("juegosExistentes");
            dispatch(getGames(`${filter}`, `${order}`, "", `juegosExistentes`));
          }}
        >
          Juegos Existentes
        </button>
        <button
          className="filter-btn"
          onClick={async (e) => {
            e.preventDefault();
            setFilterGames("");
            dispatch(getGames("", "", "", ""));
          }}
        >
          Todos los Juegos
        </button>
      </div>
      <div className="dropdown">
        <button className="dropbtn-order">Ordenar por:</button>
        <div className="dropdown-content-order">
          {orderbtn.map((o) => (
            <button
              key={o}
              onClick={() => {
                setOrder(o);
                dispatch(getGames(`${filter}`, `${o}`, "", `${filterGames}`))
              }}
            >
              {o}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
