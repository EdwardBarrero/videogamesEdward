import React from "react";
import "./GameCard.css";
import { Link } from "react-router-dom";

const GameCard = ({ name, img, genres, id }) => {
  return (
    <Link to={`/home/game/${id}`} className="gameCard">
      <div key={id}>
        <img src={img} />
        <p> {name} </p>
        {genres?.map((genr) => (
          <span> {genr.name} |</span>
        ))}
      </div>
    </Link>
  );
};

export default GameCard;
