import { GET_SHIPS,
  GET_PLANETS,
  GET_PLANET,
  GET_CHARACTERS,
  GET_CHARACTER,
  SET_LOADING,
  GET_ERROR,
  GET_SHIP,
  RESET_STATE
} from '../actions/types';


const initialState = {
  currentShips: {},
  currentPlanets: {},
  currentCharacters: {},
  ships: [],
  planets: [],
  characters: [],
  current: {},
  loading: false,
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHIPS:
      return {
        ...state,
        currentShips: action.payload,
        ships: [...state.ships, ...action.payload.results],
        loading: false
      };

    case GET_PLANETS:
      return {
        ...state,
        currentPlanets: action.payload,
        planets: [...state.planets, ...action.payload.results],
        loading: false
      };

    case GET_CHARACTERS:
      return {
        ...state,
        currentCharacters: action.payload,
        characters: [...state.characters, ...action.payload.results],
        loading: false
      };

    case GET_SHIP:
      return {
        ...state,
        current: action.payload,
        loading: false
      };

    case GET_PLANET:
      return {
        ...state,
        current: action.payload,
        loading: false
      };

    case GET_CHARACTER:
      return {
        ...state,
        current: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export default dataReducer;
