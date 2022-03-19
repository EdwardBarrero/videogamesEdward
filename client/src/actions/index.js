export const GET_GAMES = "GET_GAMES";
export const GET_GAME = "GET_GAME";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

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

export function getDetail(id) {
  return function (dispatch) {
    return fetch(`https://api.rawg.io/api/games/${id}?key=0f64f45aa536442cace1694c6759487d`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: GET_DETAIL, payload: json });
      });
  };
}

export function addFavorite(game){
  return {
    type: ADD_FAVORITE, payload: game
  }
}

export function removeFavorite(id){
  return {
    type: REMOVE_FAVORITE, payload: id
  }
}