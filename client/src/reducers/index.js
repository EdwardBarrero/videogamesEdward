import { GET_GAMES } from "../actions/index";
import {GET_GAME} from "../actions/index"

const initialState = {
  games: [],
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
    default:
      return state;
  }
}
