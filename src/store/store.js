import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Assuming you have a rootReducer

const store = configureStore({
  reducer: rootReducer,
  // Other middleware or configuration options can be added here
});

export default store;
