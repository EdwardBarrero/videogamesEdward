import { GET_GAMES,GET_GAME, GET_DETAIL, ADD_FAVORITE, REMOVE_FAVORITE} from "../actions/index";


const initialState = {
  games: [],
  gameDetail: {},
  favoriteGames: []
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
        games: action.payload
      }

    case GET_DETAIL:
      return {
        ...state,
        gameDetail: action.payload
      }
    case ADD_FAVORITE:
      return{
        ...state,
        favoriteGames: [...state.favoriteGames, action.payload]
      }
    
    case REMOVE_FAVORITE:
      const newFavorites = state.favoriteGames.filter((game)=>{
        return game.id !== action.payload
      })
      return {
        ...state,
        favoriteGames: newFavorites
      }
    default:
      return state;
  }
}
