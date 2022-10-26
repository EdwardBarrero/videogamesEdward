import React from "react";
import "./GameCard.css";
import { DICTIONARY } from "../../app/app-common/domain/constants/dictionary/dictionary";
import { Link } from "react-router-dom";

const GameCard = ({ name, img, genres, id }) => {
  function redirectHandle(){
    window.location.replace(`/home/game/${id}`);
  }
  
  return (
    <Link to={`/home/game/${id}`} key={id}>
      <div className="game-card position-relative">
        <img className="" src={img} />
        <div className="game-card-content d-flex flex-column align-items-center">
          <p className="text-center my-auto"> {name} </p>
          {/* <div className="genres-list my-auto">
            {genres?.map((genr) => (
              // <span key={genr}> {genr} |</span>
              <span className="genr-tag mx-1">{genr}</span>
            ))}
          </div> */}
        </div>
      </div>
    </Link>


    // <Link to={`/home/game/${id}`} className="gameCard">
      // <div key={id}>
      //   <img src={img} />
      //   <p> {name} </p>
      //   {genres?.map((genr) => (
      //     <span key={genr}> {genr} |</span>
      //   ))}
      // </div>
    // </Link>
  );
};

export default GameCard;
