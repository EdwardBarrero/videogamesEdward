import React, {useState} from "react";
import "./FilterAndOrder.css";
import {useDispatch} from "react-redux"
import { getGames } from "../../actions";

export default function Filter() {
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");

  const onClick = (g) => {
    setFilter(g);
  }
  const orderbtn = ["Rating", "Alfabético A-Z", "Alfabético Z-A" ];
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
            {
              genres.map((g)=>(
                <button key={g} onClick={()=>onClick(g)}>{g}</button>
              ))
            }
          </div>
        </div>
        <button className="filter-btn">Juegos Creados</button>
        <button className="filter-btn" onClick={(e) => {
          e.preventDefault();
          dispatch(getGames());
        }}>Juegos Existentes</button>
      </div>
      <div className="dropdown">
        <button className="dropbtn-order">Ordenar por:</button>
        <div className="dropdown-content-order">
          {
            orderbtn.map((o) => (
              <button key ={o} onClick={()=>{
                setOrder(o);
              }}>{o}</button>
            ))
          }
        </div>
      </div>
    </div>
  );
}
