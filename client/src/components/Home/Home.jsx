import React, { useEffect } from "react";
import "./Home.css";
import Filter from "../FilterAndOrder/FilterAndOrder";
import GameCard from "../GameCard/GameCard";
import { getGames } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames("","","",""));
  }, [dispatch]);
  const games = useSelector((state) => state.games);
  let gamespg = games.slice(0,15)
  return (
    <div className="homepage">
      <Filter />
      <div className="gamecards">
        {gamespg?.map((game) => (          
            <GameCard
              id={game.id}
              name={game.name}
              img={game.background_image}
              genres={game.genres}
            />  
        ))}
      </div>
    </div>
  );
}
