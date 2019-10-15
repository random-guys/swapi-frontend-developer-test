import { combineReducers } from 'redux';
import dataReducer from './data.reducer';


const appReducer = combineReducers({
  data: dataReducer
});

const reducer = (state, action) => {
  const { type } = action;
  if (type === 'LOGOUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default reducer;
