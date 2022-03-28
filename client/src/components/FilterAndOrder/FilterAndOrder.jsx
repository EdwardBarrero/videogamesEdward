import React from "react";
import "./FilterAndOrder.css";
import { useDispatch, useSelector } from "react-redux";
import { getGames, setFilter, setFlterGames, setOrder } from "../../actions";

export default function Filter() {
  const filter = useSelector((state) => state.filter);
  const order = useSelector((state) => state.order);
  const filterGames = useSelector((state) => state.filterGames);
  const page = useSelector((state) => state.page);

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
                  dispatch(setFilter(g));
                  dispatch(
                    getGames(`${g}`, `${order}`, `${page}`, `${filterGames}`)
                  );
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
            dispatch(setFlterGames("juegosCreados"));
            dispatch(
              getGames(``, `${order}`, ``, `juegosCreados`)
            );
          }}
        >
          Juegos Creados
        </button>
        <button
          className="filter-btn"
          onClick={async (e) => {
            e.preventDefault();
            dispatch(setFlterGames("juegosExistentes"));
            dispatch(
              getGames(``, `${order}`, ``, `juegosExistentes`)
            );
          }}
        >
          Juegos Existentes
        </button>
        <button
          className="filter-btn"
          onClick={async (e) => {
            e.preventDefault();
            dispatch(setFlterGames(""));
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
                dispatch(setOrder(o));
                dispatch(
                  getGames(`${filter}`, `${o}`, `${page}`, `${filterGames}`)
                );
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
