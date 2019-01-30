import { FETCH_CHARACTERS, 
        FETCH_CHARACTERS_SUCCESS, 
        FETCH_CHARACTERS_FAILURE 
      } from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: [ ...action.characters, ...action.payload],
        fetching: false
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
