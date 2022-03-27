export const GET_GAMES = "GET_GAMES";
export const GET_GAME = "GET_GAME";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export function getGames(genr, order, page, filterGames) {
  return function (dispatch) {
    return fetch(
      `http://localhost:3002/api/videogames?genr=${genr}&order=${order}&page=${page}&filterGames=${filterGames}`
    )
      .then((ress) => ress.json())
      .then((json) => {
        dispatch({
          type: GET_GAMES,
          payload: json,
        });
      });
  };
}




export function getGame(title) {
  return function (dispatch) {
    return fetch(
      `http://localhost:3002/api/videogames/game/${title}`
    )
      .then((ress) => ress.json())
      .then((json) => {
        dispatch({
          type: GET_GAME,
          payload: json,
        });
      });
  };
}

export function getDetail(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3002/api/videogames/detail/${id}`)
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