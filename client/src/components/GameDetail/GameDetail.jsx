import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, addFavorite, removeFavorite } from "../../actions";
import "./GameDetail.css";

export default function GameDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);
  const gameDetail = useSelector((state) => state.gameDetail);
  const favoriteGames = useSelector((state) => state.favoriteGames);
  const favoriteIds = favoriteGames.map((game)=> (game.id))
  return (
    <div className="gamedetail">
      <img className="gamedetailimg" src={gameDetail.background_image} />
      <div className="gamedetail-content">
        <img src={gameDetail.background_image} />
        <h1 className="gamedetail-title">{gameDetail.name}</h1>
        <div className="gamedetail-genres">
          {gameDetail.genres?.map((genr) => (
            <span> | {genr} | </span>
          ))}
        </div>
        {favoriteIds.includes(gameDetail.id) ? (
          <button
            onClick={() => dispatch(removeFavorite(gameDetail.id))}
            className="gameDetail-favbtn"
          >
            Remover de favoritos
          </button>
        ) : (
          <button
            onClick={() => dispatch(addFavorite(gameDetail))}
            className="gameDetail-favbtn"
          >
            Agregar a favoritos
          </button>
        )}

        <div className="gamedetail-desciption">
          <h5>DESCRIPCION</h5>
          <p>{gameDetail.description}</p>
        </div>

        <p>Fecha de lanzamiento: {gameDetail.released}</p>
        <p>Rating: {gameDetail.rating}</p>
        <div className="gamedetail-platforms">
          {gameDetail.platforms?.map((platform) => (
            <span> | {platform} | </span>
          ))}
        </div>
      </div>
    </div>
  );
}
