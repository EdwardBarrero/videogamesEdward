import { ACTION_CONSTANTS as constants } from "../constants/action-constants";

export function getGames(genr, order, page, filterGames, buscador) {
  return function (dispatch) {
    return fetch(
      `http://192.168.0.114:3002/api/videogames?genr=${genr}&order=${order}&page=${page}&filterGames=${filterGames}&buscador=${buscador}`
    )
      .then((ress) => ress.json())
      .then((json) => {
        dispatch({
          type: constants.GET_GAMES,
          payload: json,
        });
      });
  };
}

export function getGame(title) {
  return function (dispatch) {
    return fetch(`http://192.168.0.114:3002/api/videogames/game/${title}`)
      .then((ress) => ress.json())
      .then((json) => {
        dispatch({
          type: constants.GET_GAME,
          payload: json,
        });
      });
  };
}

export function getDetail(id) {
  if (id === "reset") {
    return {
      type: constants.GET_DETAIL,
      payload: {},
    };
  }
  return function (dispatch) {
    return fetch(`http://192.168.0.114:3002/api/videogames/detail/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: constants.GET_DETAIL, payload: json });
      });
  };
}

export function addFavorite(game) {
  return {
    type: constants.ADD_FAVORITE,
    payload: game,
  };
}

export function removeFavorite(id) {
  return {
    type: constants.REMOVE_FAVORITE,
    payload: id,
  };
}

export function setPage(event) {
  return {
    type: constants.PAGE,
    payload: event,
  };
}

export function setFilter(genr) {
  return {
    type: constants.FILTER,
    payload: genr,
  };
}
export function setOrder(order) {
  return {
    type: constants.ORDER,
    payload: order,
  };
}
export function setFlterGames(games) {
  return {
    type: constants.FILTER_GAMES,
    payload: games,
  };
}

export function setBusqueda(busqueda) {
  return {
    type: constants.SET_BUSQUEDA,
    payload: busqueda,
  };
}
