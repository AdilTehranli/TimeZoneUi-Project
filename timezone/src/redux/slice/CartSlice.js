import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: JSON.parse(localStorage.getItem('cartProducts')) || [],
    total: 0,
    totalItems: 0,
  },
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

      localStorage.setItem('cartProducts', JSON.stringify(state.list));
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      const productToRemoveIndex = state.list.findIndex(item => item.id === productIdToRemove);

      if (productToRemoveIndex !== -1) {
        const removedProduct = state.list.splice(productToRemoveIndex, 1)[0];
        state.total -= removedProduct.quantity;
        state.totalItems -= removedProduct.quantity;
        localStorage.setItem('cartProducts', JSON.stringify(state.list));
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
