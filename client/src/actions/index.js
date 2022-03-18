export const GET_GAMES = "GET_GAMES";
export const GET_GAME = "GET_GAME";

export function getGames() {
  return function (dispatch) {
    return fetch(
      `https://api.rawg.io/api/games?key=0f64f45aa536442cace1694c6759487d`
    )
      .then((ress) => ress.json())
      .then((json) => {
        dispatch({
          type: GET_GAMES,
          payload: json.results,
        });
      });
  };
}

export function getGame(title) {
  return function (dispatch) {
    return fetch(
      `https://api.rawg.io/api/games?search=${title}&key=0f64f45aa536442cace1694c6759487d`
    )
      .then((ress) => ress.json())
      .then((json) => {
        dispatch({
          type: GET_GAME,
          payload: json.results,
        });
      });
  };
}

