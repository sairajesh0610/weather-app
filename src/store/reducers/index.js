import { combineReducers } from "@reduxjs/toolkit";
import spinnerReducer from "./spinnerSlice";
import weatherReducer from "./weatherSlice"


const rootReducer = combineReducers({
  spinner: spinnerReducer,
  weather: weatherReducer
});

export default rootReducer;
