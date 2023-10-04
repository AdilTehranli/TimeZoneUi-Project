import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { list: [], total: 0, totalItems: 0 },
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProductIndex = state.list.findIndex(item => item.id === productToAdd.id);

      if (existingProductIndex !== -1) {
        state.list[existingProductIndex].quantity += productToAdd.quantity;
        state.total += productToAdd.quantity;
        state.totalItems += productToAdd.quantity;
      } else {
        state.list.push(productToAdd);
        state.total += productToAdd.quantity;
        state.totalItems += productToAdd.quantity;
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
