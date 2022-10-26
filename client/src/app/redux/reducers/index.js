import { ACTION_CONSTANTS as constants } from "../constants/action-constants";

const initialState = {
  games: [],
  gameDetail: {},
  favoriteGames: [],
  page: 1,
  filter: "",
  order: "",
  filterGames: "",
  busqueda: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };

    case constants.GET_GAME:
      return {
        ...state,
        games: action.payload,
      };

    case constants.GET_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };
    case constants.ADD_FAVORITE:
      return {
        ...state,
        favoriteGames: [...state.favoriteGames, action.payload],
      };

    case constants.REMOVE_FAVORITE:
      const newFavorites = state.favoriteGames.filter((game) => {
        return game.id !== action.payload;
      });
      return {
        ...state,
        favoriteGames: newFavorites,
      };

    case constants.PAGE:
      if (action.payload === "less") {
        let newPage = state.page - 1;
        return {
          ...state,
          page: newPage,
        };
      } else if (action.payload === "more") {
        let newPage = state.page + 1;
        return {
          ...state,
          page: newPage,
        };
      } else if (action.payload === "init"){
        return {
          ...state,
          page: 1
        }
      }
    case constants.ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case constants.FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case constants.FILTER_GAMES:
      return {
        ...state,
        filterGames: action.payload,
      };

    case constants.SET_BUSQUEDA:
      return {
        ...state,
        busqueda: action.payload
      }

    default:
      return state;
  }
}
