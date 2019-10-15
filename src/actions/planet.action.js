import axios from 'axios';
import { GET_PLANETS, SET_LOADING, GET_ERROR, GET_PLANET } from './types';

const baseUrl = 'https://swapi.co/api/planets';

class PlanetActions {
  static getPlanets = (url = baseUrl) => (dispatch) => {
    dispatch({
      type: SET_LOADING
    });

    return axios.get(`${ url }`)
      .then((res) => {
        dispatch({
          type: GET_PLANETS,
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

  static getPlanet = (url) => (dispatch) => {
    dispatch({
      type: SET_LOADING
    });

    return axios.get(`${ url }`)
      .then((res) => {
        dispatch({
          type: GET_PLANET,
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

export default PlanetActions;
