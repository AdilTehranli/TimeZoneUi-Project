import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: 'likeslice',
  initialState: {
    list: JSON.parse(localStorage.getItem('likeProducts')) || []
  },
  reducers: {
    addlike: (state, action) => {
      const likeadd = action.payload;
      const likeexists = state.list.find(item => item.id === likeadd.id);

      if (!likeexists) {
        state.list.push(likeadd);
      }
      localStorage.setItem('likeProducts', JSON.stringify(state.list));
    },
    removeLike: (state, action) => {
      const productId = action.payload;
      state.list = state.list.filter(item => item.id !== productId);
      localStorage.setItem('likeProducts', JSON.stringify(state.list));
    }
  }
});

export const { addlike, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
