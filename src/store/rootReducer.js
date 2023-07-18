import { combineReducers } from '@reduxjs/toolkit';
import { reducer as modalsReducer } from '../slices/modals';

const combinedReducer = combineReducers({
  modals: modalsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // check for action type
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
