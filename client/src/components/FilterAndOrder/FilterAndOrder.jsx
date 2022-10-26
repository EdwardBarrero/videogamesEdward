import React from "react";
import "./FilterAndOrder.css";
import { useDispatch, useSelector } from "react-redux";
import * as services from "../../app/redux/actions";

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
                  dispatch(services.setPage("init"));
                  dispatch(services.setFilter(g));
                  dispatch(services.getGames(`${g}`, `${order}`, 1, `${filterGames}`));
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
            dispatch(services.setPage("init"));
            dispatch(services.setFlterGames("juegosCreados"));
            dispatch(services.getGames(``, `${order}`, 1, `juegosCreados`));
          }}
        >
          Juegos Creados
        </button>
        <button
          className="filter-btn"
          onClick={async (e) => {
            e.preventDefault();
            dispatch(services.setPage("init"));
            dispatch(services.setFlterGames("juegosExistentes"));
            dispatch(services.getGames(``, `${order}`, 1, `juegosExistentes`));
          }}
        >
          Juegos Existentes
        </button>
        <button
          className="filter-btn"
          onClick={async (e) => {
            e.preventDefault();
            dispatch(services.setPage("init"))
            dispatch(services.setFlterGames(""));
            dispatch(services.setBusqueda(""))
            dispatch(services.getGames("", "", "", ""));
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
                dispatch(services.setOrder(o));
                dispatch(
                  services.getGames(`${filter}`, `${o}`, `${page}`, `${filterGames}`)
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
