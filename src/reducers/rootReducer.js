import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from '../slices/dataSlice';
import uiReducer from '../slices/uiSlice';

const rootReducer = combineReducers({
  data: dataReducer.reducer,
  ui: uiReducer.reducer,
});

export default rootReducer;
