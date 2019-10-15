import axios from 'axios';
import { GET_CHARACTERS, SET_LOADING, GET_ERROR, GET_CHARACTER } from './types';

const baseUrl = 'https://swapi.co/api/people';

class CharacterActions {
  static getCharacters = (url = baseUrl) => (dispatch) => {
    dispatch({
      type: SET_LOADING
    });

    return axios.get(`${ url }`)
      .then((res) => {
        dispatch({
          type: GET_CHARACTERS,
          payload: res.data
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ERROR,
          payload: error
        });
      });
  };

  static getCharacter = (url) => (dispatch) => {
    dispatch({
      type: SET_LOADING
    });

    return axios.get(`${ url }`)
      .then((res) => {
        dispatch({
          type: GET_CHARACTER,
          payload: res.data
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ERROR,
          payload: error
        });
      });
  };
}

export default CharacterActions;
