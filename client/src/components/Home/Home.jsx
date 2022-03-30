import React, { useEffect } from "react";
import "./Home.css";
import Filter from "../FilterAndOrder/FilterAndOrder";
import GameCard from "../GameCard/GameCard";
import { getGames, setPage } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames("", "", `${page}`, ""));
  }, [dispatch]);

  const games = useSelector((state) => state.games);
  const page = useSelector((state) => state.page);
  const filter = useSelector((state) => state.filter);
  const order = useSelector((state) => state.order);
  const filterGames = useSelector((state) => state.filterGames);

  const onClickPre = () => {
    if (page > 1) {
      let actualPage = page - 1;
      dispatch(setPage("less"));
      dispatch(
        getGames(`${filter}`, `${order}`, `${actualPage}`, `${filterGames}`)
      );
    }
  };
  const onClickPos = () => {
    if (page < 10) {
      let actualPage = page + 1;
      dispatch(setPage("more"));
      dispatch(
        getGames(`${filter}`, `${order}`, `${actualPage}`, `${filterGames}`)
      );
    }
  };

  let gamespg = games.slice(0, 15);
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
      <div className="homepage-paginado">
        <button onClick={onClickPre}>PREV</button>
        <div className={"paginado-numbers"}>
          <span
            className={page > 1 ? "prepage" : "prepage notfound"}
            onClick={onClickPre}
          >
            {page - 1}
          </span>
          <span className="actualpage">{page}</span>
          <span
            className={page < 10 ? "pospage" : "pospage notfound"}
            onClick={onClickPos}
          >
            {page + 1}
          </span>
        </div>

        <button onClick={onClickPos}>NEXT</button>
      </div>
    </div>
  );
}
