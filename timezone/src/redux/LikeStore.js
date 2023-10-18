import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./slice/LikeSlice"; 

const rootReducer = {
  likeReducer: likeReducer  
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
