import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from '../slices/dataSlice';
import uiReducer from '../slices/uiSlice';

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

export default rootReducer;
