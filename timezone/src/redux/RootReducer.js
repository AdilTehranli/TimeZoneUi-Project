import { combineReducers } from 'redux';
import cartReducer from './slice/CartSlice';
import likeReducer from './slice/LikeSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  likeslice: likeReducer
});

export default rootReducer;
