import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from '../slices/dataSlice';
import uiReducer from '../slices/uiSlice';

const rootReducer = combineReducers({
  data: dataReducer.reducer,
  ui: uiReducer,
});

export default rootReducer;
