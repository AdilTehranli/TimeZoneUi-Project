import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { list: [], total: 0, totalItems: 0 },
  reducers: {
    addToCart: (state, action) => {
      const quantity = Number(action.payload.quantity); 

      state.list.push(action.payload);
      state.total += quantity;
      state.totalItems += quantity;
    
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
