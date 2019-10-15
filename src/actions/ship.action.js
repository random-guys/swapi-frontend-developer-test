import axios from 'axios';
import { GET_SHIPS, SET_LOADING, GET_ERROR, GET_SHIP } from './types';

const baseUrl = 'https://swapi.co/api/starships';

class ShipActions {
  static getShips = (url = baseUrl) => (dispatch) => {
    dispatch({
      type: SET_LOADING
    });

    return axios.get(`${ url }`)
      .then((res) => {
        dispatch({
          type: GET_SHIPS,
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

  static getShip = (url) => (dispatch) => {
    dispatch({
      type: SET_LOADING
    });

    return axios.get(`${ url }`)
      .then((res) => {
        dispatch({
          type: GET_SHIP,
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

export default ShipActions;
