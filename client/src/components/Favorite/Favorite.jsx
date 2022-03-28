import React from "react";
import "./Favorite.css";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import GameCard from "../GameCard/GameCard";

export default function Favorite() {
  const dispatch = useDispatch();
  const favoriteGames = useSelector((state) => state.favoriteGames);
  return (
    <div className="favoritegames">
      <img className="favorite-background"
        src="https://dlcdnrog.asus.com/rog/media/1637784966993.jpg"
        alt="img not found"
      />
      <div>
        <div className="favorite-gamecards">
          {favoriteGames?.map((game) => (              
              <GameCard
              id={game.id}
              name={game.name}
              img={game.background_image}
              genres={game.genres}
            />           
          ))}
        </div>
      </div>
    </div>
  );
}
