import {
  GET_GAMES,
  GET_GAME,
  GET_DETAIL,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  PAGE,
  FILTER,
  FILTER_GAMES,
  ORDER,
} from "../actions/index";

const initialState = {
  games: [],
  gameDetail: {},
  favoriteGames: [],
  page: 1,
  filter: "",
  order: "",
  filterGames: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };

    case GET_GAME:
      return {
        ...state,
        games: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteGames: [...state.favoriteGames, action.payload],
      };

    case REMOVE_FAVORITE:
      const newFavorites = state.favoriteGames.filter((game) => {
        return game.id !== action.payload;
      });
      return {
        ...state,
        favoriteGames: newFavorites,
      };

    case PAGE:
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
    case ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case FILTER_GAMES:
      return {
        ...state,
        filterGames: action.payload,
      };

    default:
      return state;
  }
}
